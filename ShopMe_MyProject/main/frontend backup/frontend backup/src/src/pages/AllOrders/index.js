import { useEffect, useState } from "react"
import { toast } from 'react-toastify';
import  axios  from 'axios';
import  {URL}  from "../../config";
import Orders from "../../components/AllOrder/Orders";
import "./index.css"

const AllOrder = () =>{

    const  id  = sessionStorage['id'];
    console.log(id)
    const[allOrder,SetAllOrder] =useState([])
    
    console.log("im nside updaye")

    const displayOrders =() =>{
        
    // url to call the api
    const url = `${URL}/order/orderList/${id}`

    // http method: post
    // body: contains the data to be sent to the API
    axios.get(url).then((response) => {
        // get the data from the response
        const result = response.data
        
        if (result['status'] == 'success') {
            console.log(result['data'])
            SetAllOrder(result['data'])
            
            toast.success('Displaying all orders')
           
            
        } else {
            toast.error(result['error'])
        }
    })

    }


    useEffect(()=>{

        displayOrders()
    },[])



    return (
            <div >
                <h2 style={{marginBottom:"15px",color:"darkturquoise"}}>Your Order List is here</h2>
           
        <div>
            {Object.values(allOrder).map((item)=>{
                return <Orders order = {item}/>
            })}
        </div>
        </div>
    )
}

export default AllOrder