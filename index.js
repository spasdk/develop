/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

// browser logging
window.debug = require('./debug');

// tools
require('./hooks');
require('./static');
require('./events');


// the application itself
// "js" directory is resolved by webpack gulp task to
// path.join(process.env.PATH_ROOT, process.env.PATH_SRC, 'js')
require('js/main');
