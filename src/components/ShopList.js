import { shopDeleted } from "./shopsSlice";
import { useDispatch, useSelector } from "react-redux";


import { Link } from "react-router-dom";
import './style.css';

export default function ShopList() {
  const dispatch = useDispatch();


  const { entities } = useSelector((state) => state.shops);
  const loading = useSelector((state) => state.loading);

  const handleDelete = (id) => {
    dispatch(shopDeleted({ id }));
  };
console.log("entity data",entities);
  return (
    <div className="container mt-2 main-page">
      <div className="row">
        <h1 className="bg-dark text-white">SHOP APP</h1>
      </div>
      <div className="d-flex gap-3 justify-content-center my-3">
        <div className="two columns">
          <button
            onClick={() => dispatch(entities)}
            className="btn btn-primary"
          >
            Load Users
          </button>
        </div>
        <div className="two columns">
          <Link to="/add-shop">
            <button className="btn btn-primary">Add User</button>
          </Link>
        </div>
      </div>
      <div className="row table-responsive table-responsive-sm table-responsive-md table-responsive-lg">
        {loading ? (
          "Loading..."
        ) : (
          <table className="table table-striped ">
            <thead className="table-header">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Area</th>
                <th>Category</th>
                <th>Opening Date</th>
                <th>Closing Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {entities.length ?
                entities.map(({id,name,area,category,opendate,closedate}, i) => (
                  <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{area}</td>
                    <td>{category}</td>
                    <td>{opendate}</td>
                    <td>{closedate}</td>
                    <td>
                      <button className="btn btn-danger" onClick={() => handleDelete(id)}>Delete</button>
                      <Link to={`/edit-shop/${id}`}>
                        <button className="mx-2 btn btn-warning">Edit</button>
                      </Link>
                    </td>
                  </tr>
                     
                ))
                :null}
            </tbody>
         
          </table>
        )}
      </div>
    </div>
  );
}