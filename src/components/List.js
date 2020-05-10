import React from 'react';

const List =(props)=>{
    console.log('>>',props);
    const data=props.json.map((item)=><div key={item.id}>{item.title}</div>)
    return(
        <div>
            {data}
        </div>
    )

}





export default List;

