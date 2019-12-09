import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';


import 'C:/Users/Divyanshu/node_modules/bootstrap/dist/css/bootstrap.css'
//import './plus'
import Lists from "./Lists"
class App extends Component{
  constructor(props)
  {
    super(props)
    
    this.state =
    {
      items:[],
      show:false
    };
    this.addItem = this.addItem.bind(this);
    this.Togle =this.Togle.bind(this);
 
  }
  addItem(e)
  {
    if(this._inputElement.value !=="")
    {
      var newItem = {
        text:this._inputElement.value,
        key : Date.now()
      };
      this.setState((prevState) => {
        return {
          items : prevState.items.concat(newItem)
        };
      });
    }
    
    this._inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
  }
  Togle = () => {
    const { show } = this.state;
    this.setState ( {show:!show} )
  }
  
render() {
  return (<body className="Clr">
  <div >
    
    <div >
      <span className="span--todo " >Todo
        </span><button className ="button--app-js"  onClick = {this.Togle}>+</button>
       
       
  
        <hr
      style={{
          color: "white",
          backgroundColor: "white",
          height: .1 ,
          width:1100
         
      }}
  />
          <Lists  className ="list--custom" entries = {this.state.items}>
         
          
          </Lists>
          
          
          { this.state.show && <form   className = "" onSubmit={this.addItem} >
         
          <input  ref = {(a) => this._inputElement =a }  className="field"  ></input>
          
   
          </form> }    
  <ul className ="clr theList unorder--list__app-js">
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            <li><ColoredLine color="white"/></li>
            </ul>
          
          
        
      </div></div>
      </body>
  );
}


  
}
const ColoredLine = ({ color,h }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: .1 ,
          width:1005
         
      }}
  />
);
export default App;
