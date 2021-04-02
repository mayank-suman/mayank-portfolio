import '../sass/index.scss';

var jquery = require('jquery');
window.$ = window.jQuery = jquery;

require('jquery-migrate');
jQuery.migrateMute = true;

import smoothscroll from 'smoothscroll-for-websites';

import './main';
