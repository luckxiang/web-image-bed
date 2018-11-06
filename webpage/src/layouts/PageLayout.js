import React, { Component } from 'react';
import Home from '../screens/Home'
import Head from '../components/Head/Head'
import UploadLog from '../screens/UploadLog'
import { Route,Redirect,Switch} from 'react-router-dom';

class PageLayout extends Component {
  state={
    buttons:[{
      key:0,
      title:'首页'
    },{
      key:1,
      title:'我的上传'
    }]
  }
  constructor () {
    super()
  }
  handleHeadClick(button){
    switch(button.key){
      case 0:
        this.props.history.push('/page/home')
        break
      case 1:
        this.props.history.push('/page/upload')
        break
      default:
       this.props.history.push('/page/home')
    }
    console.log(button)
  }
  render() {
    return (
      <div style={{height:'100%'}}>
        <Head title="达达图床" buttons={this.state.buttons} defaultSelect={0} onClick={this.handleHeadClick.bind(this)}></Head>
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