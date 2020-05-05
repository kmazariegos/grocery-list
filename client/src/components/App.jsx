import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    // this.get = this.get.bind(this)
  }

// get() {
//   axios
//   .then()
//   .catch()
// }

render() {
  return(
    <div>
    <img src="grocery-bags.png"/>
    <h1>Grocery List</h1>

    <form>
      <label> Item
        <input name="item" value=""/>
      </label>
      <label> Qunatity
        <input name="quantity" value=""/>
      </label>
      <button>Add Grocery</button>
    </form>

    <ul class="groceries">
      <li>
        <span> frozen pizza </span>
        <span> 5 </span>
      </li>
    </ul>
  </div>
   )
 }

}

export default App;