import React, { useEffect, useState } from 'react';
import AddCommentForm from './AddCommentForm';
import CommentList from './CommentList';

import styled from 'styled-components'

const CommentContainer = styled.div`
    position: fixed;
    left: 1%;
    top: 17%;
    border: 1px solid black;
    height: 53%;
    width: 18.5%;
    overflow-y: auto;
    word-wrap: break-word;

    @media only screen and (max-width: 700px) {
    position: relative;
    left: 10%;
    width: 80%;
    margin-bottom: 3%;
    }

`

function Comments() {
  const savedComments = JSON.parse(localStorage.getItem('comments'));
  const [comments, setComments] = useState(savedComments || []);
  
  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  const removeComment = (commentToBeDeleted) => {
    setComments(comments.filter((comment) => commentToBeDeleted !== comment));
  };

  useEffect(() => {
    const comments = JSON.parse(localStorage.getItem('comment'));
    if (comments) {
      setComments(comments);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  return (
    <CommentContainer>
        <CommentList comments={comments} removeComment={removeComment} />
        <AddCommentForm addComment={addComment} />
    </CommentContainer>
  );
}

export default Comments;