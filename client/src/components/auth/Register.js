import React, { Fragment, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => setFormData({
    ...formData, [e.target.name]: e.target.value
  })

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      console.log('Passwords dont match')
    } else {
      console.log(formData)
      console.log('form submitted')
    }
  }

  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={e => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            value={name}
            placeholder='Name'
            name='name'
            onChange={e => onChange(e)}
            required
          />
        </div>
        <div className='form-group'>
          <input 
          type='email'
          value={email}
          placeholder='Email Address' 
          name='email'
          onChange={e => onChange(e)}
          />
          <small className='form-text'>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            name='password'
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            value={password2}
            name='password2'
            onChange={e => onChange(e)}
            minLength='6'
          />
        </div>
        <input 
        type='submit' 
        className='btn btn-primary' 
        value='Register' 
        />
      </form>
      <p className='my-1'>
        Already have an account? <a href='login.html'>Sign In</a>
      </p>
    </Fragment>
  );
};

export default Register;
