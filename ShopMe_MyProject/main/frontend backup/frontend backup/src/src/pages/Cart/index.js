import React from 'react'
import '../Cart/index.css'
import axios from "axios"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import { URL } from "../../config"
import AddToCart from "../../components/Cart/AddToCart"
import { useNavigate } from "react-router"
import Item from "../../components/Item/Item"


const Cart = () => {
    const navigate = useNavigate()

    const userId = sessionStorage['id']
    const [itemCart, setItemCart] = useState([])
    const [totalCost, setTotalCost] = useState()
    const ShowCart = () => {
        const url = `${URL}/cart/${userId}`

        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setItemCart(result['data'])
                console.log(result['data'])

            }
            else {
                toast.error(result['error'])
            }
        })
    }

    const obj = Object.values(itemCart).map(values => {
        return values
    })

    const navigateTo = () => {

        navigate("/order")
    }

    useEffect(() => {

        ShowCart();
    }, [])

    const goback = () => {

        navigate('/homepage')

    }


    return (
        <div>
            <div className="container bg-white rounded-top mt-5">

                <div className="row d-flex justify-content-center" id='CartPageMainDiv'>
                    <div className="col-lg-10 col-12 pt-3">

                        <div className="text-center p-2">
                            <h2 id='CartTitle'>CART</h2>
                        </div>
                        
                      
                        <div className="row pl-2 mt-3" id="CartTableHeadingDiv">
                            <div className="col-4 text-center" id="produc">Product Image </div>
                            <div className="col-5 text-center" id="prc">Product Details</div>
                            <div className="col-3 text-center" id="quantity">Quantity</div>

                        </div>
                        <hr />
                        {Object.values(itemCart).map((item) => {
                            return <AddToCart cart={item} />
                        })}

                    </div>
                </div>

            </div>
            <div className="container rounded-bottom pt-4 pb-4" id="CartFooterDiv">
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-10 col-12">
                        <div className="row justify-content-between align-items-center" >
                            <div className='col-5'> <button onClick={goback} className="btn btn-dark border border-dark text-light"> GO BACK</button> </div>
                            {/* <div className="col-5" id="CartFooterFont"> GRAND TOTAL = Rs.<span className="pl-md-4" >{itemCart.totalCost}</span></div> */}
                            <div className='col-2 text-right'> <button className="btn btn-success border border-dark text-white px-lg-5 px-3" onClick={navigateTo}>CONTINUE</button> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Cart