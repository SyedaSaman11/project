import axios from "axios"
import { toast } from "react-toastify"
import { useEffect, useState } from "react"
import { URL } from "../../config"
import AddToSummary from "../../components/OrderSummary/AddToSummary"
import { useNavigate } from 'react-router';
import Address from "../../components/Address/Address";

const OrderSummary = () => {

    const userId = sessionStorage['id']
    const [itemOrder, setItemOrder] = useState([])
    const [totalProductQty, setTotalProductQty] = useState(0)
    const [selectedAddress, setSelectedAddress] = useState([])
    const [walleteBalance, setWalleteBalance] = useState(0)
    const [totalCost, setTotalCost] = useState(0)

    const OderItemDetails = () => {

        const url = `${URL}/cart/${userId}`

        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setItemOrder(result['data'])
                console.log(result)
            }
            else {
                toast.error(result['error'])
            }
        })
        
    }
    const TotalProductInCart = () => {
        const url = `${URL}/cart/totalProducts/${userId}`

        axios.get(url).then((response) => {
            const result = response.data;
            if(result['status'] == 'success'){
                setTotalProductQty(result['data'])
            } else {
                toast.error(result['error'])
            }
        })
    }
    const DisplayAddress = () => {
        const addressId = sessionStorage['selectedAddressId']

        const url = `${URL}/user/address/byaddressId/${addressId}`

        axios.get(url).then((response) => {
            const result = response.data
            if(result['status'] == 'success'){
                setSelectedAddress(result['data'])
                console.log(result['data'])
            } else {
                toast.error(result['error'])
            }
        })

    }
    const checkout = () =>{

        if(walleteBalance >= totalCost) {

            const url = `${URL}/cart/checkout/${userId}`

            axios.delete(url).then((response) => {
                const result = response.data
                console.log(result)
                if (result['status'] == "success") {
                    toast.success("Oder Successful !!!")
                    console.log(result['data'])
                } else {
                    toast.error(result['error'])
                }
            })
        } else {
            toast.error("insufficent Balance.")
            toast.warning("Pleace Check you Balance befor Order")
        }
    }
    useEffect(() => {
        OderItemDetails();
        TotalProductInCart();
        DisplayAddress();
        checkout();
    }, [])

    return (
    <div>
        <div class="container">
            <div className="row border">
                <div className="col-2"></div>
                <div className="col ">
                <div>
                <h4 className="label-control text-center m-3 text-secondary fw-bold">
                    Order Details
                </h4>
            </div>

            <div className="row">
                <div className="container shadow-m bg-body rounded">  
                    <h6>Product Details</h6> 
                    <div class="border" >
                    {
                        Object.values(itemOrder).map((item) => {
                        return <AddToSummary order={item} />
                    })}
                    </div>
                </div>    
            </div> 

            <div>
                <div className="d-grid gap-2" style={{paddingTop : '10px'}}>
                    <h6 className="label-control text-secondary">
                        Total Product :
                        <span >
                        {' '}{totalProductQty}
                        </span>
                    </h6>
                </div>
            </div> 

            <div className="d-grid gap-2">
                <h6 className="label-control text-secondary ">
                    Paid Amount : 
                    <span >
                    {' '}{itemOrder.totalCost}
                    </span>
                </h6>
            </div>

            <div className="d-grid gap-2" style={{paddingTop : '10px'}}>
                <div>
                    Delivey Address
                </div>
                <div>
                    <div className="border">
                        <div className="row ">
                            <h6>{selectedAddress.houseNo}, {' '}
                            {selectedAddress.addressLine1}, {' '}
                            {selectedAddress.addressLine2}, {' '}
                            {selectedAddress.city},{' '}
                            {selectedAddress.state} - 
                            {selectedAddress.pincode}</h6>
                        </div>
                    </div>
                </div>
            </div>

            <div className="">
                <h3 className="label-control text-center m-3 text-success fw-bold">
                    Thank You !!!
                </h3>
            </div>
                </div>
                <div className="col-2"></div>
            </div>
        </div>  
    </div>
    )
}

export default OrderSummary;