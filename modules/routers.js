/**
 * Module handling routing of the application.
 */

// Loading dependencies
var Plates = require('plates')
var container = document.getElementById('container')

module.exports = {
    setup: function() {
        // Listens to the "/" route
        this.Event.on('/', this.main)
    },
    main: function() {
        // Loads the template
        this.Ajax.request('GET', '/templates/notes.html', this.renderNotes)
    },
    renderNotes: function(html) {
        // Loads the notes from the model
        var notes = this.Model.getAll()
        // Replaces the container with the template filled in with the datas
        var map = Plates.Map()
        map.class('title').to('title')
        map.class('text').to('text')
        container.parentNode.replaceChild(Fragment(Plates.bind(html, notes, map)), container)
    }
}

function Fragment(html) {
    var div = document.createElement("div"),
        fragment = document.createDocumentFragment()

    div.innerHTML = html
    while (div.hasChildNodes()) {
        fragment.appendChild(div.firstChild)
    }

    return fragment
}

