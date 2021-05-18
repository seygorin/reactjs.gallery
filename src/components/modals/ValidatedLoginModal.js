import React from 'react'
import PropTypes from "prop-types";
import { Formik } from "formik";
import * as Yup from "yup";

import styled from 'styled-components'

const ModalStyled = styled.div`
    width: 90%;
    max-width: 500px;
    background: white;
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: -2rem 2rem 2rem rgba(0, 0, 0, 0.2);
    filter: blur(0);
    transform: scale(1);
    opacity: 1;
    visibility: visible; 
    padding: 10px; 
    z-index: 1;
    
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

`
const ModalButtonStyled = styled.button`
    border: 0;
    background: skyblue;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
    line-height: 1;
    outline: none;
    float: right;
    margin: 5px;

    &:hover {
    background-color: #ddd;
    cursor: pointer;
    }
`


export default function ValidatedLoginModal (props) {

    const onClose = e => {
        props.onClose && props.onClose(e);
      };
    
    if (!props.show) {
        return null;
    }
    
  return ( 
      <>
      <ModalStyled>
            <ModalButtonStyled onClick={(e) => { onClose();}}>
                Close
            </ModalButtonStyled>
      <Formik
        initialValues={{ login: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log("Logging in", values);
            setSubmitting(false);
          }, 500);
        }}

        validationSchema={Yup.object().shape({
          name: Yup.string().required(),
          password: Yup.string()
            .required("No password provided!")
            .min(8, "Password is too short - should be 8 chars minimum!")
            .matches(/(?=.*[0-9])/, "Password must contain a number!")
        })}

        validate={values => {
          let errors = {};
          if (!values.login) {
            errors.login = "Put some login name!";
          }

        return errors;
        }}
      >

    {props => {
    const {
      values,
      touched,
      errors,
      isSubmitting,
      handleChange,
      handleBlur,
      handleSubmit
    } = props;

      return (
          <form onSubmit={handleSubmit}>

          <h2 htmlFor="login">Login</h2>
            <input
              id="login"
              name="login"
              type="text"
              placeholder="Enter your login"
              value={values.login}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          {errors.login && touched.login && (
          <div>{errors.login}</div>
          )}

          <h2 htmlFor="password">Password</h2>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          {errors.password && touched.password && (
          <div>{errors.password}</div>
          )}

        <ModalButtonStyled type="submit" disabled={isSubmitting}>
          Login
        </ModalButtonStyled>

        </form>
      );
    }}
    </Formik>
    </ModalStyled>
    </>
  )
}

ValidatedLoginModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };