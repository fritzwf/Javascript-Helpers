if (response && response.data) {

const tmpData = [ response.data ];

const userTableItems =
  {
    userInfos: tmpData.map((v) => {
      return v.userInfo;
    })
  };
  
  this.userTableItems = userTableItems.userInfos;

}