import React, { Component } from 'react';
import Home from '../screens/Home'
import Head from '../components/Head/Head'
import UploadLog from '../screens/UploadLog'
import { Route,Redirect,Switch} from 'react-router-dom';

class PageLayout extends Component {
  state={
    buttons:[{
      key:0,
      title:'首页',
      url:'/page/home'
    },{
      key:1,
      title:'我的上传',
      url:'/page/upload'
    }],
    selectedMenu:0
  }
  constructor () {
    super()
  }
  handleHeadClick(button){
    for(let item of this.state.buttons){
      if(item.key === button.key){
        this.props.history.push(item.url)
      }
    }
  }
  componentWillMount(){
    let pathName = this.props.location.pathname
    for(let item of this.state.buttons){
      if(item.url === pathName){
        this.setState({
          selectedMenu:item.key
        })
      }
    }
  }
  render() {
    return (
      <div style={{height:'100%'}}>
        <Head title="达达图床" buttons={this.state.buttons} defaultSelect={this.state.selectedMenu} onClick={this.handleHeadClick.bind(this)}></Head>
        <Switch>
          <Route path="/page/home" component={Home}/>
          <Route path="/page/upload" component={UploadLog}/>
          <Redirect path="" to={{pathname: '/page/home'}} />
        </Switch>
      </div>
    );
  }
}

export default PageLayout;