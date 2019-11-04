import React, { Component } from 'react'

export default class Topic extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }   
    }
    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topic/'+this.props.match.params.id)
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.setState({
                data:res.data
            })
        })
    }

    render() {
        return (
            <div>
                
                {
                    <div className="topic" key={this.state.data.id}>
                        <h1>
                            {this.state.data.title}
                        </h1>
                        <p>·发布于 6 个月前  ·作者 atian25  ·142193 次浏览  ·来自 分享</p>
                        <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                    </div>
                    
                }
                
            </div>
        )
    }

}
