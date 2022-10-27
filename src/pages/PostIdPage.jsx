import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService"
import Preloader from "../components/UI/Preloader/Preloader";

const PostIdPage = () => {
  // вернет id
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])


  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })

  const [fetchComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPost(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchPostById(params.id)
    fetchComments(params.id)
  }, [])
  return (
    <div>
      <h2>This is page id {params.id}</h2>
      {isLoading
        ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}><Preloader /></div>
        : <div>{post.id} {post.title}</div> 
      }
      <h2>Комментарии</h2>
      {isCommentsLoading
      ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}><Preloader /></div>
      : <div>{comments.map(comment => 
        <div key={comment.id} style={{marginTop: '15px'}}>
          <h3>{comment.email}</h3>
          <div>{comment.body}</div>
        </div>
        )}</div>
    }
    </div>
  )
}

export default PostIdPage
