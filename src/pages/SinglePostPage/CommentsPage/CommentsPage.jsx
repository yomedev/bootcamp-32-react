import { useEffect, useState } from 'react';

import { CommentForm } from '../../../components/Comments/CommentForm';
import { CommentList } from '../../../components/Comments/CommentList';

export const CommentsPage = () => {
  const [comments, setComments] = useState(null);
  useEffect(() => {
    window.scrollTo({ top: document.body.offsetHeight, behavior: 'smooth' });
  }, []);
  return (
    <>
      <CommentForm setComments={setComments} />
      <CommentList comments={comments} setComments={setComments} />
    </>
  );
};