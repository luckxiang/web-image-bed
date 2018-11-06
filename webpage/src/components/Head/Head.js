import React, { Component } from 'react';
import './Head.css'
class Head extends Component {
  static defaultProps = {
    title: '这里是标题',
    defaultSelect:0,
    buttons:[{
      key:0,
      title:'首页'
    }]
  }
  state = {
    selectKey:0
  }
  constructor () {
    super()
  }
  componentWillMount(){
    this.setState({
      selectKey:this.props.defaultSelect
    })
  }
  handleClick(button){
    this.setState({
      selectKey:button.key
    })
    this.props.onClick(button)
  }
  renderButtons(){
    let buttons = []
    for(let button of this.props.buttons){
      if(button.key === this.state.selectKey){
        buttons.push(<div onClick={this.handleClick.bind(this,button)} key={button.key} className='headButton headButtonSelect'>{button.title}</div>)
      }else{
        buttons.push(<div onClick={this.handleClick.bind(this,button)} key={button.key} className='headButton'>{button.title}</div>)
      }
    }
    return buttons
  }

  render() {
    return (
      <div style={{height:50,backgroundColor: '#101010'}}>
        <div className='headTitle'>{this.props.title}</div>
        {this.renderButtons()}
      </div>
    );
  }
}

export default Head;