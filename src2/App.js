import React, { Component } from 'react'
import Header from "./components/Headers"
import {HashRouter as Router,Route,Redirect,NavLink} from "react-router-dom" 
import Home from "./container/Home"
import Api from "./container/Api"
import Start from "./container/Start"
import About from "./container/About"
import Login from './container/Login'

export default class App extends Component {
    render() {
        return (
            <Router basename="/build2">
                <div>
                    <Header/>
                </div>
                <div className="content">
                    <div className="left">
                        <Route path="/" exact render={()=><Redirect from ="/" to="/home"/>}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/start" component={Start}/>
                        <Route path="/api" component={Api}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" component={Login}/>
                    </div>
                    <div className="right">
                        <div className="r1">
                            <div className="r2">
                                <p>CNode：Node.js专业中文社区</p>
                                <div>
                                    您可以
                                    <NavLink to={"/login"}>登录</NavLink>
                                        或
                                    <a href="/signup">注册</a>
                                        , 也可以
                                    <a href="/auth/github">
                                        <button className="r3">
                                            通过 GitHub 登录
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>    
                        <div className="r4">
                            <div className="r5">
                                <a href="https://www.qiniu.com/events/cdn-package?code=cnode" target="_blank"  data-label="qiniu-sidebar">
                                    <img src="//static.cnodejs.org/FufeQ8S-sz6aKH5bvPXzVXvQG2Z-"/>
                                </a>
                                <div className="r6"></div>
                                <a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank"  data-label="alinode">
                                    <img src="//static.cnodejs.org/Fn4D6BhOTz1IswvmzeZ1q7QW1ls_"/>
                                </a>
                                <div className="r6"></div>
                                <a href="https://www.ucloud.cn/site/active/gift.html?utm_source=cnodejs&amp;utm_medium=content_pic_pc_540_130&amp;utm_campaign=huodong&amp;utm_content=gift&amp;ytag=cnodejs" target="_blank" class="banner sponsor_outlink" data-label="ucloud-banner">
                                    <img src="//static.cnodejs.org/FlajCCXkxZaOsuWp3k0iaiqfrJaS"/>
                                </a>
                            </div>
                        </div>   
                        <div className="r7">
                            <div className="r8">
                                <span>无人回复的话题</span>
                            </div>
                            <div className="r9">
                            
                                <ul >
                                    <li>
                                        <div className="r10">
                                            <a  href="/topic/5db145ca865a9844a301d83c" title="为什么我们还要使用前端框架来构建">为什么我们还要使用前端框架来构建页</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="r10">
                                            <a  href="/topic/5db13f78ece3813ad9ba3ede" title="Node.js v13.0.1 出了">Node.js v13.0.1 出了</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="r10">
                                            <a  href="/topic/5db113f5865a9844a301d711" title="求助:server端无响应问题">求助:server端无响应问题</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="r10">
                                            <a  href="/topic/5db05e09ece3813ad9ba3cc2" title="JavaScript PNG 图片编码和解码">JavaScript PNG 图片编码和解码</a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="r10">
                                            <a  href="/topic/5db007de865a9844a301d433" title="只因有了它，我找到了优秀的候选人：推荐一款候选人现场编程的神器 ShowMeBug">只因有了它，我找到了优秀的候选人：</a>
                                        </div>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div className="r11">
                            <div className="r8">
                                <span>积分榜</span>
                                &nbsp;
                                <a href="/users/top100">TOP 100 &gt;&gt;</a>
                            </div>
                            <div className="r12">
                                <ol>
                                    <li>
                                        <span>21735</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="r13"><a href="/user/i5ting">i5ting</a></span>
                                    </li>
                                    <li>
                                        <span>15665</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="r13"><a href="/user/alsotang">alsotang</a></span>
                                    </li>
                                    <li>
                                        <span >9350</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="r13"><a href="/user/leapon">leapon</a></span>
                                    </li>
                                    <li>
                                        <span>9035</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="r13"><a href="/user/atian25">atian25</a></span>
                                    </li>
                                    <li>
                                        <span>8780</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="r13"><a href="/user/jiyinyiyong">jiyinyiyong</a></span>
                                    </li>
                                    <li>
                                        <span>7315</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="r13"><a href="/user/yakczh">yakczh</a></span>
                                    </li>
                                    <li>
                                        <span>6815</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="r13"><a href="/user/im-here">im-here</a></span>
                                    </li>
                                    <li>
                                        <span >6095</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="r13"><a href="/user/DevinXian">DevinXian</a></span>
                                    </li>
                                    <li>
                                        <span>5815</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="r13"><a href="/user/chapgaga">chapgaga</a></span>
                                    </li>
                                    <li>
                                        <span>5350</span>
                                        &nbsp;&nbsp;&nbsp;&nbsp;
                                        <span className="r13"><a href="/user/magicdawn">magicdawn</a></span>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="r14">
                            <div className="r8">
                                <span>友情社区</span>
                            </div>
                            <div className="r15">
                                <ol>
                                    <li>
                                        <a href="https://ruby-china.org/" target="_blank">
                                            <img src="//static2.cnodejs.org/public/images/ruby-china-20150529.png"/>
                                        </a>
                                    </li>
                                   
                                    <li>
                                        <a href="http://golangtc.com/" target="_blank">
                                            <img src="//static2.cnodejs.org/public/images/golangtc-logo.png"/>
                                        </a>
                                    </li>
                      
                                    <li>
                                        <a href="http://phphub.org/" target="_blank">
                                            <img src="//static2.cnodejs.org/public/images/phphub-logo.png"/>
                                        </a>
                                    </li>
                                   
                                    <li>
                                        <a href="https://testerhome.com/" target="_blank">
                                            <img src="//static.cnodejs.org/FjLUc7IJ2--DqS706etPQ1EGajxK"/>
                                        </a>
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className="r16">
                            <div className="r8">
                                <span>客户端二维码</span>
                            </div>
                            <div className="r17">
                                <img width="200" src="//static.cnodejs.org/FtG0YVgQ6iginiLpf9W4_ShjiLfU"/>
                                <br/>
                                <a href="https://github.com/soliury/noder-react-native" target="_blank">客户端源码地址</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="end">
                    <div className="end1">
                        <div className="end2">
                            <a href="/rss">RSS</a>
                            |
                            <a href="https://github.com/cnodejs/nodeclub/">源码地址</a>
                        </div>

                        <div className="end3">

                            <p>CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js 的技术研究。</p>
                            <p>服务器赞助商为
                                <a href="http://www.ucloud.cn/?utm_source=zanzhu&amp;utm_campaign=cnodejs&amp;utm_medium=display&amp;utm_content=yejiao&amp;ytag=cnodejs_logo" target="_blank">
                                    <img src="//static.cnodejs.org/FuIpEaM9bvsZKnQ3QfPtBHWQmLM9" title="ucloud" alt="ucloud" width="92px"/>
                                </a>
                                ，存储赞助商为
                                <a href="http://www.qiniu.com/?ref=cnode" target="_blank">
                                    <img src="//static.cnodejs.org/Fg0jtDIcTqVC049oVu5-sn6Om4NX" title="七牛云存储" alt="七牛云存储" width="115px"/>
                                </a>
                                ，由<a href="https://www.aliyun.com/product/nodejs?ref=cnode" target="_blank">
                                    <img src="//static.cnodejs.org/FpMZk31PDyxkC8yStmMQL4XroaGD" title="alinode" alt="alinode" height="54px" width="166px"/>
                                </a>提供应用性能服务。
                            </p>
                            <p>新手搭建 Node.js 服务器，推荐使用无需备案的 <a href="https://www.digitalocean.com/?refcode=eba02656eeb3">DigitalOcean(https://www.digitalocean.com/)</a></p>
                        </div>
                    </div>
                </div>

            </Router>
            
        )
    }
}
