import React, { Component } from 'react'
import {NavLink,Route,Redirect} from "react-router-dom"
export default class Share extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }   
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?tab=share&&page='+this.props.match.params.id)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id!==this.props.match.params.id){
            fetch('https://cnodejs.org/api/v1/topics?tab=share&&page='+this.props.match.params.id)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.data
                })
            })
        }
        
    }
    render() {
        let {url}=this.props.match;
        return (
            <div>
                {this.state.data.map((item,index)=>{
                    return(
                        <div className="cell" key={item.id} style={{borderBottom:"1px solid #f6f6f6",width:900,height:40,overflow:"hidden"}}>
                           <img src={item.author.avatar_url}/>
                           <div className="s6">
                                <span className="s1">{item.reply_count}</span>
                                <span className="s2">/</span>
                                <span className="s3">{item.visit_count}</span>
                            </div>
                            <span className="s4">分享</span> 
                            <NavLink to={"/home/topic/"+item.id}>{item.title}</NavLink>
                            <span className="s5">2 天前</span>
                            <img src={item.author.avatar_url} style={{float:"right"}}/>
                            
                        </div>
                    )
                })}
                <div className="page1">
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <li key={item}>
                                <NavLink activeStyle={{color:"#80bd01"}} exact to={"/home/share/"+item}>{item}</NavLink>
                            </li>

                        ))
                    }
                </div>
                
            </div>
        )
    }

}
