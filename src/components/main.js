import { Component } from "react";
import Header from './header'
import Footer from './footer'
import Products from './products'
import { PRODUCTS } from "../shared/products";
class Main extends Component{
    constructor(props){
        super(props);
        this.state=
        {
            products:PRODUCTS
        };
    }


render(){
    return(
        <div>
            <Header/>
            <Products products={this.state.products}/>
            <Footer/>
        </div>
    );
    }
}

export default Main