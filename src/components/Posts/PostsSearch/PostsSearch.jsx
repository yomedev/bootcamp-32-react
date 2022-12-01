import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom'

import { Button } from '../../Button';

export const PostsSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  // const queryParams = [...searchParams].reduce((acc, [key, value]) => {
  //   acc[key] = value
  //   return acc
  // }, {}) 
  const queryParams = useMemo(() => Object.fromEntries([...searchParams]), [searchParams])
  console.log(queryParams);
  const search = searchParams.get('search')
  const [value, setValue] = useState(search || '');
  const handleChange = event => setValue(event.target.value);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchParams({ ...queryParams, search: value, page: 1 })
  };

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        placeholder="Type to search..."
        value={value}
        onChange={handleChange}
      />
      <Button type="submit">Search</Button>
    </form>
  );
};