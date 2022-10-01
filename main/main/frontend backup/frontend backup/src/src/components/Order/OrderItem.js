const OrderItem = (props) => {
    const { product } = props

    return (
        
        <div>
           
            <div className="row mt-4 mb-4">
                <div className="col-4 text-center">
                    <img src={product.product.productImage} id="OrderItemDiv" />
                </div>
                <div className="col-1"></div>
                <div className="col-7 p-0">
                <div className="row ">
                    <div className="col-7 text-center">
                        <h5>{product.product.productName}</h5>
                    </div>
                    <div className="col-3">
                        <b>{product.product.productFinalPrice}</b>
                    </div>
                    <div className="col-2">
                        <b>{product.quantity}</b>
                    </div>
                </div>
                </div>
                
            </div>
            <hr />
        </div>
    )
}

export default OrderItem