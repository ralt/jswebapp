/**
 * Module handling routing of the application.
 */

// Loading dependencies
var Plates = require('plates')

module.exports = {
    init: function() {
        var that = this
        // Listen to the "/" route
        that.Event.addEventListener('/', function() {
            var notes = that.Model.notes.getAll()

        })
    }
}

