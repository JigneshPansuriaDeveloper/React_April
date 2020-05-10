import React from 'react';
//import JSON from './../db.json';



 const List =(props)=>{
    const data=props.json.map((item,i)=><div>{item.title}</div>)
    return(
        <div> 
        {data}
        </div>
    )
}
export default List;




// class List extends Component {
   
//     render(){
//         return(
           
//         JSON.map((item,i)=>{
//            return(<div key={item.id}>{item.title}</div>)
     
//                 })
            
//             );  
             
        
       

//     }
// }

