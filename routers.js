/**
 * Module handling routing of the application.
 */

// Loading dependencies
var Plates = require('plates')
var containerId = 'container'

module.exports = {
    init: function() {
        var that = this
        // Listen to the "/" route
        that.Event.addEventListener('/', function() {
            var notes = that.Model.notes.getAll()
            that.Ajax.get('/templates/notes.html', function(html) {
                document.getElementById(containerId).innerHTML = Plates.bind(html, notes)
            }
        })
    }
}

