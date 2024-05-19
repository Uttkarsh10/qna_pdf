import React from 'react'
import styles from './SignIn.module.css'

function SignIn() {
  return (
    <div style={{width:"250px", textAlign:"left", paddingLeft:"650px", paddingTop:"150px"}}>

        <div style={{fontSize:"20px", paddingTop:"10px"}}>Welcome back!</div>
        <div style={{paddingTop : "10px"}}>Sign in to continue</div>
        <div style={{paddingTop : "20px", paddingBottom:"5px"}}>Email</div>
        <input type="email" style={{width:"90%", height:"30px", borderRadius:"6px"}}/>
        <div style={{padding:"5px"}}><button className={styles.signIn_continueButton}>Continue</button></div>
        <div style={{paddingTop : "20px", textAlign:"center"}}>No account?<span style={{padding:"2px", color:"rgb(41, 74, 235)"}}>Create one</span></div>
        


    </div>
  )
}

export default SignIn