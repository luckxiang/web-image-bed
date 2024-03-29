import http from '../utils/http'
import tokenUtil from '../utils/TokenUtil';

class AuthModel {
  login(payload){
    return http.post('user/access/login',payload).then(re=>{
      if(re.token){
        tokenUtil.setToken(re.token,payload.remember)
        return re;
      }else{
        throw "登录失败"
      }
    })
  }

  getUploadLog(){
    return http.get('upload')
  }

  deleteUpload(id){
    return http.delete('upload/'+id)
  }
}

const authModel = new AuthModel()
export default authModel