/**
 * Main file of the application.
 */

// Loading dependencies
var History = window.History

module.exports = {
    // Function run at launch
    init: function() {
        this.Event.emit("/")
        //window.onstatechange = this.onstatechange
    },
    onstatechange: function() {
        console.log("onstatechange")
        this.Event.emit(window.location.pathname)
    }
}

