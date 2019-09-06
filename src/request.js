export default (method, url) => {
  return new Promise((res, rej) => {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.addEventListener('load', (e) => {
      res({
        body: e.target.status < 400 ? JSON.parse(e.target.response) : e.target.response,
        status: e.target.status
      });
    });
    xhr.addEventListener('error', (e) => {
        rej(e);
    });
    xhr.send();
  });
};