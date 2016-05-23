<demo-counter>
  <h1>Counter: {state}</h1>

  <button onclick='{increment}'>+</button>
  <button onclick='{decrement}'>-</button>

  <script type="text/javascript">
    this.mixin('redux');

    this.subscribe(function(state){
      this.state = state;
    }.bind(this))

    this.increment = function() {
      this.store.dispatch({type: 'increment'});
    }

    this.decrement = function() {
      this.store.dispatch({type: 'decrement'});
    }
  </script>
</demo-counter>
