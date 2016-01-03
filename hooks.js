/**
 * @author Igor Zaporozhets <deadbyelpy@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var getElementById = document.getElementById,
    querySelector  = document.querySelector;


document.getElementById = function ( id ) {
    var el = getElementById.call(document, id);

    if ( !el ) {
        throw new Error(__filename + ': no element with id ' + id);
    }

    return el;
};


document.querySelector = function ( selector ) {
    var el = querySelector.call(document, selector);

    if ( !el ) {
        throw new Error(__filename + ': no element with selector: ' + selector);
    }

    return el;
};
