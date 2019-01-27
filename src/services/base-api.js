export default class BaseApi {
  apiUrl = 'https://jsonplaceholder.typicode.com/';

  headers = {
    'Content-Type': 'application/json'
  };

  async getResource(url) {
    const resp = await fetch(this.apiUrl + url);
    const respData = await resp.json();
    return respData;
  }

  async postResource(url, data) {
    const resp = await fetch(this.apiUrl + url, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(data)
    });
    const respData = await resp.json();
    return respData;
  }

  async putResource(url, data) {
    const resp = await fetch(this.apiUrl + url, {
      method: 'PUT',
      headers: this.headers,
      body: JSON.stringify(data)
    });
    const respData = await resp.json();
    return respData;
  }

  async deleteResource(url) {
    const resp = await fetch(this.apiUrl + url, {
      method: 'DELETE'
    });
    const respData = await resp.json();
    return respData;
  }
}
