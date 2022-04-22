import React,{useState} from 'react';
import { Card, CardBody, CardImg,CardText, CardTitle,Button, CardSubtitle} from 'reactstrap';
import { PRODUCTS } from "../shared/products";

function filterProduct(text){
  var matches=[]; //array to save products that correspond to the search
  for(var i=0;i<PRODUCTS.length;i++){
      var item=PRODUCTS[i].name.toLowerCase();
      if(item.indexOf(text.toLowerCase())!==-1){//indexOf function makes sure that the term exist
          matches.push(PRODUCTS[i]);
      }
  }
  return matches;
}
const RenderProductsItems=(props)=>{
  var a=props.product.desciption
  const description = a.map((list) => {
      return (
        <li>{list}</li>
      );
  });
 
  return(
    <Card>
          <CardImg className='cardImg' object src={props.product.image} alt={props.product.name} />
          <CardBody>
            <CardTitle heading><h5>{props.product.name}</h5></CardTitle>
            <CardText>
                <ul>
                    {description}
                </ul>
            </CardText>
            <div className='priceAdd'>

            <CardSubtitle className='price'>{props.product.price}</CardSubtitle>
            <Button  className="addProductBtn btn btn-primary" onClick={(e)=>{var items=[...props.arrayItems];items.push(props.product.name);props.productsToPurchase(items)}}><i class="fa fa-plus"></i></Button>
            </div>
          </CardBody>
    </Card>

);
}


function Products(props){
  const [arrayItems,updateArray]=useState([])//store products added to shopping cart
  
  var products;
  function ProductItems(){
    if(props.inputSearchValue===''){
   
      products =props.products.map((product) => {
        return (
          <div key={product.id} className="col-12 col-md-4 ">
            <RenderProductsItems arrayItems={arrayItems} product={product} productsToPurchase={updateArray}/>
          </div>
          
          
        );
    });
    }
    else{
      var filteredProducts=filterProduct(props.inputSearchValue)
      
  
      products =filteredProducts.map((product) => {
        return (
          <div key={product.id} className="col-12 col-md-4 ">
  
           <RenderProductsItems product={product}/>
    
          </div>
        );
    });
  
    }
    return products;
  }
//*if the search input is empty then display all products 
//else display products according to the search value
   
  
return (
 
  <div className="container products">
    <div className="row">
          <ProductItems myPurchases={props.myPurchases(arrayItems)}/>{/*update purchases in parent state*/}

    </div>

   
  </div>
);
}


export default Products;
