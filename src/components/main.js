import React,{useState} from 'react';
import Header from './header'
import Footer from './footer'
import Products from './products'
function Main(props){
    
    const [text, setText]=useState('')
    return(
        <div>
            <Header changeSearchText={text=>setText(text)}/>
            <Products products={props.products}  inputSearchValue={text}/>
            <Footer/>
        </div>
    );
    }


export default Main