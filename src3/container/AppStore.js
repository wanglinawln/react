import React, { Component } from 'react'
import { NavBar,Carousel, Grid ,SearchBar} from 'antd-mobile';
var text=["桌","床","椅","几","柜","书架","沙发","家居饰品","户外家具","全部分类"];
const data = Array.from(new Array(10)).map((_val, i) => ({
    content:text[i],
    name:`iconfont icon-${i}`

  }));
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:"#3fcccb",color:"#fff"}}
                rightContent={[
                    <div key="0" className="iconfont icon-car" style={{float:"right" ,marginRight: '10px' ,color:"#fff"}}></div>,
                ]}
                >商城</NavBar>
                <div style={{position:"relative"}}>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    dotActiveStyle={{backgroundColor:"#3fcccb"}}

                    >
                    {[1,2,3,4].map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: 140 }}
                        >
                        <img
                            src={require("../image/f1.png")}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            // fire window resize event to change height
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                        
                    ))}
                </Carousel>
                <div style={{background:"black",opacity:0.5,position:"absolute",top:0,zIndex:2,width:"100%",height:50}}>
                    <div className="iconfont icon-list" style={{float:"left",color:"#fff",width:"10%",fontSize:35}}></div>
                    <div style={{width:"90%",float:"left"}}>
                    <SearchBar
                        placeholder="输入关键字搜索"
                        onSubmit={value => console.log(value, 'onSubmit')}
                        onClear={value => console.log(value, 'onClear')}
                        onFocus={() => console.log('onFocus')}
                        onBlur={() => console.log('onBlur')}
                        onCancel={() => console.log('onCancel')}
                        onChange={this.onChange}
                        style={{background:"black"}}
                        />
                    </div>
                    
                </div>
                
                </div>
                <div style={{height:130}}>
                    <Grid data={data}
                    columnNum={5}
                    hasLine={false}
                    itemStyle={{margin:10}}
                    renderItem={dataItem => (
                        <div style={{width:40,height:60}}>
                        <div style={{color:"#fff",fontSize:22,width:40,height:40,backgroundColor:"#3fcccb",borderRadius:"50%",padding:10,marginTop:-15}} className={dataItem.name}></div>
                        <div style={{ color: 'black', fontSize: '8px'}}>
                            <span>{dataItem.content}</span>
                        </div>
                        </div>
                    )}
                    />
                </div>
                <div style={{width:"100%",height:180,backgroundColor:"##eeeeee",padding:20}}>
                    <div style={{width:"45%",height:120,float:"left",marginRight:20,marginLeft:5}}>
                        <div style={{width:"100%",height:120,backgroundColor:"#fff",float:"left",padding:10}}>
                            <img src={require("../image/g1.png")} style={{width:"100%",height:100}}/>
                        </div>
                        <div style={{width:"100%",height:25,fontSize:12,marginTop:3,backgroundColor:"#eeeee"}}>
                            <p>Top Art Studio 欧……</p>
                            <p>￥39.95</p>
                        </div>
                    </div>
                    <div style={{width:"45%",height:120,float:"left"}}>
                        <div style={{width:"100%",height:120,backgroundColor:"#fff",float:"left",padding:10}}>
                            <img src={require("../image/g2.png")} style={{width:"100%",height:100}}/>
                        </div>
                        <div style={{width:"100%",height:25,fontSize:12,marginTop:3,backgroundColor:"#eeeee"}}>
                            <p>顺顺工艺欧式风格……</p>
                            <p>￥83.99</p>
                        </div>
                    </div>
                </div>
                <div style={{width:"100%",height:180,backgroundColor:"#eeeeees",padding:20}}>
                    <div style={{width:"100%",height:120,float:"left",marginRight:20,marginLeft:5}}>
                        <div style={{width:"100%",height:120,backgroundColor:"#fff",float:"left",padding:10}}>
                            <img src={require("../image/h1.png")} style={{width:"100%",height:100}}/>
                        </div>
                        <div style={{width:"100%",height:25,fontSize:12,marginTop:3,backgroundColor:"#eeeee"}}>
                            <p>Top Art Studio 欧式风格精细……</p>
                            <p>￥39.95</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
