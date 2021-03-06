'use strict';

var Math = require('../controllers/math');

// Contains the list of all routes, i.e. methods, paths and the config functions
// that take care of the actions

exports.endpoints = [
    { method: 'GET', path: '/{name}', config: Math.hello },
    { method: 'GET', path: '/save/{number1}/{number2}', config: Math.saveOperation },
    { method: 'GET', path: '/results', config: Math.getAllOperations },
    { method: 'GET', path: '/min', config: Math.getMin },
    { method: 'GET', path: '/max', config: Math.getMax},
    { method: 'GET', path: '/delete/{idToDelete}', config: Math.deleteDocument},
    { method: 'GET', path: '/find/{idToFind}', config: Math.findDocument},
    { method: 'GET', path: '/sum/{number1}/{number2}', config: Math.saveOperation },
    { method: 'GET', path: '/subtract/{number1}/{number2}', config: Math.subtract },
    { method: 'GET', path: '/divide/{number1}/{number2}', config: Math.divide },
    { method: 'GET', path: '/multiply/{number1}/{number2}', config: Math.multiply },
    { method: 'GET', path: '/modulus/{number1}/{number2}', config: Math.modulus },
    { method: 'GET', path: '/power/{number1}/{number2}', config: Math.power }
]