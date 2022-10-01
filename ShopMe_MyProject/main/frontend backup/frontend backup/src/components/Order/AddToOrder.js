import OrderItem from './OrderItem'

const AddToOrder = (props) => {

    const { order } = props
    console.log(order)

    return (
        <div >
            { 
                Object.values(order).map((item) => {
                    return <OrderItem product = { item }/> 
                })
            }
        </div>
    )
}

export default AddToOrder;