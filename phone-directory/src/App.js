import React,{Component} from React;

class App extends Component {
  render(){
    return (
    <div  >
      {/* <div className="header">Phone Directory</div>
      
      <button> Add</button>
      <div>
        <span>Name</span></br>
      <span>Phone</span>
      </div>  */}
      <label htmlFor="name"></label>
      <input id="name" type="text" placeholder="type here" defaultvalue="shristi"></input>
    </div>
  );
  }
  
}

export default App;
