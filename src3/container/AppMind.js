import React, { Component } from 'react'
import { NavBar, Icon,Tabs,Grid } from 'antd-mobile';
import noCase from 'no-case';
var text=["橙色律动","儿童房","翻滚吧，地毯军","角落里的遐想","橙色律动","儿童房"];
const data = Array.from(new Array(6)).map((_val, i) => ({
    img: `d${i}`,
    content:text[i],
    path: `e${i}`,

  }));
const tabs = [
    { title: '推荐'},
    { title: '冬季'},
    { title: '宜家'},
    { title: '小清新'},
    { title: '小户型'},
    { title: '个性色彩'}


  ];
export default class AppMind extends Component {
    render() {
        return (
            <div style={{position:"relative"}}>
                <NavBar
                style={{backgroundColor:"#3fcccb",color:"#fff"}}
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                ]}
                >灵感</NavBar>
                <div style={{zIndex:"2",position:"absolute",right:0,width:42,height:42,backgroundColor:"#fff",textAlign:"center",paddingTop:3,fontSize:26}}>+</div>
                <Tabs tabs={tabs}
                initialPage={0}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                tabBarUnderlineStyle={{display:"none"}}
                tabBarActiveTextColor={"#3fcccb"}
                >
                <div style={{width:"100%", height: '500px'}}>
                    <Grid data={data}
                    columnNum={2}
                    hasLine={false}
                    itemStyle={{width:"100%",height:190,backgroundColor:"#eeeeee",borderRadius:10,margin:5,overflow:"hidden"}}
                    renderItem={dataItem => (
                        <div>
                            <img src={require("../image/"+dataItem.img+".jpg")} style={{ width: '100%', height: '150px',marginTop:-13 }} alt="" />
                            <div style={{width:"100%",height:40,backgroundColor:"#fff"}}>
                                <img src={require("../image/"+dataItem.path+".png")} style={{ width: '25%', height: '80%' ,float:"left",marginTop:-5}} alt="" />
                                <div style={{float:"left",fontSize:12,paddingTop:10}}>
                                    <span>{dataItem.content}</span>
                                </div>
                                <div className="iconfont icon-love" style={{float:"right",color:"red",paddingTop:8,marginRight:8}}></div>
                            </div>
                            
                        </div>
                    )}
                    />

                </div>
                <div style={{width:"100%", height: '500px'}}>
                    <Grid data={data}
                    columnNum={2}
                    hasLine={false}
                    itemStyle={{width:"100%",height:190,backgroundColor:"#eeeeee",borderRadius:10,margin:5,overflow:"hidden"}}
                    renderItem={dataItem => (
                        <div>
                            <img src={require("../image/"+dataItem.img+".jpg")} style={{ width: '100%', height: '150px',marginTop:-13 }} alt="" />
                            <div style={{width:"100%",height:40,backgroundColor:"#fff"}}>
                                <img src={require("../image/"+dataItem.path+".png")} style={{ width: '25%', height: '80%' ,float:"left",marginTop:-5}} alt="" />
                                <div style={{float:"left",fontSize:12,paddingTop:10}}>
                                    <span>{dataItem.content}</span>
                                </div>
                                <div className="iconfont icon-love" style={{float:"right",color:"red",paddingTop:8,marginRight:8}}></div>
                            </div>
                            
                        </div>
                    )}
                    />

                </div>
                <div style={{width:"100%", height: '500px'}}>
                    <Grid data={data}
                    columnNum={2}
                    hasLine={false}
                    itemStyle={{width:"100%",height:190,backgroundColor:"#eeeeee",borderRadius:10,margin:5,overflow:"hidden"}}
                    renderItem={dataItem => (
                        <div>
                            <img src={require("../image/"+dataItem.img+".jpg")} style={{ width: '100%', height: '150px',marginTop:-13 }} alt="" />
                            <div style={{width:"100%",height:40,backgroundColor:"#fff"}}>
                                <img src={require("../image/"+dataItem.path+".png")} style={{ width: '25%', height: '80%' ,float:"left",marginTop:-5}} alt="" />
                                <div style={{float:"left",fontSize:12,paddingTop:10}}>
                                    <span>{dataItem.content}</span>
                                </div>
                                <div className="iconfont icon-love" style={{float:"right",color:"red",paddingTop:8,marginRight:8}}></div>
                            </div>
                            
                        </div>
                    )}
                    />

                </div>
                <div style={{width:"100%", height: '500px'}}>
                    <Grid data={data}
                    columnNum={2}
                    hasLine={false}
                    itemStyle={{width:"100%",height:190,backgroundColor:"#eeeeee",borderRadius:10,margin:5,overflow:"hidden"}}
                    renderItem={dataItem => (
                        <div>
                            <img src={require("../image/"+dataItem.img+".jpg")} style={{ width: '100%', height: '150px',marginTop:-13 }} alt="" />
                            <div style={{width:"100%",height:40,backgroundColor:"#fff"}}>
                                <img src={require("../image/"+dataItem.path+".png")} style={{ width: '25%', height: '80%' ,float:"left",marginTop:-5}} alt="" />
                                <div style={{float:"left",fontSize:12,paddingTop:10}}>
                                    <span>{dataItem.content}</span>
                                </div>
                                <div className="iconfont icon-love" style={{float:"right",color:"red",paddingTop:8,marginRight:8}}></div>
                            </div>
                            
                        </div>
                    )}
                    />

                </div>
                <div style={{width:"100%", height: '500px'}}>
                    <Grid data={data}
                    columnNum={2}
                    hasLine={false}
                    itemStyle={{width:"100%",height:190,backgroundColor:"#eeeeee",borderRadius:10,margin:5,overflow:"hidden"}}
                    renderItem={dataItem => (
                        <div>
                            <img src={require("../image/"+dataItem.img+".jpg")} style={{ width: '100%', height: '150px',marginTop:-13 }} alt="" />
                            <div style={{width:"100%",height:40,backgroundColor:"#fff"}}>
                                <img src={require("../image/"+dataItem.path+".png")} style={{ width: '25%', height: '80%' ,float:"left",marginTop:-5}} alt="" />
                                <div style={{float:"left",fontSize:12,paddingTop:10}}>
                                    <span>{dataItem.content}</span>
                                </div>
                                <div className="iconfont icon-love" style={{float:"right",color:"red",paddingTop:8,marginRight:8}}></div>
                            </div>
                            
                        </div>
                    )}
                    />

                </div>
                <div style={{width:"100%", height: '500px'}}>
                    <Grid data={data}
                    columnNum={2}
                    hasLine={false}
                    itemStyle={{width:"100%",height:190,backgroundColor:"#eeeeee",borderRadius:10,margin:5,overflow:"hidden"}}
                    renderItem={dataItem => (
                        <div>
                            <img src={require("../image/"+dataItem.img+".jpg")} style={{ width: '100%', height: '150px',marginTop:-13 }} alt="" />
                            <div style={{width:"100%",height:40,backgroundColor:"#fff"}}>
                                <img src={require("../image/"+dataItem.path+".png")} style={{ width: '25%', height: '80%' ,float:"left",marginTop:-5}} alt="" />
                                <div style={{float:"left",fontSize:12,paddingTop:10}}>
                                    <span>{dataItem.content}</span>
                                </div>
                                <div className="iconfont icon-love" style={{float:"right",color:"red",paddingTop:8,marginRight:8}}></div>
                            </div>
                            
                        </div>
                    )}
                    />

                </div>
                </Tabs>
            </div>
        )
    }
}
