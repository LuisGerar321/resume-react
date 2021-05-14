import React from 'react'
import ReactDom from 'react-dom'
import { Button, DatePicker, version } from "antd";
import 'antd/dist/antd.css';



const ModalStyle = {
        margin: "0 auto",
        width:  "80vw",
        height:  "80vh",
        position:  "fixed",
        top :  "5vw",
        left:  "20vh",
        // backgroundColor: "rgba(160, 160, 160)",
        // borderRadius: "1rem",
        // boxShadow: "0px 4px 8px rgba(168, 173, 173, 0.322)",
        backgroundColor : "rgb(235, 235, 235)",
        zIndex : "1000",
        padding: "30px",
        
        
}
const overLayer  = {
        position:  "fixed",
        top: "0",
        left : "0",
        right: "0",
        botton: "0",
        backgroundColor: "rgba(0,0,0, .7)",
        zIndex: "2      000",
}

const videoStyle = {
        float: "left",
        paddingLeft: "40px",
        paddingTop: "10vh",
        paddingRight: "10px",
        width: "30vw",
        height: "60vh",

}


const iconSectionStyle = {
        margin: "20px",
        width: "20%",
        height: "80%",
        backgroundColor: "rgba(82, 131, 221, 0.144)",
        borderRadius: "0.6rem",
        transition: "all 0.3s ease-in-out",
        flexShrink: "0",
        marginRight: "40px",
        zIndex: "1"
}


const ModalPSoC  = ({open, onClose, title, image, children} )=>{
        if(!open){
                return null;
        }
        if(image){
                return ReactDom.createPortal (

                        <>
                        <div className = "ModalStyle">
                        <Button onClick = {onClose}  type="primary" style={{ marginLeft: 8, float: "right" }}>
                                Close
                        </Button>

                        <img className = "imgModal"  src={image} alt=""/>  
                                <h1 className= "titleModal" >{title}</h1>
                                <br/>
                                <p className = "descriptionModal">{children}</p>
                                
                        </div>
                        </>, 
                        document.getElementById("portal")
                )
        }

}


export default ModalPSoC;  