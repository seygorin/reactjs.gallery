import React from 'react';
import Comment from './Comment';

import styled from 'styled-components'

const CommentStyled = styled.div`
  margin: 2%;

`

const Commentist = ({ comments, removeComment }) => {
  return (
    <CommentStyled>
        {comments.map((comment) => (
          <p>
            <Comment key={comment} comment={comment} removeComment={removeComment} />
          </p>
        ))}
    </CommentStyled>
  );
};

export { Commentist as default };