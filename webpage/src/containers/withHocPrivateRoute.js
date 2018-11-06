import React from 'react';
import {Route,Redirect,withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import tokenUtil from '../utils/TokenUtil';
import { message } from 'antd';

function withHocPrivateRoute(WrappedComponent){
    if(!!!WrappedComponent){
        throw new Error("缺少组件参数");
        return false;
    }
    //withRouter 也是一个高阶组件 传递 history
    return withRouter(
    class extends React.Component{
        constructor(props) {
          super(props);
        }

        componentWillMount(){
            let  isAuthenticated =  tokenUtil.isLogin() ? true :false;
            this.setState({isAuthenticated:isAuthenticated})
            if(!isAuthenticated){
              const {history} = this.props;
              message.error("登陆已过期，请重新登陆",1).then(()=>{
                history.replace("/login");
              })
            }
        }
        render(){
            return this.state.isAuthenticated ?  (
                <WrappedComponent {...this.props} />
            ) : ("123");
        }
    }
    )
}
export default withHocPrivateRoute;