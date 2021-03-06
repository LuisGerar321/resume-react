import './App.css';
import me from "./img/Picture_LuisGerardoCamara.jpg"
import  {AiFillLinkedin, AiFillPhone} from "react-icons/ai";
import {MdEmail, MdGTranslate} from "react-icons/md";
import { useState } from 'react';
import ResumeTable from  "./shared/organims/Table.jsx";
import Eng from  "./img/EnglishLevelLenguage.png";
import Spa from "./img/SpanishLevelLenguage.png";
import Cicd from "./img/cicd.jpg";
import apiP from "./img/api.png";
import apiSC from "./img/apiSC.png";



import upyPhoto  from  "./img/upy.jpg";
import itepLogo from  "./img/itepLogo.png";
import Icon from "./img/Icon.png";
import EngLevel from "./img/EnglishLevelLenguage.png";
import SpaLevel from "./img/SpanishLevelLenguage.png";
import ProgLevel from "./img/ProgSkills.png";
import Markovito from "./img/MarkovitoJr.jpg";
import DataDistik from "./img/DataDistik.png";
import Programming from "./img/ProgrammingIllustration.png";
import CounterCar from "./img/CounterCar.png";
import DistanceControl from "./img/Distance_control.jpeg";
import MotorDcConnections from  "./img/ControlMotor.jpg";
import KeyBoard from "./img/KeyboardMatrix.jpg";
import DataD from "./img/Propuesta_proyecto_png.png";
import Micro from "./img/Micro.jpg"
import Tiago from "./img/tiago.jpg"
import Motor from "./img/ControlMotor.jpg"
import Car from "./img/carCounterHD.jpg"
import INAOE_LETTER from "./img/INAOE_LETTER.jpg";
import UPY_LETTER from "./img/UPY_LETTER.jpg";

import Note from "./shared/organims/Note"
import Modal from "./shared/organims/Modal.jsx"
import ModalData from "./shared/organims/ModalData.jsx"
import ModalCounter from "./shared/organims/ModalCounter.jsx"
import ModalDistance from "./shared/organims/ModalDistance.jsx"
import ModalMotor from "./shared/organims/ModalMotor.jsx"
import ModalPSoC from "./shared/organims/ModalPSoC.jsx"
import ModalPortfolio from "./shared/organims/ModalPortfolio.jsx"
import ModalAPI from "./shared/organims/ModalAPI.jsx"


<a href="https://icons8.com/icon/40669/c++">C++ icon by Icons8</a>

function App() {



const EngText = {   
  profile:  {title: "PROFILE", body: `Computational Robotics Engineer and JavaScript Associate Software
  Engineer capable of working collaboratively and cooperatively in a
  software development company. Interested in contributing to the
  development of innovation, smart, disruptive applications, and the
  philosophy of sharing acompetitive knowledge used in IT Companies.`},
  education : {title: "EDUCATION", body: [ {title: "Universidad Polit??cnica Yucat??n 2020", body: "Ing. Rob??tica Computacional"},  {title: "ITEP English level certificate", body: "Upper intermediate English certificate(B2) in December 2019"},  {title: "Universidad Polit??cnica Yucat??n 2019", body: "Academic excellence 6th quarter September-December 2018"}  ] },     
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
                      title: "Instituto Nacional de Astrof??sica, ??ptica y Electr??nica (10th quarter Intership III)", 
                      body: `Developed robotic software in C++ programming language for a service robot (Markovito Jr.) under supervision of Instituto Nacional de Astrof??sica, ??ptica y Electr??nica (INAOE) with the purpose of doing futureresearch in this robotic field.`
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
  portfolio:  {
    title:  "What I can do",
    note: {
      Datadistik : {
        title: "Scholar internship I (Plenumsoft) 4th quarter",
        body: `Identified of digits in images using machine learning algorithms and microcontrollers at Datadistik.`
      },
      Markovito: {
        title: "Intership III (INAOE) 10th quarter",
        body:  "Developed robotic software in C++ programming language for a service robot (Markovito Jr.) under supervision of Instituto Nacional de Astrof??sica, ??ptica y Electr??nica (INAOE) with the purpose of doing future research in this robotic field.",
      },
      Counter_track: {
        title: "Counter and car tracker on road application",
        body: `This application detects cars on road using principles of artificial vision and sends the current count number to and application.`,
      },
      DistanceAngular_Control: {
        title: "Distance and Angular control in x axis for a Mobile Robot in ROS",
        body: `Distance and Angular control for a mobile robot (Tiago) using odometry according with a /odom topic published on ROS.`,
      },
      Angular_Control :{
        title: "Low level PID controller example in DC motor with PSoC 5",
        body: `The following example presents the implementation of a low-level PID controller to control the angular position of a dc motor.`

      },

      Psoc: {
        title: "Matrix keyboard library for PSoC-5lp",
        body: "This PSoC 5 library allows you to read the matrix keyboard reading just digits ('1', 'A', etc) or a combination of digits ('1997', 'A10B'). This library is a summary function to read a simple Matrix Keyboard 4x4. This allows you to create your PSoC projects without taking care of the low programming logic of reading the buttons of the keyboard."
      },
      Portfolio: {
        title: "Portfolio",
        body: "SPA project created in React in which you will find basic information about me and my others projects."
      },
      Api: {
        title: "Create and deploy a TODO list API",
        body: "In this project, I created a TODO list API. Then, I deployed the application in an AWS instance using pm2 and its services."
      }

    },
    modal: {//
      
      Datadistik: {//0 Datadistik
        title: "Scholar internship I (Plenumsoft) 4th quarter",
        video: "Identified of digits in images using machine learning algorithms and microcontrollers at Datadistik.",
        img:  DataD,
        body: "In this project, I worked with a software engineer in the Plenunsoft company to create a device that was able to recognized numbers using a microcontroller and a WebCam."
      },

      Markovito: {//1 Markovito
        title: "Intership III (INAOE) 10th quarter",
        video: "https://www.youtube.com/embed/Wy1KM_N_SP4",
        img:  "",
        body: `This Section shows an implementation of a basic C++ module in charge of moving the torso and face of a service robot and how these basic modules help solve tasks in the area of service robotics. Besides, the most recent tools in robotics and software architecture were used in order to communicate with the robot.`
      },
      Counter_track: {//2 Counter track
        title: "Counter and car tracker on road app",
        video: null,
        img:  CounterCar,
        body: "I built a bridge system to connect a python artificial vision app with an express JS API to show real-time counting of cars on a webpage created with Bootstrap studio and others tools."
      },
      DistanceAngular_Control: {//3 Distance
        title: "Distance Control node in ROS/C++ language",
        video: "https://www.youtube.com/embed/-Wortk3iDvE",
        img:  DistanceControl,
        body: `PD controller that controls the distance that our robot must move in a straight line, The program uses a reference value (setpoint) and the current position on the x-axis to start moving the robot until reaching the desired distance with the minimum error in centimeters. Also, this node is capable to rotate on its own axis passing another argument that represents the degree angle desired.`,
      },
      Angular_Control: {//4 Low level Control Example
        title: "PID-PD controller Psoc 5",
        video:"https://www.youtube.com/embed/Nb9wLnDV3SI",
        img:  MotorDcConnections,
        body:   "I made a simple PID-PD program in C language for a Microcontroller called PSoC to got experience on this kind of application and to then use that in a real robot application 'Markovito Jr. As you can see, the motor is cheap so I could not be as strict as I would want in order to get a perfectly steady-state error."
      },
      Psoc: {//5 Library
        title: "Matrix Keyboard 4x4 library for PSoC 5lp.",
        video: null,
        img:  KeyBoard,
        body: `This PSoC 5 library allows you to read the matrix keyboard reading  digits ('1', 'A', etc) or a digits combination ('1997', 'A10B'). So, it's a set of functions to read/write in an easy way on your Matrix Keyboard 4x4. Using this library you can create your PSoC projects without taking care of the low programming logic on the keyboard.`
      },
      Portfolio: {
        title: "Portfolio",
        video: null,
        img: Cicd,
        body: "This portfolio was created using React, CSS, and JavaScript. Furthermore, I storaged this SPA in a Bucket S3 in AWS in order to host the application in CodeFront as we saw in CI/CD virtual class."
      },
      Api: {
        title: "Create and deploy a TODO list API",
        video: null,
        img: apiSC,
        body: "I created this application with express, mysql, nodemon, body-parser, and another's node modules in npm. Then, I stored the API in my EC2 instances, make a proxy reverse to my domain, and got a SSL certificate to my HTTPS server."
      },
    }    


    

  },
  Recommendation_letter: {
                title: "Recommendation letters",
  }
};


const EspText = {   
  profile:  {title: "PERFIL", body: `Ingeniero en rob??tica Computacional y asociado en ingenier??a en software en Ksquare University capaz de trabajar en colaboraci??n para desarrollar software en IT companies. Interesado en contribuir y desarrollar aplicaciones disruptivas, inteligentes e innovadoras, siguiendo la filosof??a de compartir el conocimiento para el bien com??n.`},
  education : {title: "EDUCACION", body: [ {title: "Universidad Polit??cnica Yucat??n 2020", body: "Ing. Rob??tica Computacional"},  {title: "Certificado de nivelaci??n de Ingles ITEP", body: "Certificado Intermedio-avanzado(B2) en Diciembre del 2019."},  {title: "Universidad Polit??cnica Yucat??n 2019", body: "Diploma a exelencia academica September-December 2018"}  ] },     
  experience : {
                  title: "EXPERIENCIA", 
                  body: [ 
                    {
                      title: "Plenumsoft (Estancia I en 4th cuatrimestre)", 
                      body: `Identificador d??gitos en im??genes usando algoritmos de machine learning y microcontroladores en el departamento de Datadistik.`
                    },  
                    {
                      title: `Experiencia como profesor independiente desde Mayo del 2020:`,
                      body: [
                              `Dise???? e impart?? cuatro cursos en programaci??n de microcontroladores para estudiantes de UPY.`,
                              `Dise???? e impart?? dos cursos en la materia de ???Data Structures??? usando C Language con memoria din??mica para estudiantes de UPY.` , 
                              `Dise???? e impart?? tres cursos en la materia de ???Real Time Operating System(ROS)??? enfocada completamente a rob??tica usando C++/Python para estudiantes de UPY.`, 
                            ]
                    },
                    {
                      title: "Instituto Nacional de Astrof??sica, ??ptica y Electr??nica (10th quarter Intership III)", 
                      body: `Desarrolle software para rob??tica usando programaci??n en C++ en un robot servicio llamado Markovito Jr. bajo la supervisi??n y est??ndares del Instituto Nacional de Astrof??sica, ??ptica y Electr??nica con fines de hacer investigaci??n futura.`
                    }, 
                    {
                      title: "Profesional", 
                      body: [
                        `Actualmente, formo parte al programa ???Next-Gen??? impartida por Ksquare University con la meta de convertirme en un Ingeniero en Software 1 en la compa????a The Ksquare Group.`,
                        `Trabajando asincronamente como profesor de robotica computacional en la Universidad Politecnica de Yucatan.`,
                        `Trabajando como independiente en conjunto con mis compa??eros universitarios en el area de robotica.`
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
                  "Espa??ol",
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
  portfolio:  {
                title:  "Lo que puedo hacer",
                note: {
                  Datadistik : {
                    title: "Estancia I profecional en Plenumsoft",
                    body: `Identificado de digitos en imagenes usando microcontroladores y algoritmos de machine learning en Datatistick.`
                  },
                  Markovito: {
                    title: "Estadia profesional III en INAOE",
                    body:  "Se desarrollo Software de rob??tica en C++ para un robot de servicio/m??vil (Markovito Jr.) bajo la supervisi??n del Instituto Nacional de Astrof??sica, ??ptica y Electr??nica (INAOE) con el prop??sito de usarlo en futuras investigaciones en el ??rea de rob??tica."
                  },
                  Counter_track: {
                    title: "Contador y seguidor de autom??viles en transito App.",
                    body: `Esta aplicaci??n detecta autom??viles en la carretera utilizando principios de visi??n artificial y env??a el n??mero de conteo actual a una aplicaci??n.`,
                  },
                  DistanceAngular_Control: {
                    title: "Controlador de distancia(x) y ??ngulo(z)  para un robot m??vil en ROS",
                    body: `Controlador de distancia y angulo para un robot m??vil llamado Tiago usando su odometr??a obtenida de /Odom topic en ROS.`,
                  },
                  Angular_Control :{
                    title: "Controlador PID/PD de bajo nivel en un motor de DC controlado por un PSoC-5lp Microcontrolador",
                    body: `El siguiente ejemplo presenta la implementaci??n de un controlador PID/PD de bajo nivel para controlar la posici??n angular de un motor de DC.`

                  },

                  Psoc: {
                    title: "Biblioteca en C para un teclado de matricial 4x4 en PSoC-5lp Microcontroller",
                    body: "Esta biblioteca PSoC 5, le permite leer el teclado matricial por d??gitos ('1', 'A', etc.) o por una combinaci??n de d??gitos ('1997', 'A10B'). Esta biblioteca contiene un listado de funciones para leer un teclado Matrix 4x4 de una manera simple. Esto le permitir?? crear sus proyectos de PSoC sin preocuparse por la programaci??n de bajo nivel."
                  },
                  Portfolio: {
                    title: "Portafolio",
                    body: "En este proyecto encontraras informacion basica de mi y de algunos proyectos en los que he trabajado."
                  },
                  Api: {
                    title: "Create and deploy a TODO list API",
                    body: "In this project, I created a TODO list API. Then, I deployed the application in an AWS instance using pm2 and its services."
                  }



                },
                modal: {//
                  
                  Datadistik: {//0 Datadistik
                    title: "Estancia I profecional en Plenumsoft",
                    video: "Identified of digits in images using machine learning algorithms and microcontrollers at Datadistik.",
                    img:  DataD,
                    body: "En este proyecto, trabaj?? con un ingeniero en software de PlenumSoft para crear un dispositivo que pudiera reconocer n??meros usando un modelo entrenado, microcontroladores, una WebCam  y un servidor de flask programado en Python."
                  },
  
                  Markovito: {//1 Markovito
                    title: "Estadia profesional III en INAOE",
                    video: "https://www.youtube.com/embed/Wy1KM_N_SP4",
                    img:  "",
                    body: `En este apartado se muestra una implementaci??n de un m??dulo b??sico de C ++ encargado de mover el torso y la cara de un robot de servicio para resolver tareas b??sicas en el ??rea de la rob??tica de servicios. Como comentario, utilic?? las herramientas m??s recientes en rob??tica y arquitectura de software para comunicarme con el robot.`
                  },
                  Counter_track: {//2 Counter track
                    title: "Contador y seguidor de autom??viles en transito App.",
                    video: null,
                    img:  CounterCar,
                    body: "Constru?? un programa puente para conectar una aplicaci??n de visi??n artificial de Python con una EXPRESS NODE API para mostrar el conteo de autos en tiempo real en una p??gina web creada con Bootstrap Studio y otras herramientas."
                  },
                  DistanceAngular_Control: {//3 Distance
                    title: "Nodo de Controlad de distancia en ROS/C++",
                    video: "https://www.youtube.com/embed/-Wortk3iDvE",
                    img:  DistanceControl,
                    body: `Controlador PD que permite a un robot m??vil avanzar una distancia deseada en x-axis. El programa utiliza un valor de referencia (Setpoint) y la posici??n actual en el eje x para mover el robot hasta alcanzar la distancia requerida con un error m??nimo de error. Adem??s, este nodo es capaz de rotar sobre su propio eje pasando otro argumento que representa el ??ngulo de grado deseado.`,
                  },
                  Angular_Control: {//4 Low level Control Example
                    title: "Controlador PID/PD de bajo nivel en un motor de DC controlado por un PSoC-5lp Microcontrolador",
                    video:"https://www.youtube.com/embed/Nb9wLnDV3SI",
                    img:  MotorDcConnections,
                    body:   "Hice un controlador PID / PD de bajo nivel en C para un microcontrolador llamado PSoC. Este proyecto me sirvi?? para obtener experiencia en aplicaciones de este tipo y luego usarlo en una aplicaci??n rob??tica real como 'Markovito Jr. Como se puede apreciar en el video, el motor es muy barato, as?? que no fui muy estricto para obtener un error en estado perfectamente estable."
                  },
                  Psoc: {//5 Library
                    title: "Biblioteca en C para un teclado de matricial 4x4 en PSoC-5lp Microcontroller",
                    video: null,
                    img:  KeyBoard,
                    body: `En este proyecto, trabaj?? con un ingeniero en software de PlenumSoft para crear un dispositivo que pudiera reconocer n??meros usando un modelo entrenado, microcontroladores, una WebCam  y un servidor de flask programado en Python.`
                  },
                  Portfolio: {
                    title: "Portafolio",
                    video: null,
                    img: Cicd,
                    body: "Cree esta aplicacion de una sola vista (SPA) usando React, CSS y JavaScript. Para el Deploying, guarde la pagina en un Bucket S3 (AWS) para hacer un host con CloudFront (AWS)."
                  },
                  Api: {
                    title: "Create and deploy a TODO list API",
                    video: null,
                    img: apiSC,
                    body: "Cree esta aplicaci??n usando m??dulos de node como: express, nodemon, mysql, body-parser, etc. Despu??s, guarde la API en una instancia de EC2, hice un proxy reverse para redireccionar a mi dominio con certificados SSL."
                  }, 
                },
   
              },

  Recommendation_letter: {
                title: "Cartas de recomendacion",
  },
};



  //Modals//
  const infoStatic =  {
    Datadistik: {//0 Datadistik
      title: "Scholar internship I (Plenumsoft) 4th quarter",
      video: "Identified of digits in images using machine learning algorithms and microcontrollers at Datadistik.",
      img:  DataD,
      body: "In this project, I worked with a software engineer in the Plenunsoft company to create a device that was able to recognized numbers using a microcontroller and a WebCam."
    },
    Markovito: {//1 Markovito
      title: "Intership III (INAOE) 10th quarter",
      video: "https://www.youtube.com/embed/Wy1KM_N_SP4",
      img:  "",
      body: `This Section shows an implementation of a basic C++ module in charge of moving the torso and face of a service robot and how these basic modules help solve tasks in the area of service robotics. Besides, the most recent tools in robotics and software architecture were used in order to communicate with the robot.`
    },
    Counter_track: {//2 Counter track
      title: "Counter and car tracker on road app",
      video: null,
      img:  CounterCar,
      body: "I built a bridge system to connect a python artificial vision app with an express JS API to show real-time counting of cars on a webpage created with Bootstrap studio and others tools."
    },
    DistanceAngular_Control: {//3 Distance
      title: "Distance Control node in ROS/C++ language",
      video: "https://www.youtube.com/embed/-Wortk3iDvE",
      img:  DistanceControl,
      body: `PD controller that controls the distance that our robot must move in a straight line, The program uses a reference value (setpoint) and the current position on the x-axis to start moving the robot until reaching the desired distance with the minimum error in centimeters. Also, this node is capable to rotate on its own axis passing another argument that represents the degree angle desired.`,
    },
    Angular_Control: {//4 Low level Control Example
      title: "PID-PD controller Psoc 5",
      video:"https://www.youtube.com/embed/Nb9wLnDV3SI",
      img:  MotorDcConnections,
      body:   "I made a simple PID-PD program in C language for a Microcontroller called PSoC to got experience on this kind of application and to then use that in a real robot application 'Markovito Jr. As you can see, the motor is cheap so I could not be as strict as I would want in order to get a perfectly steady-state error."
    },
    Psoc: {//5 Library
      title: "Matrix Keyboard 4x4 library for PSoC 5lp.",
      video: null,
      img:  KeyBoard,
      body: `This PSoC 5 library allows you to read the matrix keyboard reading  digits ('1', 'A', etc) or a digits combination ('1997', 'A10B'). So, it's a set of functions to read/write in an easy way on your Matrix Keyboard 4x4. Using this library you can create your PSoC projects without taking care of the low programming logic on the keyboard.`
    },
  }


  const  [isOpen, setIsOpen] = useState(false);
  const  [isOpenData, setIsOpenData] = useState(false);
  const  [isOpenDistance, setIsOpenDistance] = useState(false);
  const  [isOpenCounter, setIsOpenCounter] = useState(false);
  const  [isOpenAngular, setIsOpenAngular] = useState(false);
  const  [isOpenMatrix, setIsOpenMatrix] = useState(false);
  const  [isOpenPortfolio, setIsOpenPortfolio] = useState(false);
  const  [isOpenAPI, setIsOpenAPI] = useState(false);
  



  const  [ infoModal, setInfo] =  useState(   {
          title: "",
          video: "",
          img:  "",
          body: ""
        });

  const btnHome = {
    border: "none",
    width: "12vw",
    height: "8vh",
    alignSelf: "center",

    fontFamily: "Arial",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "1.2vw",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0)",
    color: "#000000",
    transition: "0.3s",
  }
  
  const progSkill =  [
    {tag:  "Cpp",  value : 60,   },
    {tag:  "C",  value : 60,   },
    {tag:  "Python",  value : 60,   },
    {tag:  "JavaScript",  value : 60,   },
    {tag:  "Matlab",  value : 40,   },
    {tag:  "Css",  value : 30,   },
    {tag:  "HTML",  value : 30,   },
    {tag:  "C#",  value : 20,   },
  ]


  const CallbackChangeState =  ( state, element) =>{

    switch(element){
      case 'Data':
        setIsOpenData(state);
        break;
      case "Markovito":
        setIsOpen(state);
        break;
      case 'Distance':
        setIsOpenDistance(state);
        break;
      case 'Counter':
        setIsOpenCounter(state);
        break;
      case "Angular":
        setIsOpenAngular(state);
        break;
      case "Matrix":
        setIsOpenMatrix(state);
        break;
      case "Portfolio":
        setIsOpenPortfolio(state);
        break;
      case "API":
        setIsOpenAPI(state);
        break;
    }
    
    return;
  }
  ///



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
    <div className="App" style = { {zIndex: "2"} }  >

      <div className = "container">

        <section className = "item line">
          
          <div className="info">
            <img src= {me} style = {  { marginTop: "20px", marginRight: "9rem",width : "auto", height: "30vh", float: "right",} } alt=""/>
            <h1 style = {{textAlign:  "left", color:"#626366",  margin: "0px", fontSize : "5vh", fontFamily: "'Raleway', sans-serif"  }}>Luis Gerardo</h1>
            <h1 style = {{textAlign:  "left", color:"#626366",margin: "0px",fontSize : "5vh", fontFamily: "'Raleway', sans-serif"  }} >Camara</h1>
            <h1 style = {{textAlign:  "left", color:"#626366",margin: "0px",fontSize : "5vh", fontFamily: "'Raleway', sans-serif"  }}>Salinas</h1>
            <ul style = {{listStyleType: "none", marginLeft: "-2.5vw", marginTop: "-2vh"}}>
              <li>
                <div style = { {marginTop: "2em" }} >
                    <AiFillLinkedin onClick={() => window.open("https://www.linkedin.com/in/luis-gerardo-camara-salinas321/", '_blank')} className = "iconsInfo" /><p style = {{ textAlign: "left", fontFamily: "'Raleway', sans-serif", color:"#626366", fontSize : "1.5em" } } >luis-gerardo-camara-salinas321</p>
                </div>
              </li>

              {/* <li>
                <MdEmail className = "iconsInfo" /> <p style = {{textAlign: "left", fontFamily: "'Raleway', sans-serif", color:"#626366", fontSize : "2.4vh" } } >al1609022@upy.edu.mx</p>

              </li> */}


            </ul>
          </div>

          <div className =  "barSection">
            <h2 className = "barSectionText">{currentText.profile.title}</h2>

          </div>

          <p >
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

          <div className =  "barSection">
            <h2 className = "barSectionText"> {  currentText.portfolio.title}   </h2>
          </div>

          <Note 
            img={DataDistik} title = {
              currentText.portfolio.note.Datadistik.title
            } 
            text = { 
              currentText.portfolio.note.Datadistik.body
              }
            callback = {CallbackChangeState} modal =   "Data">
          </Note>

          <Note callback = {CallbackChangeState} modal = "Markovito" img =  {Markovito} title = {currentText.portfolio.note.Markovito.title} text = { 
              currentText.portfolio.note.Markovito.body
            } 
            >
          </Note>

          <Note 
            img={Car} title = {
              currentText.portfolio.note.Counter_track.title
            } 
            text = {
              currentText.portfolio.note.Counter_track.body
            }
              
              callback = {CallbackChangeState} modal = "Counter">  
            
          </Note> 

          
          <Note
            img = {Cicd}
            title =  {currentText.portfolio.note.Portfolio.title   }
            text = { currentText.portfolio.note.Portfolio.body }
            callback  = { CallbackChangeState} modal = "Portfolio"
          >
          </Note>


          <Note
            img = {apiP}
            title =  {currentText.portfolio.note.Api.title   }
            text = { currentText.portfolio.note.Api.body }
            callback  = { CallbackChangeState} modal = "API"
          >
          </Note>

           <Note 
            img={Tiago} title = {
              currentText.portfolio.note.DistanceAngular_Control.title
            } 
            text = { 
              currentText.portfolio.note.DistanceAngular_Control.body
              } callback = {CallbackChangeState} modal ="Distance">  
          </Note>

          <Note 
            img={Motor} title = {
              currentText.portfolio.note.Angular_Control.title
            } 
            text = {
              currentText.portfolio.note.Angular_Control.body
              } callback = {CallbackChangeState} modal = { "Angular"   }>  
          </Note>

          <Note img={Micro} title = {currentText.portfolio.note.Psoc.title} text = {
            currentText.portfolio.note.Psoc.body
            } callback = {CallbackChangeState} modal = {"Matrix"} >  
          </Note>


        </section>

        {/* <div className="vertical_line"></div> */}

        <section className = "item ">
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

          {/* <div className="section">
              <div className="component">
                <div className =  "square"  style = {{backgroundColor:"#8176b2", width:"2vw", height: "auto"} }>
                  <h1></h1>
                </div>
                <h2 >{currentText.Recommendation_letter.title}</h2>
              </div>


          </div>
          <img src={INAOE_LETTER}  className = "img_letter" alt=""/>
          <img src={UPY_LETTER} className = "img_letter"  alt=""/> */}



          

        </section>
        <MdGTranslate size={80}  style = { {position: "fixed", right:"-0" , float: "left", textAlign:"right"}} onClick = {()=>{ changeLanguage(stateButton)  } }  />
      </div>

      {/* Modals */}
      <ModalData image = { currentText.portfolio.modal.Datadistik.img } title ={currentText.portfolio.modal.Datadistik.title} open = {isOpenData} onClose = { ()=>{setIsOpenData(false)}} >
            { currentText.portfolio.modal.Datadistik.body}
      </ModalData>


      <Modal video = {currentText.portfolio.modal.Markovito.video} title = {currentText.portfolio.modal.Markovito.title} open = {isOpen} onClose = { ()=>{setIsOpen(false)}} >
        {currentText.portfolio.modal.Markovito.body}
      </Modal>


      <ModalCounter image = {currentText.portfolio.modal.Counter_track.img} title ={currentText.portfolio.modal.Counter_track.title} open = {isOpenCounter} onClose = { ()=>{setIsOpenCounter(false)}} >
        {currentText.portfolio.modal.Counter_track.body}
      </ModalCounter>

      <ModalDistance video = {currentText.portfolio.modal.DistanceAngular_Control.video} title = {currentText.portfolio.modal.DistanceAngular_Control.title} open = {isOpenDistance} onClose = { ()=>{setIsOpenDistance(false)}} >
        {currentText.portfolio.modal.DistanceAngular_Control.body}
      </ModalDistance> 
        
        
      <ModalMotor video = {currentText.portfolio.modal.Angular_Control.video} title = {currentText.portfolio.modal.Angular_Control.title} open = {isOpenAngular} onClose = { ()=>{setIsOpenAngular(false)}} >
        {currentText.portfolio.modal.Angular_Control.body}
      </ModalMotor>

      <ModalPSoC image = {currentText.portfolio.modal.Psoc.img} title ={currentText.portfolio.modal.Psoc.title} open = {isOpenMatrix} onClose = { ()=>{setIsOpenMatrix(false)}} >
        {currentText.portfolio.modal.Psoc.body}
      </ModalPSoC>

      <ModalPortfolio image = {currentText.portfolio.modal.Portfolio.img} title ={currentText.portfolio.modal.Portfolio.title} open = {isOpenPortfolio} onClose = { ()=>{setIsOpenPortfolio(false)}} >
        {currentText.portfolio.modal.Portfolio.body}
      </ModalPortfolio>


      <ModalAPI image = {currentText.portfolio.modal.Api.img} title ={currentText.portfolio.modal.Api.title} open = {isOpenAPI} onClose = { ()=>{setIsOpenAPI(false)}} >
        {currentText.portfolio.modal.Api.body}
      </ModalAPI>



    </div>
  );
}

export default App;
