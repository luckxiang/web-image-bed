class TokenUtil {
  appPath = '/';
  tokenCookieName = 'Alan.WebBed';
  domain = undefined;

  isLogin(){
    if(this.getToken()){
      let exp = this.get('expires')
      if(exp && new Date(exp) > new Date()){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }
  getToken(){
    const key = this.tokenCookieName
    return this.get(key)
  }

  get(key){
    const equalities = document.cookie.split('; ');
    for (let i = 0; i < equalities.length; i++) {
      if (!equalities[i]) {
          continue;
      }
      const splitted = equalities[i].split('=');
      if (splitted.length !== 2) {
          continue;
      }
      if (decodeURIComponent(splitted[0]) === key) {
          return decodeURIComponent(splitted[1] || '');
      }
    }
    return null;
  }

  setToken(authToken,rememberMe = false){
    let cookieValue = encodeURIComponent(this.tokenCookieName) + '=';
    let tokenExpireDate = rememberMe ? (new Date(new Date().getTime() + 1000 * 86400)) : undefined;

    if (authToken) {
        cookieValue = cookieValue + encodeURIComponent(authToken);
    }
    if (tokenExpireDate) {
        cookieValue = cookieValue + '; expires=' + tokenExpireDate.toUTCString();
    }
    if (this.appPath) {
        cookieValue = cookieValue + '; path=' + this.appPath;
    }
    if (this.domain) {
        cookieValue = cookieValue + '; domain=' + this.domain;
    }
    document.cookie = cookieValue;
  }

    // 清空token
  clearToken(): void {
    this.setToken(null,null);
  }
}

const tokenUtil = new TokenUtil()
export default tokenUtil