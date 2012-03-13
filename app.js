/**
 * Main file of the application.
 */

// Loading dependencies
var History = window.History

module.exports = {
    // Function run at launch
    init: function() {
        var that = this
        window.onstatechange = function() {
            that.Event.dispatchEvent(window.location.pathname)
        }
    }
}

