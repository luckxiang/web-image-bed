import React, { Component } from 'react';
import { Upload, Icon, message } from 'antd';
import http from '../utils/http'
import tokenUtil from '../utils/TokenUtil';

import './index.css'
const Dragger = Upload.Dragger;


class Home extends Component {
  constructor () {
    super()
  }
  uploadChange(info){
    if(info.file.response){
      let re = info.file.response
      if(re.code > 0){
        message.error(`文件上传失败：${re.error}`)
      }else{
        console.log(re)
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

  render() {
    return (
      <div className="homePage">
        <div className="upload-group">
          <Dragger 
            showUploadList={false}
            action = {http.getUrl()+"upload"}
            onChange = {this.uploadChange}
            headers = {{
              'X-Requested-With': 'XMLHttpRequest',
              "Accept": "application/json",
              "Content-Type": "application/json; charset=UTF-8",
              "Authorization":"Bearer "+tokenUtil.getToken()
            }}
            >
            <p className="ant-upload-drag-icon">
              <Icon style={{fontSize:"60px"}} type="inbox" />
            </p>
            <p className="ant-upload-text">将文件拖到此处，或点击上传</p>
          </Dragger>
        </div>
      </div>
    );
  }
}

export default Home;