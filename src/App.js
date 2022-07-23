import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Card from "./components/Card";
import Category from "./components/Categories/Category";
import ProductList from "./components/Product-List/ProductList";
import Table from "./components/QR_History/Table";
import Sidebar from "./components/Sidebar";
import StoreList from "./components/Store_List/StoreList";
import UserLocation from "./components/User'sLocation/UserLocation";


function App() {
  return (
    <Router>
      <div>
        <div className="flex">
          <Sidebar />

          {/* Router path */}
          <Routes>
            <Route exact path="/" element={ <Card />} />
            <Route path="/history" element={<Table/> } />
            <Route path="/user-location" element={<UserLocation/> } />
            <Route path="/product-list" element={<ProductList/> } />
            <Route path="/store-list" element={<StoreList/> } />
            <Route path="/categories" element={<Category/> } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
