import React, { Component } from 'react'
import {NavLink,Route,Redirect,Switch} from "react-router-dom"
import All from "./home/All"
import Topic from "./home/Topic"
import Good from './home/Good';
import Share from './home/Share';
import Test from './home/Test';
import Job from './home/Job';
import Ask from './home/Ask';


export default class Home extends Component {
    render() {
        let {url}=this.props.match;
        
        return (
            <div>
                <div className="home">
                    <NavLink to={`${url}/all`}  activeStyle={{background:"#80bd01",color:"#fff"}}>全部</NavLink>
                    <NavLink to={`${url}/good`}  activeStyle={{background:"#80bd01",color:"#fff"}}>精华</NavLink>
                    <NavLink to={`${url}/share`}  activeStyle={{background:"#80bd01",color:"#fff"}}>分享</NavLink>
                    <NavLink to={`${url}/ask`}  activeStyle={{background:"#80bd01",color:"#fff"}}>问答</NavLink>
                    <NavLink to={`${url}/job`}  activeStyle={{background:"#80bd01",color:"#fff"}}>招聘</NavLink>
                    <NavLink to={`${url}/test`}  activeStyle={{background:"#80bd01",color:"#fff"}}>客户端测试</NavLink>
                </div>
                <div className="home1">
                    <Switch>
                        <Route path={url} exact render={()=><Redirect from ={url} to={url+"/all"}/>}/>
                        <Route path={url+"/all"} exact render={()=><Redirect from ={url+"/all"} to={url+"/all/1"}/>}/>
                        <Route path={url+"/good"} exact render={()=><Redirect from ={url+"/good"} to={url+"/good/1"}/>}/>
                        <Route path={url+"/share"} exact render={()=><Redirect from ={url+"/share"} to={url+"/share/1"}/>}/>
                        <Route path={url+"/ask"} exact render={()=><Redirect from ={url+"/ask"} to={url+"/ask/1"}/>}/>
                        <Route path={url+"/job"} exact render={()=><Redirect from ={url+"/job"} to={url+"/job/1"}/>}/>
                        <Route path={url+"/test"} exact render={()=><Redirect from ={url+"/test"} to={url+"/test/1"}/>}/>

                        <Route path={"/home/all/:id"} exact component={All}/>
                        <Route path={"/home/topic/:id"} exact component={Topic} />
                        <Route path={"/home/good/:id"} exact component={Good}/>
                        <Route path={"/home/share/:id"} exact component={Share}/>
                        <Route path={"/home/ask/:id"} exact component={Ask}/>
                        <Route path={"/home/job/:id"} exact component={Job}/>
                        <Route path={"/home/test/:id"} exact component={Test}/>

                        
                    </Switch>
                    
                </div>
                
            </div>
        )
    }
}
