import React, { Component } from 'react';

import'./layout.css';
export default  class Users extends Component {
    state = { 
lists:[{
    name:'mpho',
    surname:'maake',
    location:'2g',
    age:35},
    {
    name:'lovers',
    surname:'maluleke',
    location:'Los',
    age:17},
    {
        name:'love',
        surname:'malu',
        location:'Seshego',
        age:25},
        {
        name:'lula',
        surname:'uleke',
        location:'Kgapane',
        age:15},
    
    ]     
}

    render() { 
        return ( 

            <dev className ="box-1">
                <dev className="inner-box">
                    <h4>Names</h4>
            <ul>
            { this.state.lists.map( element => <li> { element.name} </li>) }
            </ul>
                </dev>
           <dev className="inner-box">
           <h4>Surnames</h4>
             <ul>
            { this.state.lists.map( element => <li> { element.surname} </li>) }
            </ul>
            </dev>
            <dev className="inner-box">
            <h4>Location</h4>
             <ul>
            { this.state.lists.map( element => <li> { element.location} </li>) }
            </ul>
            </dev>
            <dev className="inner-box">
            <h4>Age</h4>
             <ul>
            { this.state.lists.map( element => <li> { element.age} </li>) }
            </ul>
            
            </dev>
            <dev className="inner-box">
            <h4>Access</h4>
            <dev className="line"></dev>
             <ul>
            { this.state.lists.map( element => <li> { this.validaAge(element.age)} </li>) }
            </ul>
            
            </dev>
            </dev>
            
            );
    }
    validaAge(value)
    {
        if(value > 18 )
        {
            return "allowed"
        }
        else{
            return "daind "
        }
    }  
}



