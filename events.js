/**
 * Events handling.
 */

module.exports = {
    dispatchEvent: function(name, datas) {
        // Finds the callback for the event
        for (var i = 0, l = this.events.length; i < l; ++i) {
            if (this.events[i].name === name) {
                var callback = this.events[i].callback
                break
            }
        }
        // Calls it
        callback(datas)
        // Allows chaining
        return this
    },
    addEventListener: function(name, callback) {
        // Check if the event already exists
        for (var i = 0, l = this.events.length; i < l; ++i) {
            if (this.events[i].name === name) {
                var exists = true
            }
        }
        // If it does, return false
        if (exists) {
            return false
        }
        // If it doesn't, adds the event to the list
        this.events.push({name: name, name: callback})
        // Allows chaining
        return this
    },
    removeListener: function(name) {
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
    },
}

