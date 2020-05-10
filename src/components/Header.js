import React, { Component } from 'react';
import JSON from '../db.json';
import List from '../components/List';
class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            search:"Enter your text here",
            json:JSON
        }
    }
    handleChange=(e)=>{ 
        const data=this.state.json.filter(
            (item)=> item.title.includes(e.target.value)
        )
        this.setState({search:e.target.value,json:data})
    }

    render(){
        return(
        <div>
            <header>
                <div> Logo
                </div>
                <center>
                    <input type="text" onChange={this.handleChange}  />
                 <p>{this.state.search}</p>
                </center>
            </header>
            <List  json={this.state.json}/>
        </div>
        )
        }
    }
export default Header;