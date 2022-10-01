import { toast } from 'react-toastify';
import { URL } from "../../config";
import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import "./index.css"
import { useState } from 'react'
import Feedback from '../../components/Feedback/feedback';

const ProductDetails = () => {
    const userId = sessionStorage['id']
    const { productQuantity, productId, productFinalPrice, productDiscount, productPrice, productDescription, productImage, productName } = sessionStorage;
    const [sproductId, setProductId] = useState(productId);
    const [quantity, setQuantity] = useState(1)
    const [data, setData] = useState([])
    const [feedbackDescription, setFeedbackDescription] = useState("")
    const [feedbackList, setFeedbackList] = useState([])
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    const [product, setProduct] = useState({
        productId: productId
    })
    const [user, setUser] = useState({
        userId: userId
    })
     
    const [msg, setMsg] = useState()

    const message = () => {
        
        if(productQuantity != 0){
            setMsg("ADD TO CART")
        } else {
            setMsg("Out of Stock")
        }
    }

    const addtocart = () => {


        const body = {

            productId,
            quantity

        }
        const userId = sessionStorage['id']
        const role = sessionStorage['role']
        console.log(productId)

        const url = `${URL}/cart/add/${userId}`
        axios.post(url, body).then(response => {
            const result = response.data
            if (result['status'] == "success") {
                console.log(result['data'])
                setData(result['data'])
                console.log(data)
                toast.success("Added to cart succesfully")
            }
            else if (role == 'Vendor') {
                toast.warning("Vendor cannot add product to cart sign in as customer")
            }
            else {
                toast.error(result['error'])
            }

        })

    }

    const addComment = () => {



        const body = {
            feedbackDescription,
            rating,
            user,
            product



        }
        const url = `${URL}/product/feedbackadd`

        axios.post(url, body).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                console.log(result['data'])
                toast.success("Comment added successfully")
                window.location.reload(false)
            } else {
                toast.error("Comment cannot be added")
            }
        })


    }


    const feedbackDisplay = () => {

        const url = `${URL}/product/feedback/${productId}`

        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == "success") {
                setFeedbackList(result['data'])
                console.log(result['data'])
            } else {
                toast.info("No feedback found")
            }
        })
    }

    useEffect(() => {
        message()
        feedbackDisplay()

    }, [])



    return (
        <div>

            <div className="row">
                <div className="col">
                    <img src={productImage} alt="" />

                </div>
                <div className="col">
                    <h1 style={{ paddingLeft: "190px" }}>{productName}</h1>
                    <br />
                    <div class="item-detail" style={{ minHeight: "100px", maxheight: "50px", backgroundColor: "azure" }}>



                        <div class="item-price" >
                            <span class="new-price" style={{ fontWeight: "bold", fontSize: "18px", paddingLeft: "18px" }}>₹{productFinalPrice}</span>

                            <span class="_3Ay6Sb" style={{ fontWeight: "bold", fontSize: "18px", fontWeight: "bold", textAlign: "center", color: "green", paddingLeft: "130px" }}><span>{productDiscount}% off</span></span>
                            <span class="old-price" style={{ textDecoration: "line-through", paddingLeft: "130px", paddingRight: "18px", color: "grey", fontWeight: "bold", fontSize: "16px" }}>₹{productPrice}</span>
                        </div>
                        <div style={{ marginTop: "20px" }}>{productDescription}</div>
                    </div>
                    <button type="button"   class="btn btn-success float-right" style={{ marginLeft: "0px", width: "100%" }} onClick={addtocart} disabled={productQuantity<=0}>{msg}</button>

                </div>

                <input hidden={true} onChange={(e) => { setUser(e.target.value) }}></input>
                <input hidden={true} onChange={(e) => { setProduct(e.target.value) }}></input>
                <label for="stars" id="rating">Rating</label>
                <div className='star-rating' id="stars" >
                    {[...Array(5)].map((star, index) => {
                        index += 1;
                        return (
                            <button id="star" type='button' key={index}
                                className={index <= (hover || rating) ? "on" : "off"}
                                onClick={() => {
                                    setRating(index)
                                }}
                                onMouseEnter={() => setHover(index)}
                                onMouseLeave={() => setHover(rating)} >
                                <span className='star'>&#9733;</span>

                            </button>

                        )
                    })}
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" onChange={(e) => setFeedbackDescription(e.target.value)}></textarea>
                    <label for="floatingTextarea"></label>
                </div>
                <div>

                    <button type='button' className='btn btn-outline-info float-end' style={{ marginTop: '5px' }} onClick={addComment}>Add Feedback</button>
                </div>
            </div>
            <div>
                {feedbackList.map((item) => {
                    return <Feedback feedback={item} />
                })}
            </div>



        </div>)
}
export default ProductDetails