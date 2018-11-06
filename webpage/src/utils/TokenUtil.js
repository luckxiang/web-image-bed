class TokenUtil {
  appPath = '/';
  tokenCookieName = 'Alan.WebBed';
  domain = undefined;

  isLogin(){
    if(this.getToken()){
      return true
    }else{
      return false
    }
  }
  getToken(){
    const equalities = document.cookie.split('; ');
    const key = this.tokenCookieName
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