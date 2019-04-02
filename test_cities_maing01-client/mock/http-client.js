const HttpClient = {
  get(url, successFn, failureFn) {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.withCredentials = true;
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = (/*e*/) => {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          let json;
          try {
            json = xhr.responseText ? JSON.parse(xhr.responseText) : null;
          } catch (err) {
            failureFn(err);
            return;
          }
          successFn(json);
        } else {
          failureFn(new Error("Server responded with status " + xhr.status));
        }
      }
    };
    xhr.send(null);
  }
};

export default HttpClient;
