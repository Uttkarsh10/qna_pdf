import React from 'react'
import styles from './SignIn.module.css'

function SignIn() {
  return (
    <div>

        <div>Welcome back!</div>
        <div>Sign in to continue</div>
        <div>Email</div>
        <input type="email"/>
        <div style={{padding:"5px"}}><button className={styles.signIn_continueButton}>Continue</button></div>
        
        <div style={{display:"flex"}}>
            <div>No account?</div>
            <div>Create oen</div>
        </div>

    </div>
  )
}

export default SignIn