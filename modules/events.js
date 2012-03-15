/**
 * Events handling.
 */

module.exports = {
    dispatchEvent: function(name, datas) {
        var events = this.events || []
        // Finds the callback for the event
        var callback
        for (var i = 0, l = this.events.length; i < l; ++i) {
            if (this.events[i].name === name) {
                callback = this.events[i].callback
                break
            }
        }
        // Calls it
        callback(datas)
        // Allows chaining
        return this
    },
    addEventListener: function(name, callback) {
        var events = this.events || []
        // Check if the event already exists
        var exists
        for (var i = 0, l = this.events.length; i < l; ++i) {
            if (this.events[i].name === name) {
                exists = true
            }
        }
        // If it does, return false
        if (exists) {
            return false
        }
        // If it doesn't, adds the event to the list
        this.events.push({name: name, callback: callback})
        // Allows chaining
        return this
    },
    removeListener: function(name) {
        var events = this.events || []
        // Finds the index of the event
        for (var i = 0, l = this.events.length; i < l; ++i) {
            if (this.events[i].name === name) {
                var index = i
                break
            }
        }
        // Removes the event from the list
        this.events.splice(i, 1)
        // Allows chaining
        return this
    }
}

