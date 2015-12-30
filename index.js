/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var app = require('spa-app');


// set global mode
app.data.debug = true;

// browser logging
window.debug = require('./debug');

// tools
require('./static');
require('./events');
require('./overrides');

// the application itself
// "js" directory is resolved by webpack to
// path.join(process.env.PATH_ROOT, process.env.PATH_SRC, 'js')
require('js/main');
