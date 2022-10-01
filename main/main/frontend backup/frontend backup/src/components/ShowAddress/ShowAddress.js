import ShowOrders from "../ShowOrders/ShowOrders"


const ShowAddress = (props) => {

    const { show } = props
   console.log(show)
    return (
        // <div>
        //     <div>
        //         <p>
        //             <button style={{marginTop:"10px"}} className="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
        //                 {show.city}
        //             </button >
        //         </p>
        //         <div className="collapse" id="collapseExample" >
        //             <div className="card card-body" style={{fontWeight:"bold"}}>
        //               <span style={{textShadow:"initial"}}>House no : {show.houseNo} {" "} 
        //               AddressLine 1 : {show.addressLine1}{" "}
        //               AddressLine 2 : {show.addressLine2}{" "}
        //               City: {show.city}{" "}
        //               State: {show.state}{" "}
        //               Pincode: {show.pincode}</span>
        //             </div>
        //         </div>
        //     </div>
        // </div >

        <div>
        <body data-bs-spy="scroll" data-bs-target="#navbar-example">
       <h4> {show.city}</h4>
            <div id="navbar-example">
                <ul className="nav nav-tabs" role="tablist">
                <span style={{textShadow:"initial"}}>House no : {show.houseNo} {" "} 
                      AddressLine 1 : {show.addressLine1}{" "}
                      AddressLine 2 : {show.addressLine2}{" "}
                      City: {show.city}{" "}
                      State: {show.state}{" "}
                     Pincode: {show.pincode}</span>
                
                </ul>
            </div>
            
        </body>
        {/* <div>{feedback.user.firstName}</div>
        
       <div>{feedback.feedbackDescription}</div> 
       <br/> */}
    </div>
    )
}

export default ShowAddress 