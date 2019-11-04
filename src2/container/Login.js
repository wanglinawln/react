import React, { Component } from 'react'
import {NavLink} from "react-router-dom"

export default class extends Component {
    render() {
        return (
            <div className="l1">
                <div className="home">
                    <NavLink to={"/home/all/1"}>主页</NavLink>
                    <span className="l3">/</span>
                    <span className="l3">登录</span>
                </div>
                <div className="l4">
                    
                    <div className="l5">
                        <label for="name">用户名</label>

                        <div className="l6">
                            <input  id="name" name="name" size="30" type="text"/>
                        </div>
                    </div>
                    <div className="l7">
                        <label for="pass">密码</label>

                        <div className="l6">
                            <input  id="pass" name="pass" size="30" type="password"/>
                        </div>
                    </div>
                

                    <div >
                        <div className="l9">
                            <NavLink to={"/home/all/1"}>登录</NavLink>
                        </div>
                        
                        <a className="l8" href="/search_pass">忘记密码了?</a>
                    </div>
                    
                </div>
            </div>
        )
    }
}
