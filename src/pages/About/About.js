import styles from './About.module.css'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className={styles.about}>
      <h2>About the Mini <span>Blog</span></h2>
      <p>This project consists of a blog coded with React on the front-end and Firebase on the back-end.</p>
      <Link to="/posts/create" className = "btn">Create Post</Link>
    </div>
  )
}

export default About