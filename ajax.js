/**
 * Handling AJAX requests.
 */

module.exports = {
    // AJAX function for GET requests
    request: function(type, url, callback) {
        // Instantiates the xhr object
        if (window.XMLHttpRequest) {
            var xhr = new XMLHttpRequest()
        }
        else if (window.ActiveXObject) {
            var xhr = new ActiveXObject('Microsoft.XMLHTTP')
        }
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                // Calls the callback with the datas received
                callback(this.responseText)
            }
        }
        // If the type is POST, it needs some little quirk
        if (type === 'POST') {
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        }
        // Sends the request
        xhr.open(type, url, true)
        xhr.send()
    }
}

