#!/usr/bin/env node
/**
 * App main file
 */

var Core = Object.create(require('ncore')).constructor()
var moduleLoader = Core.use('moduleLoader',
        require('ncore/modules/moduleLoader'))
var path = require('path')

moduleLoader.load({
    uri: path.join(__dirname, './modules'),
    dependencies: require('./dependencies.json'),
    core: Core,
    callback: init
})

function init(err) {
    if (err) {
        return console.log('Error loading', err, err.stack)
    }
    Core.init()
}

