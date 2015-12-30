/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

require('./static');

// the application itself
// "js" directory is resolved by webpack to
// path.join(process.env.PATH_ROOT, process.env.PATH_SRC, 'js')
require('js/main');
