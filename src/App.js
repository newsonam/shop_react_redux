import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import  AddShop  from "./components/AddShop";
import  EditShop  from "./components/EditShop";
import  ShopList  from "./components/ShopList";

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <Routes>
          <Route path="/add-shop" element={<AddShop />}>
            
          </Route>
          <Route path="/edit-shop/:id" element={<EditShop />}>
            
          </Route>
          <Route path="/" element={<ShopList />}>
            
          </Route>
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
