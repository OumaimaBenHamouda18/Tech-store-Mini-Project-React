import React from 'react';
import { Card, CardBody, CardImg,CardText, CardTitle,Button, CardSubtitle} from 'reactstrap';
 function RenderProductsItems({product}) {
   
    var a=product.desciption
    const description = a.map((list) => {
        return (
          <li>{list}</li>
        );
    });
  return(
        
        <Card >
          
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
                <Button className='detailButton'>Details</Button>
                </div>
               
              </CardBody>


        </Card>

  );
}
const Products=(props)=>{
  const products = props.products.map((product) => {
    return (
      <div key={product.id} className="col-12 col-md-4 ">
       <RenderProductsItems product={product}/>
      </div>
    );
});
return (
  <div className="container products">
       
    <div className="row">
          {products}
    </div>

   
  </div>
);
}
    



export default Products;
