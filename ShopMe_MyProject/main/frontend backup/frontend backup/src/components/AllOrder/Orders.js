import  './order.css'


const Orders = (props) =>{

    const { order } = props

    console.log(order)

    return (
        <div className="row" >




        <section class="vh-100 gradient-custom-2">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-10 col-lg-8 col-xl-6">
        <div class="card card-stepper" style={{borderRadius:"16px"}}>
          <div class="card-header p-4">
            <div class="d-flex justify-content-between align-items-center">
              <div>
                <p class="text-muted mb-2"> Order ID <span class="fw-bold text-body">{order.id}</span></p>
                <p class="text-muted mb-0"> Place On <span class="fw-bold text-body">{order.createdDate}</span> </p>
              </div>
              <div>
                
              </div>
            </div>
          </div>
          <div class="card-body p-4">
            <div class="d-flex flex-row mb-4 pb-2">
              <div class="flex-fill">
                <h5 class="bold">{order.product.productName}</h5>
                <p class="text-muted">{order.quantity}</p>
                <h4 class="mb-3"> ₹{order.product.productFinalPrice}<span class="small text-muted"> via (COD) </span></h4>
                
              </div>
              <div>
                <img class="align-self-center img-fluid" src={order.product.productImage} width="250"/>
              </div>
            </div>
            <ul id="progressbar-1" class="mx-0 mt-0 mb-5 px-0 pt-0 pb-4">
              <li class="step0 active" id="step1"><span style={{marginLeft:"22px",marginTop:"12px"}}>PLACED</span></li>
              <li class="step0 active text-center" id="step2"><span>SHIPPED</span></li>
              <li class="step0 active text-center" id="step3"><span style={{marginRight:"22px"}}>DELIVERED</span></li>
            </ul>
          </div>
          <div class="card-footer p-4">
        
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>


















    )
}

export default Orders