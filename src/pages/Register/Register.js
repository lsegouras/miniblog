import styles from "./Register.module.css"
import { useState, useEffect } from 'react'

const Register = () => {
  return (
    <div>
      <h1>Register to Post</h1>
      <p>Create your username and share your stories! </p>
      <form>
        <label>
          <span>Name: </span>
          <input type="text" name="name" required placeholder="User Name"></input> 
        </label>
        <label>
          <span>Email: </span>
          <input type="email" name="email" required placeholder="Email"></input> 
        </label>
        <label>
          <span>Password: </span>
          <input type="password" name="password" required placeholder="Password"></input> 
        </label>
        <label>
          <span>Confirm Password: </span>
          <input type="password" name="confirmPassword" required placeholder="Confirm Password"></input> 
        </label>
        <label className="btn">Register</label>
      </form>
    </div>
  )
}

export default Register