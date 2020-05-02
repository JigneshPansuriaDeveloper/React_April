import React,{Component} from 'react';
import JSON from './../db.json';

class List extends Component {
   
    render(){
        return(
           
        JSON.map((item,i)=>{
           return(<div key={item.id}>{item.title}</div>)
     
                })
            
            );  
             
        
       

    }
}

export default List;