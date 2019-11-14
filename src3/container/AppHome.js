import React, { Component } from 'react'
import { NavBar,Carousel, Grid } from 'antd-mobile';
var text=["热门品牌","私人搭配师","选购指南"];
const data = Array.from(new Array(3)).map((_val, i) => ({
    path: `b${i}`,
    content:text[i]
  }));
export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar
                style={{backgroundColor:"#3fcccb",color:"#fff"}}
                >住吧家居</NavBar>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    dotStyle={{height:5,width:20,borderRadius:0}}
                    dotActiveStyle={{height:5,width:20,borderRadius:0,backgroundColor:"#3fcccb"}}

                    >
                    {[1,2].map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height: 140 }}
                        >
                        <img
                            src={require("../image/a"+val+".jpg")}
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
                <div >
                    <Grid data={data}
                    columnNum={3}
                    hasLine={false}
                    itemStyle={{width:"100%",height:150,backgroundColor:"#eeeeee"}}
                    renderItem={dataItem => (
                        <div style={{ padding: '10px' }}>
                        <img src={require("../image/"+dataItem.path+".jpg")} style={{ width: '100%', height: '100px' }} alt="" />
                        <div style={{ color: '#fff', fontSize: '14px', marginTop: '-65px' }}>
                            <span>{dataItem.content}</span>
                        </div>
                        </div>
                    )}
                    />
                </div>
                <div style={{width:"100%",height:280,backgroundColor:"#fff"}}>
                    <div style={{width:"100%",height:50,paddingTop:10}}>
                        <div style={{width:7,height:28,backgroundColor:"#3fcccb",float:"left"}}></div>
                        <div style={{float:'left',height:25,marginLeft:30,fontSize:18,marginTop:3}}>热门推荐</div>
                    </div>
                    <img src={require("../image/c1.jpg")} style={{width:"100%",height:200}}/>
                    <div style={{height:20,color:"#fff",marginTop:-30,fontSize:13}}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</div>
                </div>
            </div>
        )
    }
}
