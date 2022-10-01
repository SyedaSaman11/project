import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Cart from "./pages/Cart";
import FAQ from "./pages/FAQ";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import ProductDetails from "./pages/ProductDetails";
import AddProduct from "./pages/AddProduct";
import AddCategoryandsubCategory from "./pages/AddCategoryandsubcategory";
import AddAddress from "./pages/Address";
import PUploadedbyUser from "./pages/PUploadedbyUser";
import CategoryHome from "./pages/CategoryHome";
import SortHome from "./components/SortHome";
import AddShowAddress from "./pages/AddShowAddress/AddShowAddress";
import AddCompany from "./pages/AddCompany";
import Header from "../src/components/Header/Header"
import Menubar from "./components/Menubar/Menubar"
import Order from "./pages/Order";
import UpdateProduct from "./pages/UpdateProduct";
import ShowOrders from "./components/ShowOrders/ShowOrders";
import Users from "./pages/Users/index"
import AllOrder from "./pages/AllOrders";
import ShowCompanyDetails from "./components/ShowCompanyDetails";
import OrderSummary from "./pages/OrderSummary";
import Footer from "../src/components/Footer/Footer"
import {Route,BrowserRouter,Routes,Link} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import ResetPassword from "./pages/ResetPassword/ResetPassword";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >
     <BrowserRouter>
     <Header></Header>
     <Menubar></Menubar>
     <div className="container">
     <Routes>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/addproduct" element={<AddProduct/>}/>
      <Route path="/addcatesubcate" element={<AddCategoryandsubCategory/>}/>
      <Route path="/homepage" element={<HomePage/>}/>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/profile" element={<ProfilePage/>}/>
      <Route path="/productdetails" element={<ProductDetails/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/addcompany" element={<AddCompany/>}/>
      <Route path="/uploadedproductbyuser" element={<PUploadedbyUser/>}/>
      <Route path="/showcompanydetails" element={<ShowCompanyDetails/>}/>
      <Route path="/updateproduct" element={<UpdateProduct/>}/>
      <Route path="/categoryhome" element={<CategoryHome/>}/>
      <Route path="/sorthome" element={<SortHome/>}/>
      <Route path="/resetpassword" element={<ResetPassword/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/allorder" element={<AllOrder/>}/>
      <Route path="/ordersummary" element={<OrderSummary/>}/>
      <Route path="/addaddress" element={<AddAddress/>}/>
      <Route path="/addshowaddress" element={<AddShowAddress/>}/>
     </Routes>
     </div>
     </BrowserRouter>
     <ToastContainer  theme="colored" />
     <Footer></Footer>
    </div>
  );
}

export default App;
