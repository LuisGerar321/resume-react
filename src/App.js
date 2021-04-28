import './App.css';
import me from "./Picture_LuisGerardoCamara.jpg"
import  {AiFillLinkedin, AiFillPhone} from "react-icons/ai";
import {MdEmail, MdGTranslate} from "react-icons/md";
import { useState } from 'react';
import ResumeTable from  "./shared/organims/Table.jsx";
import Eng from  "./EnglishLevelLenguage.PNG";
import Spa from "./SpanishLevelLenguage.PNG";
<a href="https://icons8.com/icon/40669/c++">C++ icon by Icons8</a>


function App() {



  const EngText = {   
    profile:  {title: "PROFILE", body: `Computational Robotics Engineer and JavaScript Associate Software
    Engineer capable of working collaboratively and cooperatively in a
    software development company. Interested in contributing to the
    development of innovation, smart, disruptive applications, and the
    philosophy of sharing acompetitive knowledge used in IT Companies.`},
    education : {title: "EDUCATION", body: [ {title: "Universidad Politécnica Yucatán 2020", body: "Ing. Robótica Computacional"},  {title: "ITEP English level certificate", body: "Upper intermediate English certificate(B2) in December 2019"},  {title: "Universidad Politécnica Yucatán 2019", body: "Academic excellence 6th quarter September-December 2018"}  ] },     
    experience : {
                    title: "EXPERIENCE", 
                    body: [ 
                      {
                        title: "Plenumsoft (4th quarter Intership I)", 
                        body: `Identified of digits in images using machine learning algorithms and microcontrollers at Datadistik`
                      },  
                      {
                        title: `Freelancer experience as a teacher in Teams platform since May 2020:`,
                        body: [
                                `Designed and taught four full courses in programing microcontrollers to UPY students.`,
                                `Designed and taught two full courses and modular extracurricular class in general programing and Data structures in C and Python.` , 
                                `Designed and taught three courses in Real Time operating system(ROS) in C++ and Python language to UPY students.`, ` Experience teaching some students of Computational Robotics (7 and 8 quarter), Embedded System (6 quarter), and Data Engineering (2, 3 quarter).`
                              ]
                      },
                      {
                        title: "Instituto Nacional de Astrofísica, Óptica y Electrónica (10th quarter Intership III)", 
                        body: `Developed robotic software in C++ programming language for a service robot (Markovito Jr.) under supervision of Instituto Nacional de Astrofísica, Óptica y Electrónica (INAOE) with the purpose of doing futureresearch in this robotic field.`
                      }, 
                      {
                        title: "Professional", 
                        body: [
                          `Currently part of the Next-Gen talent development program as a JavaScript Associate Software Engineer at Ksquare University with the goal to boost my career up to become a Software Engineer 1 at The Ksquare Group, once completed the 16-week training program.`,
                          `Currently working as an asynchronous computational robotic professor at Universidad Politecnica de Yucatan.`,
                          `Currently working as a Freelancer with some friends in robotic fields.`
                        ]
                      }  
                    ] 
                  },
    software:   {
                  title: "SOFTWARES",
                  body: [
                    "Webots",
                    "ROS",
                    "TiaPortal",
                    "PLC SIM",
                    "Solid Works",
                    "FluidSim Pneumatics",
                    "FluidSim Hidraulic and LogiSim",
                    "Amazon AWS",
                    "Node JS",
                    "MongoDB (No-SQL)",
                    "Git and GitHub",
                    "Putty/SSH Linux",
                    "MatLab",
                    "Psoc Creator",
                    "LiveWire",
                    "Unity",
                    "PCBWizard",
                    "GameMaker Studio2",

                  ] 
                },
    framework:  {
                  title: "FRAMEWORKS",
                  body: [
                    
                    
                    "Gazebo",
                    "Open CV (C++/Python)",
                    " Pandas (Python)",
                    "MySQL (Python)",
                    "Numpy (Python)",
                    "Amazon AWS",
                    "MySQL (SQL)",
                    "MongoDB (No-SQL)",
                    "STL (C++)",
                    "Robotic Operating System (C++/Python)",
                    "React (Node JS)",
                    "Axios (Node JS)",
                    "Express (Node JS)",
                  ] 

                },
    os:         {
                  title: "OPERATING SYSTEMS",
                  body: [
                    "Windows",
                    "Ubuntu (Linux)",
                    "Ubuntu WS (Linux onto Windows)",
                    "Rasbian"
                  ] 
                },
    language :  {
                  title: "LANGUAGES", 
                  body: [
                    "English",
                    "Spanish",
                  ]
                },
    progLang:   {
                  title: "PROGRAMMING LANGUAGES",
                  body: [""]
                },
    skills:     {
                  title: "SKILLS",
                  body: [
                    "Dedicated ",
                    "Responsable ",
                    "Organized",
                    "Autodidact",
                    "Multitasking",
                    "Teamwork",
                    "Effective communication",
                    "Conflict management",
                  ]
                },
    interest:   {
                  title: "INTERESTS",
                  body: [
                    "Apps development",
                    "Data science ",
                    "Machine Learning",
                    "Computer's science",
                    "Internet of things ",
                    "Artificial vision",
                    "Robotics",
                    "Game development",
                  ]
                },
  };


  const EspText = {   
    profile:  {title: "PERFIL", body: `Ingeniero en robótica Computacional y asociado en ingeniería en software en Ksquare University capaz de trabajar en colaboración para desarrollar software en IT companies. Interesado en contribuir y desarrollar aplicaciones disruptivas, inteligentes e innovadoras, siguiendo la filosofía de compartir el conocimiento para el bien común.`},
    education : {title: "EDUCACION", body: [ {title: "Universidad Politécnica Yucatán 2020", body: "Ing. Robótica Computacional"},  {title: "Certificado de nivelación de Ingles ITEP", body: "Certificado Intermedio-avanzado(B2) en Diciembre del 2019."},  {title: "Universidad Politécnica Yucatán 2019", body: "Diploma a exelencia academica September-December 2018"}  ] },     
    experience : {
                    title: "EXPERIENCIA", 
                    body: [ 
                      {
                        title: "Plenumsoft (Estancia I en 4th cuatrimestre)", 
                        body: `Identificador dígitos en imágenes usando algoritmos de machine learning y microcontroladores en el departamento de Datadistik.`
                      },  
                      {
                        title: `Experiencia como profesor independiente desde Mayo del 2020:`,
                        body: [
                                `Diseñé e impartí cuatro cursos en programación de microcontroladores para estudiantes de UPY.`,
                                `Diseñé e impartí dos cursos en la materia de “Data Structures” usando C Language con memoria dinámica para estudiantes de UPY.` , 
                                `Diseñé e impartí tres cursos en la materia de “Real Time Operating System(ROS)” enfocada completamente a robótica usando C++/Python para estudiantes de UPY.`, 
                              ]
                      },
                      {
                        title: "Instituto Nacional de Astrofísica, Óptica y Electrónica (10th quarter Intership III)", 
                        body: `Desarrolle software para robótica usando programación en C++ en un robot servicio llamado Markovito Jr. bajo la supervisión y estándares del Instituto Nacional de Astrofísica, Óptica y Electrónica con fines de hacer investigación futura.`
                      }, 
                      {
                        title: "Profesional", 
                        body: [
                          `Actualmente, formo parte al programa ‘Next-Gen’ impartida por Ksquare University con la meta de convertirme en un Ingeniero en Software 1 en la compañía The Ksquare Group.`,
                          `Trabajando asincronamente como profesor de robotica computacional en la Universidad Politecnica de Yucatan.`,
                          `Trabajando como independiente en conjunto con mis compañeros universitarios en el area de robotica.`
                        ]
                      }  
                    ] 
                  },
    software:   {
                  title: "SOFTWARES",
                  body: [
                    "Webots",
                    "ROS",
                    "TiaPortal",
                    "PLC SIM",
                    "Solid Works",
                    "FluidSim Pneumatics",
                    "FluidSim Hidraulic and LogiSim",
                    "Amazon AWS",
                    "Node JS",
                    "MongoDB (No-SQL)",
                    "Git and GitHub",
                    "Putty/SSH Linux",
                    "MatLab",
                    "Psoc Creator",
                    "LiveWire",
                    "Unity",
                    "PCBWizard",
                    "GameMaker Studio2",

                  ] 
                },
    framework:  {
                  title: "FRAMEWORKS",
                  body: [
                    
                    
                    "Gazebo",
                    "Open CV (C++/Python)",
                    " Pandas (Python)",
                    "MySQL (Python)",
                    "Numpy (Python)",
                    "Amazon AWS",
                    "MySQL (SQL)",
                    "MongoDB (No-SQL)",
                    "STL (C++)",
                    "Robotic Operating System (C++/Python)",
                    "React (Node JS)",
                    "Axios (Node JS)",
                    "Express (Node JS)",
                  ] 

                },
    os:         {
                  title: "SISTEMAS OPERATIVOS",
                  body: [
                    "Windows",
                    "Ubuntu (Linux)",
                    "Ubuntu WS (Linux onto Windows)",
                    "Rasbian"
                  ] 
                },
    language :  {
                  title: "IDIOMAS", 
                  body: [
                    "Ingles",
                    "Español",
                  ]
                },
    progLang:   {
                  title: "LENGUAJES DE PROGRAMACION",
                  body: [""]
                },
    skills:     {
                  title: "HABILIDADES",
                  body: [
                    "Dedicado ",
                    "Responsable ",
                    "Organizado",
                    "Autodidacta",
                    "Multitasking",
                    "Teamwork",
                    "Comunicacion asertiva",
                    "Manejo de conflictos",
                  ]
                },
    interest:   {
                  title: "INTERESES",
                  body: [
                    "Desarrollo de Aplicaciones/Web",
                    "Ciencia de Datos ",
                    "Machine Learning",
                    "Ciencias de la computacion",
                    "Internet de las cosas",
                    "Vision Artificial",
                    "Robotica",
                    "Desarrollo de juegos",
                  ]
                },
  };




  const  [ currentText, setcurrentText  ] = useState(EspText);
  const  [stateButton, setStateButton]  =  useState(true )
  
  const changeLanguage = ()=>{
    setStateButton(!stateButton);
    if(stateButton){
      return setcurrentText(  EngText   )
    }else{
      return setcurrentText(  EspText   )
    }
    
  }

  return (
    <div className="App">

      <section >
        <div className = "item">
          
          <div className="info">
            <img src= {me} style = {  { marginTop: "20px", marginRight: "9rem",width : "auto", height: "30vh", float: "right",} } alt=""/>
            <h1 style = {{textAlign:  "left", color:"#626366",  margin: "0px", fontSize : "5vh", fontFamily: "'Raleway', sans-serif"  }}>Luis Gerardo</h1>
            <h1 style = {{textAlign:  "left", color:"#626366",margin: "0px",fontSize : "5vh", fontFamily: "'Raleway', sans-serif"  }} >Camara</h1>
            <h1 style = {{textAlign:  "left", color:"#626366",margin: "0px",fontSize : "5vh", fontFamily: "'Raleway', sans-serif"  }}>Salinas</h1>
            <ul style = {{listStyleType: "none", marginLeft: "-2.5vw", marginTop: "-2vh"}}>
              <li>
                <AiFillLinkedin onClick={() => window.open("https://www.linkedin.com/in/luis-gerardo-camara-salinas321/", '_blank')} className = "iconsInfo" /><p style = {{textAlign: "left", fontFamily: "'Raleway', sans-serif", color:"#626366", fontSize : "2.4vh" } } >luis-gerardo-camara-salinas321</p>
              </li>

              <li>
                <MdEmail className = "iconsInfo" /> <p style = {{textAlign: "left", fontFamily: "'Raleway', sans-serif", color:"#626366", fontSize : "2.4vh" } } >al1609022@upy.edu.mx</p>

              </li>
              <li>
                <AiFillPhone className = "iconsInfo" /> <p style = {{textAlign: "left", fontFamily: "'Raleway', sans-serif", color:"#626366", fontSize : "2.4vh" } } >9992674470</p>
              </li>

            </ul>
          </div>

          <div className =  "barSection">
            <h2 className = "barSectionText">{currentText.profile.title}</h2>

          </div>

          <p>
            {currentText.profile.body}
          </p>


          <div className =  "barSection">
            <h2 className = "barSectionText"> {  currentText.education.title}   </h2>
          </div>
          <ResumeTable info = {currentText.education.body }  ></ResumeTable>

          <div className =  "barSection">
            <h2 className = "barSectionText"> {  currentText.experience.title}   </h2>
          </div>
          <ResumeTable info = {currentText.experience.body }  ></ResumeTable>
        </div>

        <div className="vertical_line"></div>

        <div className = "item">
          <div className="technicalInfo">
            <div className="section">
              <div className="component">
                {/* The component is not rendering as a box, fix that! */}
                <div className =  "square"  style = {{width:"2vw", height: "auto"} }>
                  <h1></h1>
                </div>
                <h2 >{currentText.software.title}</h2>
              </div>

              <ResumeTable info = {currentText.software.body} array = {true} ></ResumeTable>


              </div>

            <div className="section">
              <div className="component">
                  {/* The component is not rendering as a box, fix that! */}
                  <div className =  "square"  style = {{width:"2vw", height: "auto", backgroundColor:"#8176b2"} }>
                    <h1></h1>
                  </div>
                  <h2 >{currentText.framework.title}</h2>
              </div>
              <ResumeTable info = {currentText.framework.body} array = {true}  ></ResumeTable>
            </div>

          </div>


          <div className="component">
                {/* The component is not rendering as a box, fix that! */}
                <div className =  "square"  style = {{width:"2vw", height: "auto"} }>
                  <h1></h1>
                </div>
                <h2 >{currentText.language.title}</h2>
          </div>

          <div className="technicalInfo">

            <div className="section">


              <ResumeTable info = { [currentText.language.body[0]]  } array = {true} ></ResumeTable>
              <img className=  "imgChart" src= {Eng} alt=""/>

            </div>

            <div className="section">
              <ResumeTable info = { [currentText.language.body[1]]  } array = {true} ></ResumeTable>
              <img  className=  "imgChart" src= {Spa} alt=""/>

            </div>

          </div>


          <div className="component">
                {/* The component is not rendering as a box, fix that! */}
                <div className =  "square"  style = {{width:"2vw", height: "auto"} }>
                  <h1></h1>
                </div>
                <h2 >{currentText.progLang.title}</h2>
                
          </div>

          <div className="section icon">
            <img className = "iconProgramming" src="https://img.icons8.com/color/96/000000/c-plus-plus-logo.png" />
            <img   className = "iconProgramming"  src="https://img.icons8.com/color/96/000000/c-programming.png"/>
            <img  className = "iconProgramming" src="https://img.icons8.com/color/96/000000/python.png"/>
            <img className = "iconProgramming" src="https://img.icons8.com/color/96/000000/javascript.png"/>
            <img  className = "iconProgramming" src="https://img.icons8.com/color/96/000000/css3.png"/>
            <img  className = "iconProgramming" src="https://img.icons8.com/color/96/000000/html-5--v1.png"/>
          </div>



          <div className="technicalInfo">
            <div className="section">
              <div className="component">
                {/* The component is not rendering as a box, fix that! */}
                <div className =  "square"  style = {{width:"2vw", height: "auto"} }>
                  <h1></h1>
                </div>
                <h2 >{currentText.skills.title}</h2>
              </div>

              <ResumeTable info = {currentText.skills.body} array = {true} ></ResumeTable>


              </div>

            <div className="section">
              <div className="component">
                  {/* The component is not rendering as a box, fix that! */}
                  <div className =  "square"  style = {{width:"2vw", height: "auto", backgroundColor:"#8176b2"} }>
                    <h1></h1>
                  </div>
                  <h2 >{currentText.interest.title}</h2>
              </div>
              <ResumeTable info = {currentText.interest.body} array = {true}  ></ResumeTable>
            </div>

          </div>
          
          

        </div>
        <MdGTranslate size={80}  style = { {position: "fixed", right:"-0" , float: "left", textAlign:"right"}} onClick = {()=>{ changeLanguage(stateButton)  } }  />
      </section>


    </div>
  );
}

export default App;
