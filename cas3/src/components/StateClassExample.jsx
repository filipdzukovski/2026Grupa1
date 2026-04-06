import React from 'react';

export class StateClassExample extends React.Component{

    constructor(props){
        super(props);
        console.log("This is called from the CONSTRUCTOR!!!");
        this.state = {
         promenliva:'Vrednost 1'   
        }
    }

    componentDidMount(){
        console.log("This is COMPONENT DID MOUNT")
    }

    smeniVrednost = () => {
       this.setState({
        promenliva: 'Nova Vrednost 2'
       },()=>{console.log(this.state.promenliva)})
        
    }

    render(){
        console.log("This is RENDER METHOD")
        return(
            <div id='state-class-component'>
                <h2>Klasna Komponenta</h2>
                <p>Vrednost na promenliva: {this.state.promenliva}</p>
                <button onClick={()=>{this.smeniVrednost}}>Click Me !</button>
            </div>
        )
    }
}