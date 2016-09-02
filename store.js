//STORING STATE
//Where exactly is the state kept?
//A store keeps hold of the state, 
//and allows you to dispatch actions which will modify the state

var redux = require('redux');
var createStore = redux.createStore;

var reducers = require('./reducers');

var store = createStore(reducers.repositoryReducer);
module.exports  = store;