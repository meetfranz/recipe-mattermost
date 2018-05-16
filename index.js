module.exports = Franz => class Mattermost extends Franz {
  async validateUrl(url) {
    const baseUrl = new window.URL(url);
    try {
      window.fetch(`${baseUrl.origin}/api/v4/system/ping`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
      }})
      .then(function(resp){
         return resp.json();     
      })
      .then(function(json){
        status = json.status;
      });
      return status == "OK";
    } catch (err) {
      console.error(err);
    }

    return false;
  }
};
