import React from 'react'
import styles from './Main.module.css'


function Main() {
  return (
    <div>

      <div style={{fontSize:"40px", fontWeight:"bold", paddingTop:"60px", paddingBottom:"5px"}}>
        <span>Chat with your </span>
        <br></br><span style={{color:"rgb(33, 62, 209)"}}>documents</span>
        <span> in seconds.</span>
      </div>

      <div style={{paddingBottom:"10px", color:"rgb(75, 72, 72)"}}>qna_pdf allows you to have conversations with any PDF document. Simply upload your file and start asking questions right away.</div>

      <div style={{padding:"5px"}}><button className={styles.mainButton}>Get Started</button></div>


      <div style={{fontSize:"40px", fontWeight:"bold", paddingTop:"60px", paddingBottom:"5px"}}>
        Start chatting in minutes
      </div>

      <div style={{paddingBottom:"10px", color:"rgb(75, 72, 72"}}>Chatting to your PDF files has never been easier.</div>

      <div style={{display:"grid", gridTemplateColumns:"repeat(3,auto)", paddingTop:"80px", width:"1000px", paddingLeft:"320px"}}>

        <div style={{textAlign:"left"}}>
          <div style={{color:"rgb(33, 62, 209)", padding:"3px"}}>Step 1</div>
          <div style={{fontSize:"16px", fontWeight:"bold", padding:"3px"}}>Sign up for an account</div>
          <div style={{padding:"3px"}}>Start out with our free plan or
             <br></br>choose our <span style={{textDecoration:"underline", offset:"2px", color:"rgb(33, 62, 209)"}}>pro plan</span>.</div>
        </div>

        <div style={{textAlign:"left"}}>
          <div style={{color:"rgb(33, 62, 209)", padding:"3px"}}>Step 2</div>
          <div style={{fontSize:"16px", fontWeight:"bold", padding:"3px"}}>Upload your PDF file</div>
          <div style={{padding:"3px"}}>We'll process your file and make it ready <br></br>for you to chat with.</div>
        </div>

        <div style={{textAlign:"left"}}>
          <div style={{color:"rgb(33, 62, 209)", padding:"3px"}}>Step 3</div>
          <div style={{fontSize:"16px", fontWeight:"bold", padding:"3px"}}>Start asking questions</div>
          <div style={{padding:"3px"}}>That's it, try out qna_pdf today - it <br></br>really takes less than a minute.</div>
        </div>
  

      </div>

    </div>
  )
}

export default Main

