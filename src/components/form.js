import React from "react";
import { Link } from "react-router-dom";
import { List } from "./list"
import { Home } from "./button"
export class Form extends React.Component{

    constructor(props){
        super(props);
        this.formRef = React.createRef();
        this.listRef = React.createRef();
        this.backRef =React.createRef();
        
        this.state={
            fullName : "",
            email : "",
            phoneNumber : "",
            age : "",
            list : []
        }
    } 

    handleOnChange=(event)=>{
         this.setState({
        [ event.target.id ]: event.target.value
        })
    }

    dataMethod(){
        this.stateData = {
            fullName : this.state.fullName,
            email : this.state.email,
            phone : this.state.phoneNumber,
            age : this.state.age
        }
        this.state.list.push(this.stateData)
    }

        componentDidMount(){
        this.listRef.current.style.display ="none"
        }
    handleOnClick=(event)=>{
        event.preventDefault();
        this.dataMethod();
        this.setState({
            fullName : "",
            email : "",
            phoneNumber : "",
            age : "",
        })
        this.formRef.current.style.display ="none"
        this.listRef.current.style.display ="block"
    }
    handleClick=(event)=>{
        this.formRef.current.style.display ="flex"
        this.listRef.current.style.display ="none"
    }

    render(){

        return(
            <div className="formWrapper">
                <form ref={this.formRef}>
                    <label htmlFor = "fullName">Full Name</label>
                    <input
                        id = "fullName"
                        type = "text"
                        value= {this.state.fullName}
                        onChange = {this.handleOnChange}  
                        required  
                    /><br/>
                    <label htmlFor = "email">Email</label>
                    <input
                        id = "email"
                        type = "text"
                        value = {this.state.email}
                        onChange={this.handleOnChange}
                    /><br/>
                    <label htmlFor = "phoneNumber">Phone Number</label>
                    <input
                        id = "phoneNumber"
                        type = "text"
                        value = {this.state.phoneNumber}
                        onChange = {this.handleOnChange}
                    /><br/>
                    <label htmlFor = "age">Age</label>
                    <input
                        id = "age"
                        type = "number"
                        value = {this.state.age}
                        onChange = {this.handleOnChange}
                    /><br/>
                        <button type="submit" onClick={this.handleOnClick}>Submit</button>
                </form>
                <div className ="listForm" ref={this.listRef}>
                    <button onClick={this.handleClick}>Go to form</button>
                    <List name={this.state.list}/>   
                </div>
            </div>
        )
    };
}


