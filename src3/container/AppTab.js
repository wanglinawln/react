import React from 'react';
import { TabBar } from 'antd-mobile';
import AppHome from "./AppHome.js"
import AppMind from "./AppMind.js"
import AppStore from "./AppStore.js"

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }
  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Life"
            icon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-home"></i>}
            selectedIcon={
                <i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-home"></i>
            }
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
            <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-linggan"></i>}
            selectedIcon={
                <i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-linggan"></i>
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'mind'}
            onPress={() => {
              this.setState({
                selectedTab: 'mind',
              });
            }}
          >
            <AppMind/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-store"></i>}
            selectedIcon={
                <i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-store"></i>
            }
            title="商城"
            key="Friend"
            selected={this.state.selectedTab === 'store'}
            onPress={() => {
              this.setState({
                selectedTab: 'store',
              });
            }}
          >
            <AppStore/>
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-me"></i>}
            selectedIcon={
                <i style={{fontSize:22,lineHeight:"22px"}} className="iconfont icon-me"></i>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'me'}
            onPress={() => {
              this.setState({
                selectedTab: 'me',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}