function httpdo(type, url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(type, url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            console.log(xhr.responseText);
            var json = JSON.parse(xhr.responseText);
            if (callback) {
                console.log(xhr.status)
                callback(Object.assign({}, json, {xhrstatus: xhr.status}));
            }
        }
    }
    console.log(data);
    xhr.send(JSON.stringify(data));
}

export function get(url, callback) {
  httpdo('GET', url, null, callback);
}

export function post(url, data, callback) {
    httpdo('POST', url, data, callback)
}

export function httpdelete(url, data, callback) {
    httpdo('DELETE', url, data, callback)
}

export function put(url, data, callback) {
    httpdo('PUT', url, data, callback)
}
