import PageTitle from "./PageTitle";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import dollar from "../Assets/icons8-dollar-banknote-48.png"
import orders from "../Assets/icons8-favorite-cart-48.png"
import cube from "../Assets/icons8-sugar-cubes-48.png"
import users from "../Assets/icons8-users-48.png"
import SalesAnalytics from "./SalesAnalytics";
const Dashboard = () => {
  return <div className="w-100"> 
 <PageTitle></PageTitle>
 <div style={{backgroundColor:"#F1F3F7"}} className="p-3">
   <h2 className="text-black-50 my-2">Dashboard</h2>
   <div class="row">
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title fs-4 text-black-50">Total Sales</h5>
       <div className="d-flex justify-content-between align-items-center">
         <div><img src={dollar} alt="" /></div>
         <h4>$ 12134354</h4>
       </div>
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title fs-4 text-black-50">Total Orders</h5>
       <div className="d-flex justify-content-between align-items-center">
         <div><img src={orders} alt="" /></div>
         <h4>1316</h4>
       </div>
       
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title fs-4 text-black-50">Total Products</h5>
       <div className="d-flex justify-content-between align-items-center">
         <div><img src={cube} alt="" /></div>
         <h4>131</h4>
       </div>
       
      </div>
    </div>
  </div>
  <div class="col-sm-3">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title fs-4 text-black-50">Total Users</h5>
       <div className="d-flex justify-content-between align-items-center">
         <div><img src={users} alt="" /></div>
         <h4>386</h4>
       </div>
       
      </div>
    </div>
  </div>
</div>
 </div>

 <div><SalesAnalytics></SalesAnalytics>
 </div>
  </div>;
};

export default Dashboard;
