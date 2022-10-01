import Logo from '../../assets/Logo.png'
import "./Sitem.css"
const SItem = (props) => {
    const { product } = props
    const {firstName} = sessionStorage
    return (
    
        <div className="d-flex flex-row justify-content-between align-OrderItems-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
           
           
           
           <div class="container mt-5 mb-5">
    <div class="row d-flex justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="text-left logo p-2 px-5"> <img src={Logo} width="50"/> </div>
                <div class="invoice p-5">
                    <h5>Your order Confirmed!</h5> <span class="font-weight-bold d-block mt-4">Hello, {firstName}</span> <span>You order has been confirmed and will be deliverd in next two days!</span>
                    <div class="payment border-top mt-3 mb-3 border-bottom table-responsive">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td>
                                        <div class="py-2"> <span class="d-block text-muted">{}</span> <span></span> </div>
                                    </td>
                                    <td>
                
                                    </td>
                                    <td>
                                        <div class="py-2"> <span class="d-block text-muted">Payment Successful</span> <span><img src="https://img.icons8.com/color/48/000000/mastercard.png" width="20" /></span> </div>
                                    </td>
                                    <td>
                                       
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="product border-bottom table-responsive">
                        <table class="table table-borderless">
                            <tbody>
                                <tr>
                                    <td width="20%"> <img src={product.product.productImage} width="90"/> </td>
                                    <td width="60%"> <span class="font-weight-bold">{product.product.productName}</span>
                                        <div class="product-qty"> <span class="d-block">Quantity:1</span> <span>Color:Dark</span> </div>
                                    </td>
                                    <td width="20%">
                                        <div class="text-right"> <span class="font-weight-bold">₹{product.product.productFinalPrice }</span> </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row d-flex justify-content-end">
                        <div class="col-md-5">
                            <table class="table table-borderless">
                                <tbody class="totals">
                                    <tr>
                                        <td>
                                            <div class="text-left"> <span class="text-muted">Product Price</span> </div>
                                        </td>
                                        <td>
                                            <div class="text-right"> <span>₹{product.product.productPrice}</span> </div>
                                        </td>
                                    </tr>
                                  
                                    <tr>
                                        <td>
                                            <div class="text-left"> <span class="text-muted">Discount</span> </div>
                                        </td>
                                        <td>
                                            <div class="text-right"> <span class="text-success">{product.product.productDiscount}%</span> </div>
                                        </td>
                                    </tr>
                                    <tr class="border-top border-bottom">
                                        <td>
                                            <div class="text-left"> <span class="font-weight-bold">Final Price</span> </div>
                                        </td>
                                        <td>
                                            <div class="text-right"> <span class="font-weight-bold">{product.product.productFinalPrice}</span> </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <p>We will be sending shipping confirmation email shortly</p>
                    <p class="font-weight-bold mb-0">Thanks for shopping with us!</p> <span>Shopme Team</span>
                </div>
                <div class="d-flex justify-content-between footer p-3"> <span>Need Help? visit our <a href="/faq"> FAQ section</a></span> <span>12 June, 2020</span> </div>
            </div>
        </div>
    </div>
</div>
           
           
           
           
           
           
           
           
           
           
            
        </div>
    )        
}

export default SItem 