module.exports = Franz => class Mattermost extends Franz {
  async validateUrl(url) {
    const baseUrl = new window.URL(url);
    try {
      const resp = await window.fetch(`${baseUrl.origin}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return resp.status.toString().startsWith('2');
    } catch (err) {
      console.error(err);
    }

    return false;
  }
};
