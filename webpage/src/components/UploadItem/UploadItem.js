import React, { Component } from 'react';
import { Input , Icon, message,Button } from 'antd';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import './UploadItem.css'
class UploadItem extends Component {
  constructor () {
    super()
  }
  render() {
    return (
      <div className='upload-item-group'>
        <div className='upload-preview' style={{background: `url(${this.props.img}) `,backgroundSize: `100%`}}>
        </div>
        <div className='upload-status'>
          <CopyToClipboard text={this.props.img}
          onCopy={() => message.success(`已复制到剪贴板`)}>
            <Input
              value={this.props.img}
            />
          </CopyToClipboard>
          <CopyToClipboard text={`![](${this.props.img})`}
          onCopy={() => message.success(`已复制到剪贴板`)}>
            <Button className='upload-img-button'>MarkDown</Button>
          </CopyToClipboard>

          <Button className='upload-img-button'>打开</Button>
        </div>
      </div>
    );
  }
}

export default UploadItem;