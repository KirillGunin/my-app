import React from "react";
import Button from "./UI/Buttons/Button";
import { useNavigate } from "react-router-dom"

const PostItem = (props) => {
  const navigate = useNavigate()

  return (
    <div className="post">
      {/* content */}
      <div className="post__content">
        <strong>{props.post.id} {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div>
      {/* button */}
      <div className="post__btn">
        <Button onClick={() => navigate(`/posts/${props.post.id}`)}>Открыть</Button>
        <Button onClick={() => props.remove(props.post)}>Удалить</Button>
      </div>
    </div>
  )
}

export default PostItem
