import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = function ({ posts, title, remove }) {

  if (!posts.length) {
    return (<h2 style={{ textAlign: 'center' }}>Постов нет</h2>)
  }

  return (
    <div>
      <p className="head">{title}</p>
      <TransitionGroup>
        {posts.map((post, index) =>

          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >

            <PostItem remove={remove} number={index + 1} post={post} />

          </CSSTransition>
        )}
      </TransitionGroup>

    </div>
  )
}

export default PostList
