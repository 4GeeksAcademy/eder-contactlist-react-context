import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Context } from "../store/appContext";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function NewContact() {
  const navigate = useNavigate();
  const { actions } = useContext(Context);
  const contactInfo = useRef({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  function handleNavigate() {
    navigate("/");
  }
  /*   useEffect(() => {
    
  }, []); */

  return (
    <div className="mx-lg-5 px-lg-5">
      <div className="mx-lg-5 px-lg-5">
        <div className="mx-lg-5 px-lg-5">
          <div className="container-fluid px-lg-5 mt-lg-3">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h1> Add new contact</h1>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="Full Name"
                    onChange={(e) => {
                      contactInfo.current.name = e.target.value;
                      console.log(contactInfo.current);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputEmail"
                    placeholder="Enter Email"
                    onChange={(e) => {
                      contactInfo.current.email = e.target.value;
                      console.log(contactInfo.current);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor="inputPhone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputPhone"
                    placeholder="Enter Phone"
                    onChange={(e) => {
                      contactInfo.current.phone = e.target.value;
                      console.log(contactInfo.current);
                    }}
                  />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-3">
                  <label htmlFor="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="Enter Address"
                    onChange={(e) => {
                      contactInfo.current.address = e.target.value;
                      console.log(contactInfo.current);
                    }}
                  />
                </div>
              </div>
              <div className="d-grid gap-2">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => {
                    actions.sendSomeData(contactInfo.current);
                    handleNavigate();
                  }}
                >
                  Save
                </button>
              </div>
              <div className="col-12 pt-lg-1">
                <Link to="/"> or get back to contacts</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
