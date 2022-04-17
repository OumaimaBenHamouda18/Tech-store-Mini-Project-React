import './App.css';
import React, {Component} from 'react';
import {PRODUCTS} from './shared/products'
import {BrowserRouter} from 'react-router-dom';
import Main from './components/main';
class App extends Component {
  constructor(props){
    super(props);
    this.state=
    {
        products:PRODUCTS
    };
}
  render (){
    return(
    <BrowserRouter>
    <div>
      <Main products={this.state.products}/>
    </div>
  </BrowserRouter>
);
  }
   
}

export default App;
