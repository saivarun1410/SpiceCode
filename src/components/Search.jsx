import styled from 'styled-components';
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

    const [input, setInput]=useState("");
    const navigate=useNavigate();

    const submitHandler=(e)=>{
        e.preventDefault();
        navigate('/searched/'+input)
    };

  return (
    <FormStyle onSubmit={submitHandler}>
        <div>
            <input
            onChange={(e)=>setInput(e.target.value)}
            type="text" 
            placeholder='Search a Recipe' 
            value={input}
            />
        </div>
    </FormStyle>
  );
}

const FormStyle=styled.form`
div {
    width: 350px;
    position: relative;
    display: flex;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
  }
  
  input {
    width: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    padding: 15px 45px 15px 15px;
    background-color: black;
    color: white;
    border-radius: 2rem;
    border:none;
    transition: all .4s;
  }
    svg{
        position:relative;
        top:50%;
        left:0%;
        transform:translate(100%,-50%);
        color:white;
    }
`;

export default Search