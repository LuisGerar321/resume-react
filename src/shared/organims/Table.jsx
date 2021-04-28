import React from 'react'

export const ResumeTable = ({info, array}) => {
        // console.log(info);

        if(array){
                return(
                        <div>{
                                info.map( (element, index) =>{
                                        return <p key={index} style={ {fontSize: "1.5vh", fontWeight: "bold",  margin: "2vh"}}>{ "* "+element}</p>
                                }) 
                        }</div>

                )
        }


        
        return (
                
                <div>{
                        info.map( (element, index)=>{
                                console.log("element: ",element,  Array.isArray(element.body) );
                                if(Array.isArray(element.body)){
                                        return <div  key = {index}>
                                        <h2  style = { {textAlign: "left"} }>{element.title}</h2>
                                        
                                        {element.body.map( (item, index)=>{
                                                return <p key={index} style={ {margin: "2vh",}}>{ "*"+item}</p>
                                                }
                                        )}
    

                                        
                                </div>                                          
                                }
                                try{
                                        if(element.body.length){
                                                return <div  key = {index}>
                                                        <h2  style = { {textAlign: "left"} }>{element.title}</h2>
                                                        
                                                        {element.map( (item, index)=>{
                                                                return <h1>{ item}</h1>
                                                        }
        
                                                        )}
        
                                                        
                                                </div>                                        
                                        }else{
                                                return <div  key = {index}>
                                                        <h2  style = { {textAlign: "left"} }>{element.title}</h2>
        
                                                        <p>{ element.body}</p>
                                                </div>
                                        }
        
                                }catch{
                                        return <div  key = {index}>
                                                <h2  style = { {textAlign: "left"} }>{element.title}</h2>

                                                <p>{ element.body}</p>
                                        </div> 
                                }

                               
                        })
                }</div>
        
        )
}

export default ResumeTable;
