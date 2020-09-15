import { Component } from "react";
import Context from "../Context";

export default class DataValidator extends Component{
    static contextType = Context;

    dataValidator = () => {
        if(typeOf(this.context.school !== "integer"){
            alert('inproper school')
        }
    }

    render(){
        return(
            dataValidator()
        )
    }
}