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



const ModalDistance  = ({open, onClose, title, video, children} )=>{
        if(!open){
                return null;
        }
        if(video){
                return ReactDom.createPortal (

                        <>
                        <div className = "ModalStyle">
                        <Button onClick = {onClose}  type="primary" style={{ marginLeft: 8, float: "right" }}>
                                Close
                        </Button>

                                <iframe  style = {videoStyle} width="560" height="515" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                <h1 className= "titleModal">{title}</h1>
                                <br/>
                                <p className = "descriptionModal">{children}</p>
                                
                        </div>
                        </>, 
                        document.getElementById("portal")
                )
        }

        return (

                <div style= {ModalStyle}>

                        {/* <iframe  style = {videoStyle } width="560" height="315" src="https://www.youtube.com/embed/Wy1KM_N_SP4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                        <h1>Hola mundo</h1>
                        <br/>
                        <p style = {   {} }> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, natus debitis quos quas reiciendis sit iusto sed quam facilis rem. Laudantium vel, error vero rerum velit quaerat fugit. Distinctio, magni.  </p>

                        <p style = {   {} }> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, natus debitis quos quas reiciendis sit iusto sed quam facilis rem. Laudantium vel, error vero rerum velit quaerat fugit. Distinctio, magni.  </p>
                        <p style = {   {} }> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, natus debitis quos quas reiciendis sit iusto sed quam facilis rem. Laudantium vel, error vero rerum velit quaerat fugit. Distinctio, magni.  </p>
                        <p style = {   {} }> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, natus debitis quos quas reiciendis sit iusto sed quam facilis rem. Laudantium vel, error vero rerum velit quaerat fugit. Distinctio, magni.  </p>

                           
                </div>
        )
}


export default ModalDistance;