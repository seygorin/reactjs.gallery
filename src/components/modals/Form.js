import React, { useState, useReducer } from 'react'
import PropTypes from "prop-types";

import styled from 'styled-components'

const FormStyled = styled.div`
    width: 90%;
    max-width: 500px;
    background: white;
    border: 1px solid #ccc;
    transition: 1.1s ease-out;
    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5);
    filter: blur(0);
    transform: scale(1);
    opacity: 1;
    visibility: visible; 
    padding: 10px; 
    z-index: 500;
    
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

`
const FormButtonStyled = styled.button`
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
const ButtonStyled = styled(FormButtonStyled)`
    background-color: #eb879c; 
    float: left;
`
const WrapperForm = styled.div`
    padding: 5px 20px;
`
const FormFieldset = styled.div`
    margin: 30px 0;
`

const formReducer = (state, event) => {
    if(event.reset) {
        return {
          choice: '',
          persent: 0,
          name: '',
          'like-it': false,
        }
      }
    return {    
        ...state, 
        [event.name]: event.value 
    }
}


export default function Form (props) {
    const [formData, setFormData] = useReducer(formReducer, { count: 100, })
    const [submitting, setSubmitting] = useState(false)

    const onClose = e => {
        props.onClose && props.onClose(e);
      };
    
    if (!props.show) {
        return null;
    }
    
    const handleSubmit = event => {
        event.preventDefault();
        setSubmitting(true);

        setTimeout(() => {
            setSubmitting(false)
            setFormData({
                reset: true
              })
        }, 3000)
      }

      const handleChange = event => {
        const isCheckbox = event.target.type === 'checkbox';
          setFormData({
              name: event.target.name,
              value: isCheckbox ? event.target.checked : event.target.value,
          })
      }

    return ( 
        <>
        <FormStyled>
        <WrapperForm>
            <h1>How About Rate This</h1>
            {submitting && 
            <div>
                You are submitting the following:
                <ul>
                    {Object.entries(formData).map(([name, value]) => (
                    <li key={name}><strong>{name}</strong>:{value.toString()}</li>
                    ))}
                </ul>
         </div>}
            <form onSubmit={handleSubmit}>
            <FormFieldset >
                <label>
                <h3>Name</h3>
                <input name="name" onChange={handleChange} value={formData.name || ''} disabled={submitting}/>
                </label>
            </FormFieldset>
            <FormFieldset>
                <label>
                    <h3>Choice</h3>
                    <select name="choice" onChange={handleChange} value={formData.choice || ''}>
                        <option value="">--Please choose an option--</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option value="maybe">Maybe</option>
                    </select>
                </label>
                <label>
                    <h3>Percent</h3>
                    <input type="number" name="percent" onChange={handleChange} step="1" value={formData.percent || ''}/>
                </label>
                <label>
                    <h3>Like it?</h3>
                    <input type="checkbox" name="like-it" onChange={handleChange} 
                    checked={formData['like-it'] || false} disabled={formData.choice !== 'yes'}/>
                </label>
            </FormFieldset>
            <ButtonStyled type="submit" disabled={submitting}>Submit</ButtonStyled>
            <FormButtonStyled onClick={(e) => { onClose();}}>
            Close
            </FormButtonStyled>
            </form>
        </WrapperForm>
        </FormStyled>
        </>
    )
}

Form.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
  };