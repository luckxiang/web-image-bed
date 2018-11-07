import React, { Component } from 'react';
import authModel from '../models/Auth'
import http from '../utils/http'
import { message } from 'antd';
import './index.css'
import UploadLogItem from '../components/UploadLogItem/UploadLogItem'
class UploadLog extends Component {
  constructor () {
    super()
    this.state = {
      imgs:[]
    }
  }
  componentWillMount(){
    authModel.getUploadLog().then(re=>{
      this.setState({
        imgs:re.list
      })
    })
  }
  handleDelete(id){
    let loading = message.loading('正在删除，请稍等',0)
    authModel.deleteUpload(id).then(re=>{
      message.destroy()
      message.success("删除成功")
      this.componentWillMount()
    })
  }
  renderUploadLog(){
    let imgs = []
    for(let img of this.state.imgs){
      let imgUrl = http.getUrl().replace('/api','')+"image/"+img._id
      imgs.push(<UploadLogItem key={img._id} img={imgUrl} id={img._id} onDelete={this.handleDelete.bind(this)}></UploadLogItem>)
    }
    for(let i = 0; i < 10; i++){
      imgs.push(<div key={i} className="nothing"></div>)
    }
    return imgs
  }
  render() {
    return (
      <div className="log-page">
        <div className="log-group">
          {this.renderUploadLog()}
        </div>
      </div>
    );
  }
}

export default UploadLog;