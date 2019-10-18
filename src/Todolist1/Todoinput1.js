import React, { Component } from 'react'

export default class Todoinput1 extends Component {
    handleInput=(e)=>{
        if(e.keyCode===13&&e.value!==""){
            this.props.add(e.target.value);
            e.target.value="";
        }
    }
    
    render() {
        return (
            <div className="tab">
                <span>ToDoList</span>
                <input type="text" placeholder="添加ToDo" onKeyDown={this.handleInput}/>
            </div>
        )
    }
}
