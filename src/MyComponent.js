import React  from 'react';
export default class MyComponent extends React.Component{
    constructor(props){
        super(props);
    }
    
    showMyElement(){
       let localName="";

            if(this.props.nombre){
            localName=<p>hola {this.props.nombre}</p>

           
        }
         return(localName);
    }
    render(){
        return(this.showMyElement());
    }
}