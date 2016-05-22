import './counter.tag'

import riot from "riot";
import { createStore } from 'redux';
import StoreMixin   from 'riot-redux-mixin';


let reducer = function(state = 0, action) {
  if (action.type == 'increment') {
    state += 1;
  } else if (action.type == 'decrement') {
    state -= 1;
  }
  return state;
}

export var setup = function(container) {
  let store = createStore(reducer);
  riot.mixin('redux', new StoreMixin(store));
  riot.mount(container, "demo-counter");
}
