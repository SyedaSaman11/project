import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import "./item.css"
import { URL } from "../../config"

const Item = (props) => {
    const { product } = props
    const [qty, setQty] = useState(product.quantity)
    const [quantity, setQuantity] = useState(1)
    const [productStockQty, setproductStockQty] = useState(qty + 1)
    const productorigionalqty = product.product.productQuantity
    console.log(product.product.productQuantity)

    const body = {
        quantity
    }



    const incrementCount = () => {
        const productId = product.product.productId




        const userId = sessionStorage['id']

        const url = `${URL}/cart/incqty/${userId}/${productId}`

        axios.put(url, body).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {

                setQty(qty + 1)
                // setIncrement(result['data'])
                console.log(result['data'])
                // window.location.reload(false)


            }
            else {
                toast.error("cannot be incremented")
            }
        })

    }

    const decrementCount = () => {

        const productId = product.product.productId
        //console.log(product.product.productId)



        const userId = sessionStorage['id']

        const url = `${URL}/cart/decqty/${userId}/${productId}`

        axios.put(url, body).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setQty(qty - 1)
                console.log(result['data'])


            } else {
                toast.error("cannot be decremented")
            }
        })
    }

    console.log(product.id)
    const deleteProduct = () => {
        const userId = sessionStorage['id']
        const url = `${URL}/cart/delete/${product.id}/${userId}`

        axios.delete(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                toast.success("Product deleted successfully")
                window.location.reload(false)
            } else {
                toast.error("Not able to delete product")
            }
        })
    }



    return <div>




        <div className="row justify-content-between align-items-center pt-lg-4 pt-2 pb-3 border-bottom mobile">
            <div className="row align-items-center">
                <div className="col-4">
                    <img src={product.product.productImage} width="auto" height="auto" alt="" id="image" />
                </div>
                <div className="col-8 pl-md-3 pl-1">
                    <div className="row">


                        <div id="ItemProductDetailsCol" className="col-8 mt-2">
                            <h5>{product.product.productName}</h5>
                            <span className="pl-1" >Description:  {product.product.productDescription}</span>
                        </div>
                        <div className="col-1">

                        </div>
                        <div className="col-3 text-center mt-4">

                            <button class="btn btn-outline-success btn-sm" type="button" onClick={decrementCount} disabled={qty == 1}>-</button>
                            <span className="fa fa-minus-square text-secondary"></span><span className="px-md-3 px-1" >{qty}</span><span className="fa fa-plus-square text-secondary"></span>
                            <button class="btn btn-outline-danger btn-sm" type="button" onClick={incrementCount} disabled={qty > (productorigionalqty - 1)}  >+</button>
                            <hr />
                            <div className="btn btn-danger align-center btn-md active" onClick={deleteProduct}>Remove</div>
                        </div>
                    </div>

                    <div className="row pt-5">
                        <div className="col-6">
                            <div id="ItemFinalPriceCol" className="col "> Price :  Rs.{product.product.productFinalPrice}</div>
                        </div>
                        <div className="col-2">

                        </div>
                        <div className="col-4">
                            <div id="ItemSubTotalCol" className="text-right">Sub Total : Rs {qty * product.product.productFinalPrice} </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>

    </div>

}

export default Item
