
export function timer_q(){
var _queue = new Array();

function queue() {
  return _queue;
}

function add(fn, delay) {
  _queue.push(setTimeout(fn, delay));
}

function clear() {
  for (var i = 0; i < _queue.length; i++) {
    //console.log("before clear" + _queue)
    clearTimeout(_queue[i]);
    //console.log("after clear" + _queue)
  }
  _queue = [];
}

return {
  queue: queue,
  add: add,
  clear: clear
};

}