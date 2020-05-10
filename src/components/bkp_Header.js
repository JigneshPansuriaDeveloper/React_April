import React, { Component } from 'react';
import List from '../components/List';
import json from '../db.json';


class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            search:'Enter your text to search',
            json:json
        }
    }
    handleChange =(e)=>{
       // console.log(e.target.value)
       
       const data=this.state.json.filter(
           (item)=>{
               console.log(item)
            return item.title.includes(e.target.value)
           }

           
           
           )
           console.log('>>',data)
      
           this.setState({search:e.target.value,json:data})

    }
    render(){
        return(
            <div>
            <header>
                <div>Logo</div>
                <center>
                    <input type="text" onChange={this.handleChange} />
                    <p>{this.state.search}</p>
                </center>
        
            </header>
            <List json={this.state.json} />
            </div>
        )
    }
}
export default Header;


/*function Home(){
    return (
        <div>
            My first app
        </div>
    )
}*/