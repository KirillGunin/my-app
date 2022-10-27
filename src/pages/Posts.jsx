import React, { useEffect, useRef, useState } from "react";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Button from "../components/UI/Buttons/Button";
import Modals from "../components/UI/Modals/Modals";
import PostForm from "../components/UI/PostForm/PostForm";
import Preloader from "../components/UI/Preloader/Preloader";
import Pagination from "../components/UI/Paginations/Pagination";
import PostService from "../API/PostService";
import { usePosts } from "../hooks/usePosts";
import { useFetching } from "../hooks/useFetching";
import { getPagesCount } from "../utils/pages";
import { useObserver } from '../hooks/useObserver'

function Posts() {
    // объявим состояние
    // const [value, setValue] = useState('Текс в инпуте')
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modal, setModal] = useState(false)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)
    const lastElement = useRef()

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    // обработка через хук обработи индикации загрузки и ошибки запроса на получения данных
    const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
      const response = await PostService.getAll(limit, page) //компонент в API
      setPosts([...posts, ...response.data])
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPagesCount(totalCount, limit))
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
      setPage(page + 1)
    })

    // при пустом массиве второго аргумента фкнкция отработает только 1 раз
    useEffect(() => {
      fetchPosts(limit, page)
    }, [page])

    // Создаем пост
    const createPost = (newPost) => {
      setPosts([...posts, newPost])
      setModal(false)
    }

    // Получаем пост из дочернего компонента
    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
      setPage(page)
    }

    return (
      <div className="App">
        <Button style={{ marginTop: 15 }} onClick={() => setModal(true)}>Создать</Button>
        <Modals visible={modal} setVisible={setModal}>
          <PostForm create={createPost} />
        </Modals>
        <PostFilter filter={filter} setFilter={setFilter} />
        {postError && <h2 style={{ textAlign: 'center' }}>Ошибка {postError}</h2>}
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'} />
        <div ref={lastElement} style={{ height: 20, background: 'red' }} />
        {isPostsLoading &&
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}><Preloader /></div>
        }
        <Pagination
          page={page}
          changePage={changePage}
          totalPages={totalPages}
        />
      </div>
    );
  }

export default Posts;
