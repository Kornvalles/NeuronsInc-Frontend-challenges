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

        console.log(value)
        setValues({...values,
            [name]: value
        })
    }

    const handleSubmit = (event) => {
        //event.preventDefault();
        alert(JSON.stringify(values))
        setValues('')
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
                    <div style={{ borderBottom: '2px solid #8166D1', marginBottom: '1rem', width: '20%' }} />
                    <form onSubmit={handleSubmit}>
                        <div style={InputContainer} >
                            <label style={Label} for="email" >Email</label>
                            <input style={Input} type="text" placeholder="Enter Email" name="email" value={values.email} onChange={handleChange} required />
                        </div>
                        <div style={InputContainer} >
                            <label style={Label} for="psw" >Password</label>
                            <input style={Input} type="password" placeholder="Enter Password" name="psw" value={values.psw} onChange={handleChange} required />
                        </div>
                        <div style={InputRadioContainer}>
                            <label style={radioBtnLabel} for="rememberPsw">
                                <input style={radioBtn} type='checkbox' id='rememberPsw' name='rememberPsw' value={values.rememberPsw} onChange={handleChange} />
                                Remember Password</label>
                            <div style={forgotPsw}>
                                Forgot Password?
                            </div>
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
    paddingBottom: '3rem'
}

const LoginContainer = {
    padding: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
}

const DrawingContainer = {
    padding: '2rem 0',
}

const Image = {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '100%',
}

const Left = {
    flex: '5',
    backgroundColor: '#D8D7DE',
    borderRadius: '30px 0 0 30px',
    padding: '2rem 1rem',
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
    padding: '0 1rem 1rem 0',
}

const InputRadioContainer = {
    padding: '0 0 .5rem 0',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
}

const LoginTitle = {
    fontFamily: 'Montserrat',
    fontWeight: '300',
    fontSize: '36px',
    fontStyle: 'normal',
    padding: '2rem 0 .5rem 0',
}

const Label = {
    fontFamily: 'Montserrat',
    fontWeight: '400',
    fontSize: '15px',
    fontStyle: 'normal',
    color: '#666666',
}

const radioBtn = {
    backgroundColor: '#D6D6D6',
    border: 'solid #D6D6D6'
}

const radioBtnLabel = {
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '14px',
    fontStyle: 'normal',
    color: '#D6D6D6',
}

const submitBtnContainer = {
    margin: 'auto',
    width: '60%',
    padding: '50px .5em 0 .5em'
}

const submitBtn = {
    borderRadius: '10px',
    width: '100%',
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

const forgotPsw = {
    cursor: 'pointer',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    fontSize: '14px',
    fontStyle: 'normal',
    color: '#D6D6D6',
}

export default Login;