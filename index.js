module.exports = Franz => class Mattermost extends Franz {
  async validateUrl(url) {
    const baseUrl = new window.URL(url);
    try {
      const resp = await window.fetch(`${baseUrl.origin}/api/v4/system/ping`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await resp.json();

      return Object.hasOwnProperty.call(data, 'status');
    } catch (err) {
      console.error(err);
    }

    return false;
  }
};
