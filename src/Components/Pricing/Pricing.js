import React from 'react'
import styles from './Pricing.module.css'
import DoneIcon from '@mui/icons-material/Done';
import RemoveIcon from '@mui/icons-material/Remove';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Pricing() {
  return (
    <div>

        <div className={styles.pricingHeading}>Pricing</div>

        <div >Whether you're just trying out our service or need more, <br></br>we've got you covered.</div>

        <div className={styles.pricingContainer}>

          <div className={styles.pricingBox}>

            <div style={{fontSize:"20px", fontWeight:"bold", padding:"5px"}}>Free</div>
            <div style={{color:"grey", fontSize:"12px"}}>For small side projects.</div>
            <div style={{fontSize:"30px", fontWeight:"bold", paddingTop:"15px", paddingBottom:"5px"}}>$0</div>
            <div style={{color:"#grey", fontSize:"12px", paddingBottom:"20px"}}>per month</div>

            <div style={{width:"100%", height:"45px", backgroundColor:"rgb(228, 228, 205)", alignContent:"center", color:"GrayText", marginBottom:"15px"}}>
              10 PDFs/mo included
            </div>

            <div style={{color:"grey", fontSize:"15px", textAlign:"left", padding:"10px", marginBottom:"10px"}}>

              <div style={{padding:"5px"}}><DoneIcon fontSize="small"/> 5 pages per PDF</div>
              <div style={{padding:"5px"}}><DoneIcon fontSize="small"/> 4mb file size limit</div>
              <div style={{padding:"5px"}}><DoneIcon fontSize="small"/> Mobile friendly interface</div>
              <div style={{padding:"5px"}}><RemoveIcon fontSize="small"/> Higher quality responses</div>
              <div style={{padding:"5px"}}><RemoveIcon fontSize="small"/> Priority support</div>

            </div>

            <button className={styles.pricingButton}>Sign up</button>
            {/* <ArrowForwardIcon fontSize="small"/> */}

          </div>

          <div className={styles.pricingSpacer}></div>

          <div className={styles.pricingBox}>

          <div style={{fontSize:"20px", fontWeight:"bold", padding:"5px"}}>Pro</div>
            <div style={{color:"grey", fontSize:"12px"}}>For larger projects with higher needs.</div>
            <div style={{fontSize:"30px", fontWeight:"bold", paddingTop:"15px", paddingBottom:"5px"}}>$14</div>
            <div style={{color:"#grey", fontSize:"12px", paddingBottom:"20px"}}>per month</div>

            <div style={{width:"100%", height:"45px", backgroundColor:"rgb(228, 228, 205)", alignContent:"center", color:"GrayText", marginBottom:"15px"}}>
              50 PDFs/mo included
            </div>

            <div style={{color:"grey", fontSize:"15px", textAlign:"left", padding:"10px", marginBottom:"10px"}}>

              <div style={{padding:"5px"}}><DoneIcon fontSize="small"/> 25 pages per PDF</div>
              <div style={{padding:"5px"}}><DoneIcon fontSize="small"/> 16mb file size limit</div>
              <div style={{padding:"5px"}}><DoneIcon fontSize="small"/> Mobile friendly interface</div>
              <div style={{padding:"5px"}}><DoneIcon fontSize="small"/> Higher quality responses</div>
              <div style={{padding:"5px"}}><DoneIcon fontSize="small"/> Priority support</div>

            </div>

            <button className={styles.pricingButton}>Sign up</button>

          </div>

        </div>


    </div>
  )
}

export default Pricing