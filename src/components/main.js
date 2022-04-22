import React,{useState} from 'react';
import Header from './header'
import Footer from './footer'
import Products from './products'
function Main(props){
    
    const [text, setText]=useState('') //search input 
    const [purchases, setPurchases]=useState([]) //to update purchases from child products

    return(
        <div>
            <Header changeSearchText={text=>setText(text)} purchases={purchases}/>
            <Products   products={props.products}  inputSearchValue={text} myPurchases={purchases=>setPurchases(purchases)} />
            <Footer/>
        </div>
    );
    }


export default Main