import React from 'react'
import styles from './Navbar.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Navbar() {
  return (
    <div className={styles.navbar}>
        <div style={{padding:"10px"}}>qna_pdf</div>
        <div style={{display:"flex"}}>
            <div style={{padding:"10px"}}>Pricing</div>
            <div style={{padding:"10px"}}>Sign in</div>
            <div style={{padding:"5px"}}><button className={styles.navbarButton}>Get Started</button></div>
            {/* <ArrowForwardIcon/> */}
        </div>
    </div>
  )
}

export default Navbar