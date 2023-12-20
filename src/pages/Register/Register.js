import styles from "./Register.module.css"
import { useState, useEffect } from 'react'

const Register = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  
  const handleSubmit = (e) => {
    e.prevent.default()

    setError("")

    const user = {
      name,
      email,
      password
    }

    if (password !== confirmPassword) {
      setError("Passwords must match!")
      return;
    }

    console.log(user);
  }
  
  return (
    <div className={styles.register}>
      <h1>Register to Post</h1>
      <p>Create your username and share your stories! </p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Name: </span>
          <input type="text" name="name" required placeholder="Username" value={name} onChange={(e)=> setName(e.target.value)}></input> 
        </label>
        <label>
          <span>Email: </span>
          <input type="email" name="email" required placeholder="Email" value={email} onChange={(e)=> setEmail(e.target.value)}></input> 
        </label>
        <label>
          <span>Password: </span>
          <input type="password" name="password" required placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}></input> 
        </label>
        <label>
          <span>Confirm Password: </span>
          <input type="password" name="confirmPassword" required placeholder="Confirm Password" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}></input> 
        </label>
        <button className="btn">Register</button>
      </form>
    </div>
  )
}

export default Register