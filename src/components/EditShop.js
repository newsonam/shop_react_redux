import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { useState } from "react";
import { userUpdated } from "./shopsSlice";
import './style.css';

export default function EditUser() {
  const { pathname } = useLocation();
  const shopId = parseInt(pathname.replace("/edit-shop/", ""));

  const user = useSelector((state) =>
    state.shops.entities.find((user) => user.id === shopId)
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState(user.name);
    const [area, setArea] = useState(user.area);
    const [category, setCategory] = useState(user.category);
    const [opendate, setOpenDate] = useState(user.opendate);
    const [closedate, setCloseDate] = useState(user.closedate);
    const [error, setError] = useState(null);


    const handleName = (e) =>
    { 
      if((isNaN(e.target.value))===false){
        setError("Enter alphabetical letters in Shop Name");
        setName("");
      }
      else{
      setName(e.target.value);
      setError(null);
      }
    }
    const handleArea = (e) => setArea(e.target.value);
    const handleCategory = (e) => setCategory(e.target.value);
    const handleOpenDate = (e) => {setOpenDate(e.target.value);}
    const handleCloseDate = (e) =>{ setCloseDate(e.target.value);}

  const handleClick = () => {
    if (name && area && category && opendate && closedate) {
     
      dispatch(
        userUpdated({
          id: shopId,
          name,
          area,
          category,
          opendate,
          closedate
        })
      );
    

      setError(null);
      navigate("/");
    } else {
     
      setError("Fill in all fields");
    }
    setName("");
    setArea("");
    setCategory("");
    setOpenDate("");
    setCloseDate("");
  };

  return (
    <div className="container mt-5 mb-5 input-form">
    <div className="mb-3 row">
        <h1>Edit User</h1>
    </div>
    <div className="container text-center ">
        
        <form>
            <div className="mb-3 d-flex justify-content-center gap-2">
                <label htmlFor="nameInput" className="form-label w-25">Shop Name</label>
                <input
                    className="form-control w-25 nameinput"
                    type="text"
                    placeholder="enter shop name"
                    id="nameInput"
                    onChange={handleName}
                    value={name}
                    required
                />
                
            </div>
            <div  className="mb-3 d-flex justify-content-center gap-2">
                <label htmlFor="areaInput" className="form-label w-25">Area</label>
                <select className="form-select w-25 areainput" id="areaInput" aria-label="Default select example" value={area} onChange={handleArea} required>
                    <option selected>Open this select menu</option>
                    <option value="Thane">Thane</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Nashik">Nashik</option>
                    <option value="Nagpur">Nagpur</option>
                    <option value="Solapur">Solapur</option>
                    <option value="Ahmednagar">Ahmednagar</option>

                    
                </select>
            </div>

            <div  className="mb-3 d-flex justify-content-center gap-2">
                <label htmlFor="categoryInput" className="form-label w-25">Category</label>
                <select className="form-select w-25 areainput" aria-label="Default select example" id="categoryInput" value={category} onChange={handleCategory} required>
                    <option selected>Open this select menu</option>
                    <option value="Grocery">Grocery</option>
                    <option value="Butcher">Butcher</option>
                    <option value="Bakery">Bakery</option>
                    <option value="Chemist">Chemist</option>
                    <option value="Stationery">Stationery</option>
                </select>

            </div>

            <div className="mb-3 d-flex justify-content-center gap-2">
                <label htmlFor="openInput" className="form-label w-25">Opening Date</label>
                <input type="date" id="openInput" className="form-control w-25 dateinput" value={opendate} onChange={handleOpenDate}  required />
            </div>
            <div className="mb-3 d-flex justify-content-center gap-2">
                <label htmlFor="closeInput" className="form-label w-25" >Closing Date</label>
                <input type="date" id="closeInput" className="form-control w-25 dateinput" value={closedate} onChange={handleCloseDate}  required />
            </div>
            {error ?<h5 className="text-danger">{error}</h5>:null}

            <div className="container m-0 w-100 pb-5">
            <button onClick={handleClick} className=" btn btn-primary">
                Edit User
            </button>
            </div>
            </form>
        </div>
 
</div>
  );
}