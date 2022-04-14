import {Link} from 'react-router-dom';
function Footer(props){
return(
    <div className="footer">
        <div className="container">
            <div className="row ">
                <div className="col-3 offset-1 col-sm-2">
                    <h5>Information</h5>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/payement_method">Payment method</Link></li>
                        <li><Link to="/order_status">order status</Link></li>
                        <li><Link to="/terms">Terms</Link></li>
                        <li><Link to="/secure_shopping">secure shopping</Link></li>
                    </ul>
                </div>
                <div className="col-3 offset-1 col-sm-2">
                    <h5>Services</h5>
                    <ul>
                        <li><Link to="/our_stores">Our stores</Link></li>
                        <li><Link to="/customer_services">Customer Service</Link></li>
                        <li><Link to="/delivery">Delivery Service</Link></li>
                        <li><Link to="/after_sales">After Sales Service</Link></li>
                        <li><Link to="/track_orders">Track your orders</Link></li>
                        <li><Link to="/contact_us">Contact Us</Link></li>
                    </ul>
                </div>
                <div className="col-3 offset-1 col-sm-3">
                    <h5>Contact Informations</h5>
                    <ul>
                        <li>Avenue de la Corniche,<br/> Monastir 5000 Tunisie<br /></li>
                        <li><i className="fa fa-phone fa-lg"></i> +852 1234 5678<br /></li>
                        <li><i className="fa fa-fax fa-lg"></i> +852 8765 4321<br /></li>
                        <li><i className="fa fa-envelope fa-lg"></i> <a href="mailto:sstore@store.net">
                                sstore@store.net</a></li>
                    </ul>
                                
                </div>
                <div className='col-3 col-sm-2 '>
                    <h5>Follow us</h5>
                    <a className="btn btn-social-icon btn-facebook" href="#facebook" ><i className="fa fa-facebook"></i></a>
                    <a className="btn btn-social-icon btn-linkedin" href="#linkedin" ><i className="fa fa-linkedin"></i></a>
                    <a className="btn btn-social-icon btn-twitter" href="#twitter" ><i className="fa fa-twitter"></i></a>
                    <a className="btn btn-social-icon btn-instagram" href="#instagram" ><i className="fa fa-instagram"></i></a>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-auto">
                    <p>©Copyright 2022 SStore</p>
                </div>
            </div>

            
        </div>
    </div>
);
}

export default Footer