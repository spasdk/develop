/**
 * Save/restore data depending on the execution device.
 *
 * @module stb/develop/storage
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var data = require('spa-app').data;


// public
module.exports = {
    get: function ( name ) {
        var value;

        if ( data.host ) {
            value = stbStorage.getItem(name);
        } else {
            value = localStorage.getItem(name);
        }

        return value ? JSON.parse(value) : null;
    },

    set: function ( name, value ) {
        value = JSON.stringify(value);

        if ( data.host ) {
            stbStorage.setItem(name, value);
        } else {
            localStorage.setItem(name, value);
        }
    }
};
