import React, { useState } from 'react';

import drawing from '../assets/images/login-drawing.png'

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        setValues({
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        alert(JSON.stringify(values))
        setValues('')
        event.preventDefault();
    }

    return (
        <div style={Container}>
            <div style={Left} >
                <div style={TextContainer} >
                    <p style={LoginText} >Welcome back! Nice to see you again, we hope you are doing great</p>
                </div>
                <div style={DrawingContainer} >
                    <img style={Image} src={drawing} alt='drawing' /> 
                </div>
            </div>
            <div style={Right} >
                <div style={LoginContainer} >
                    <div style={LoginTitle}>User <b style={{ fontWeight: '500' }}>login</b></div>
                    <form onSubmit={handleSubmit}>
                        <div style={InputContainer} >
                            <label style={Label} for="email" >Email</label>
                            <input style={Input} type="text" placeholder="Enter Email" name="email" value={values.email} onChange={handleChange} />
                        </div>
                        <div style={InputContainer} >
                            <label style={Label} for="psw" >Password</label>
                            <input style={Input} type="password" placeholder="Enter Password" name="psw" value={values.password} onChange={handleChange} />
                        </div>
                        <div style={InputRadioContainer} >
                            <input type='radio' id='rememberPsw' name='rememberPsw' />
                            <label style={radioBtnLabel} for="rememberPsw">Remember Password</label>
                        </div>
                        <div style={{ float: 'right' }}>
                            <a href='/' >Forgot Password?</a>
                        </div>
                        <div style={submitBtnContainer} >
                            <button style={submitBtn} ><div style={LoginBtnText} >Login</div></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

const Container = {
    marginTop: '100px',
    paddingBottom: '200px',
    borderRadius: '30px',
    margin: 'auto',
    width: '50%',
    display: 'flex',
    maxWidth: '1000px'
}

const LoginText = {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '24px',
    fontStyle: 'normal',
    textAlign: 'center',
    color: '#666666',
}

const TextContainer = {
    margin: 'auto',
    width: '70%',
    paddingBottom: '3em'
}

const LoginContainer = {
    padding: '1em 2em',
    display: 'flex',
    flexDirection: 'column',
}

const DrawingContainer = {
    padding: '3em 1em',
}

const Image = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%',
}

const Left = {
    flex: '5',
    backgroundColor: '#D8D7DE',
    borderRadius: '30px 0 0 30px',
    padding: '2em 1em',
}

const Right = {
    flex: '6',
    backgroundColor: '#FFF',
    borderRadius: '0 30px 30px 0',
}

const Input = {
    padding: '.5em',
    borderRadius: '10px',
    //maxWidth: '510px',
    width: '100%',
    marginTop: '.5em',
    border: '1px solid #D0D0D0'
}

const InputContainer = {
    padding: '0 1em 1em 1em',
}

const InputRadioContainer = {
    padding: '0 1em .5em 1em',
    float: 'left',
}

const LoginTitle = {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: '36px',
    fontStyle: 'normal',
    padding: '1em 0 .5em .5em'
}

const Label = {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '15px',
    fontStyle: 'normal',
    color: '#666666',
}

const radioBtnLabel = {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '15px',
    fontStyle: 'normal',
    color: '#666666',
}

const submitBtnContainer = {
    margin: 'auto',
    width: '100%',
    padding: '100px .5em 0 .5em'
}

const submitBtn = {
    borderRadius: '10px',
    minWidth: '244px',
    padding: '.5em',
    background: 'linear-gradient(89.62deg, #48425C 0.32%, #6F6884 99.67%)',
    color: '#FFF',
    border: '0'
}

const LoginBtnText = {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '15px',
    fontStyle: 'normal',
    color: '#FFF',
}

export default Login;