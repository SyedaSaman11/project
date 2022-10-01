import './feedback.css'

const Feedback = (props) => {

    const { feedback } = props
    console.log(feedback)
   
     

    return (
        <div>
            <body data-bs-spy="scroll" data-bs-target="#navbar-example">
           <h4 > {feedback.user.firstName}</h4>
                <div id="navbar-example">
                    <ul className="nav nav-tabs" role="tablist">
                        
                    {feedback.feedbackDescription}
                    </ul>
                </div>
                ...
            </body>
          
        </div>
    )
}

export default Feedback