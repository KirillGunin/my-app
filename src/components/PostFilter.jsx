import React from 'react'
import Input from "../components/UI/Inputs/Input";
import Select from "../components/UI/Selects/Select";


const PostFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <Input
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder='Поиск'
      />

      <Select
        value={filter.sort}
        onChange={selectSort => setFilter({ ...filter, sort: selectSort })}
        defaultValue='Сортровка:'
        options={[
          { value: 'title', name: 'по названию' },
          { value: 'body', name: 'по описанию' }
        ]}
      />
    </div>
  )
}

export default PostFilter
