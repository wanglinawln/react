import React, { Component } from 'react'

export default class Todoing1 extends Component {
    changeItem(index){
        this.props.change(index);
    }
    delItem(index){
        this.props.del(index);
    }
    render() {
        var {todo}=this.props;
        return (
            <div className="box">
                <span className="word">正在进行</span>
                <span className="num">{this.props.doing}</span>
                <ul className="doing">
                {

                        todo.map((item,index)=>{
                            if(item.done===false){
                                return(
                                    <li key={index}>
                                        <input type="checkbox" onChange={()=>this.changeItem(index) }/>{item.title}
                                        <button onClick={()=>this.delItem(index)}>-</button>
                                    </li>
                                )
                            }
                            return "";
                        })
                    }
                </ul>

                <span className="word">已经完成</span>
                <span className="num">{this.props.done}</span>
                <ul className="done">
                {
                        todo.map((item,index)=>{
                            if(item.done===true){
                                return(
                                    <li key={index}>
                                        <input type="checkbox" checked="checked" onChange={()=>this.changeItem(index)}></input>{item.title}
                                        <button onClick={()=>this.delItem(index)}>-</button>
                                    </li>
                                )
                            }
                            return "";
                        })
                    }
                </ul>
                
            </div>
        
        )
    }
}
