import React, { Component } from 'react';
import { Upload, Icon, message } from 'antd';
import http from '../utils/http'
import tokenUtil from '../utils/TokenUtil';
import UploadItem from '../components/UploadItem/UploadItem'
import './index.css'
const Dragger = Upload.Dragger;

class Home extends Component {
  constructor () {
    super()
    this.state = {
      imgs:[],
      uploadHeight:'300px'
    }
  }
  beforeUpload(){
    message.loading('正在上传，请稍等', 0);
  }
  uploadChange(info){
    if(info.file.response){
      message.destroy()
      let re = info.file.response
      if(re.code > 0){
        message.error(`文件上传失败：${re.error}`)
      }else{
        this.setState({ 'imgs': [re.data,...this.state.imgs],uploadHeight:'200px'})
      }
    }
  }
  getHeaders(){
    return {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8",
      "Authorization":"Bearer "+tokenUtil.getToken()
    }
  }

  renderImgItem(){
    let imgs = []
    for(let img of this.state.imgs){
      let imgUrl = http.getUrl().replace('/api','')+"image/"+img._id
      imgs.push(<UploadItem key={img._id} style={{maringTop:'30px'}} img={imgUrl}></UploadItem>)
    }
    return imgs
  }

  render() {
    return (
      <div className="homePage">
        <div className="upload-group" style={{height:this.state.uploadHeight}}>
          <Dragger 
            accept="image/*"
            showUploadList = {false}
            name="pic"
            action = {http.getUrl()+"upload"}
            onChange = {this.uploadChange.bind(this)}
            beforeUpload = {this.beforeUpload}
            headers = {{
              "Authorization":"Bearer "+tokenUtil.getToken()
            }}
            >
            <p className="ant-upload-drag-icon">
              <Icon style={{fontSize:"60px"}} type="inbox" />
            </p>
            <p className="ant-upload-text">将文件拖到此处，或点击上传</p>
          </Dragger>
        </div>
        <div className='upload-img-item'>
          {this.renderImgItem()}
        </div>
      </div>
    );
  }
}

export default Home;