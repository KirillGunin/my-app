import React, { useState } from 'react'
import Input from '../Inputs/Input'
import Button from '../Buttons/Button'
import classes from './PostForm.module.css'

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post, id: Date.now()
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form className={classes.form}>
      {/* Управляемый компонент */}
      <Input value={post.title} onChange={e => setPost({ ...post, title: e.target.value })} type="text" placeholder="Название поста" />
      {/* Неуправляемый компонент */}
      <Input value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} type="text" placeholder="Текст поста" />
      <Button onClick={addNewPost}>Создать</Button>
    </form>
  )
}

export default PostForm
