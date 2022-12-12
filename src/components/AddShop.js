import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import { useState } from "react";
import { userAdded } from "./shopsSlice";
import './style.css';

export default function AddShop() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [area, setArea] = useState("");
    const [category, setCategory] = useState("");
    const [opendate, setOpenDate] = useState("");
    const [closedate, setCloseDate] = useState("");
    const [error, setError] = useState(null);

    const handleName = (e) => {
        if ((isNaN(e.target.value)) === false) {
            setError("Enter alphabetical letters in Shop Name");
            setName("");
        }
        else {
            setName(e.target.value);
            setError(null);
        }
    }

    const handleArea = (e) => setArea(e.target.value);
    const handleOpenDate = (e) => {

        setOpenDate(e.target.value);
    }
    const handleCloseDate = (e) => {
        setCloseDate(e.target.value);
    }



    const handleCategory = (e) => setCategory(e.target.value);

    const usersAmount = useSelector((state) => state.shops.entities.length);

    const handleClick = () => {
        if (name && area && category && opendate && closedate) {
            dispatch(
                userAdded({
                    id: usersAmount + 1,
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
            if (isNaN(name) === false) {
                setError("Enter alphabetical letters in Shop Name");
            }
            setError("Fill in all fields");
        }

        setName("");
        setArea("");
        setCategory("");
        setOpenDate("");
        setCloseDate("");

    };

    return (
        <div className="main-container">

            <div className="container text-center input-form mt-5 ">

                <form className="w-100">
                    <div className="mb-3 row">
                        <h1>Add User</h1>
                    </div>
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
                    <div className="mb-3 d-flex justify-content-center gap-2">
                        <label htmlFor="areaInput" className="form-label w-25">Area</label>
                        <select className="form-select w-25 areainput" id="areaInput" aria-label="Default select example" value={area} onChange={handleArea} required>
                            <option selected>Open select menu</option>
                            <option value="Thane">Thane</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Nashik">Nashik</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Solapur">Solapur</option>
                            <option value="Ahmednagar">Ahmednagar</option>


                        </select>
                    </div>

                    <div className="mb-3 d-flex justify-content-center gap-2">
                        <label htmlFor="categoryInput" className="form-label w-25">Category</label>
                        <select className="form-select w-25 categoryinput" aria-label="Default select example" id="categoryInput" value={category} onChange={handleCategory} required>
                            <option selected>Open select menu</option>
                            <option value="Grocery">Grocery</option>
                            <option value="Butcher">Butcher</option>
                            <option value="Bakery">Bakery</option>
                            <option value="Chemist">Chemist</option>
                            <option value="Stationery">Stationery</option>
                        </select>

                    </div>

                    <div className="mb-3 d-flex justify-content-center gap-2">
                        <label htmlFor="openInput" className="form-label w-25 ">Opening Date</label>
                        <input type="date" id="openInput" className="w-25 dateinput" value={opendate} onChange={handleOpenDate} required />
                        {/* <DatePicker selected={opendate} dateFormat="yyyy-mm-dd" onChange={date => setOpenDate(date)} className="w-25" /> */}
                    </div>
                    <div className="mb-3 d-flex justify-content-center gap-2">
                        <label htmlFor="closeInput" className="form-label w-25 " >Closing Date</label>
                        <input type="date" id="closeInput" className="w-25 dateinput" value={closedate} onChange={handleCloseDate} required />
                        {/* <DatePicker selected={closedate} onChange={date => setCloseDate(date)} className="w-25" /> */}
                    </div>
                    {error ? <h5 className="text-danger">{error}</h5> : null}
                    <div className="container m-0 w-100 pb-5">
                        <button onClick={handleClick} className=" btn btn-primary">
                            Add User
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
}

