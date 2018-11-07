import React, { Component } from 'react';
import { Input , Icon, message,Button,Popconfirm } from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './UploadLogItem.css'
class UploadLogItem extends Component {
  constructor () {
    super()
  }
  handleDelete(id){
    this.props.onDelete(id)
  }
  render() {
    return (
      <div className="upload-log-group">
        <div className="upload-log-img" style={{background: `url(${this.props.img}) no-repeat`,backgroundSize: `100%`}}></div>
        <div className='upload-log-status'>
          <CopyToClipboard text={this.props.img}
          onCopy={() => message.success(`已复制到剪贴板`)}>
            <Input defaultValue={this.props.img}/>
          </CopyToClipboard>
          <CopyToClipboard text={`![](${this.props.img})`}
          onCopy={() => message.success(`已复制到剪贴板`)}>
            <Button className='upload-log-button'><Icon type="file-markdown" theme="outlined" /></Button>
          </CopyToClipboard>
           <Popconfirm title="确定删除该图片？" onConfirm={this.handleDelete.bind(this,this.props.id)} okText="是的" cancelText="算了">
            <Button className='upload-log-button'><Icon type="delete" theme="outlined" /></Button>
          </Popconfirm>
        </div>
      </div>
    );
  }
}

export default UploadLogItem;