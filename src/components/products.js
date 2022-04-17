import React from 'react';
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
function RenderProductsItems({product}){
  var a=product.desciption
  const description = a.map((list) => {
      return (
        <li>{list}</li>
      );
  });
  return(
    <Card>
          <CardImg className='cardImg' object src={product.image} alt={product.name} />
          <CardBody>
            <CardTitle heading><h5>{product.name}</h5></CardTitle>
            <CardText>
                <ul>
                    {description}
                </ul>
            </CardText>
            <div className='couple'>
            <CardSubtitle className='price'>{product.price}</CardSubtitle>
            <Button  className="addProductBtn btn btn-primary"><i class="fa fa-plus"></i></Button>

            </div>
          </CardBody>
    </Card>

);
}


function Products(props){
  var products;
//*if the search input is empty then display all products 
//else display products according to the search value
   if(props.inputSearchValue===''){
    products =props.products.map((product) => {
      return (
        <div key={product.id} className="col-12 col-md-4 ">
         <RenderProductsItems product={product}/>
        </div>
      );
  });
  }
  else{
    var filteredProducts=filterProduct(props.inputSearchValue)
    console.log(filteredProducts);

    products =filteredProducts.map((product) => {
      return (
        <div key={product.id} className="col-12 col-md-4 ">
         <RenderProductsItems product={product}/>
        </div>
      );
  });

  }


  
return (
  <div className="container products">
       
    <div className="row">
          {products}
    </div>

   
  </div>
);
}


export default Products;
