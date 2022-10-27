import { useMemo } from "react"

// кастомный хук с параметрами (посты и метод сортировки)
export const useSortedPosts = (posts, sort) => {

  const sortedPosts = useMemo(() => {
    if (sort) {
      // сортировка через localeCompare()
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    }
    return posts
  }, [sort, posts])

  return sortedPosts
}

// вернет отфильтрованный и отсортированный массив 
export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(query))
  }, [query, sortedPosts])

  return sortedAndSearchedPosts
}
