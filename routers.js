/**
 * Module handling routing of the application.
 */

// Loading dependencies
var Plates = require('plates')
var container = document.getElementById('container')

module.exports = {
    init: function() {
        var that = this
        // Listens to the "/" route
        that.Event.addEventListener('/', function() {
            // Loads the notes from the model
            var notes = that.Model.notes.getAll()
            // Loads the template
            that.Ajax.request('GET', '/templates/notes.html', function(html) {
                // Replaces the container with the template filled in with the datas
                container.parentNode.replaceChild(Plates.bind(html, notes), container)
            }
        })
    }
}

