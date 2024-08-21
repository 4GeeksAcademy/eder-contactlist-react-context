import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import { useEffect } from "react";
import { useRef } from "react";

export function ContactList() {
  const { store, actions } = useContext(Context);
  const contactId = useRef(null);
  const stageEdit = useRef({});

  function checkStageEdit() {
    for (const [key, value] of Object.entries(stageEdit.current)) {
      let trimedValue = value.trim();
      console.log("trimmed", trimedValue);
      if ((trimedValue = "")) {
        delete stageEdit.current[key];
      }
      console.log(stageEdit.current);
    }
  }
  //console.log(useContext(Context));
  //console.log(store.contacts);
  useEffect(() => {
    actions.loadSomeData();
  }, []);

  const renderCards = store.contacts.map((value, index) => {
    return (
      <div className="card mb-3 mt-5" style={{ maxHeight: "240px" }}>
        <div className="row g-0" style={{ maxHeight: "240px" }}>
          <div
            className="col-md-3 col-lg-3 text-center"
            style={{ maxHeight: "240px" }}
          >
            <img
              src="https://images.pexels.com/photos/20359974/pexels-photo-20359974/free-photo-of-mujer-modelo-maqueta-retrato.jpeg"
              className="img-fluid py-lg-3 px-0 mx-0"
              style={{
                width: "150px",
                height: "200px",
                borderRadius: "50%",
              }}
              alt="..."
            />
          </div>
          <div className="col-lg-7 ps-lg-3" style={{ maxHeight: "240px" }}>
            <div className="card-body h-100 align-content-center ">
              <h5 className="card-title">{value.name}</h5>
              <div className="d-flex my-lg-3">
                <i className="fa-solid fa-location-dot lh-base"></i>
                <p className="card-text ms-lg-4">{value.address}</p>
              </div>
              <div className="d-flex  my-lg-3">
                <i className="fa-solid fa-phone-flip lh-base"></i>
                <p className="card-text ms-lg-4">{value.phone}</p>
              </div>
              <div className="d-flex  my-lg-3">
                <i className="fa-solid fa-envelope lh-base"></i>
                <p className="card-text ms-lg-4">
                  <small>{value.email}</small>
                </p>
              </div>
            </div>
          </div>
          <div
            className=" row col text-center justify-content-around"
            style={{ maxHeight: "240px" }}
          >
            <div className="col pt-lg-4">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#modalEdit${index}`}
                /*   onClick={(e) => {
                  contactId.current = e.target.childNodes[0].id;
                }} */
              >
                <i className="  fa-solid fa-pen"></i>
              </button>
            </div>
            <div className="col pt-lg-4">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target={`#exampleModal${index}`}
                onClick={(e) => {
                  contactId.current = e.target.childNodes[0].id;
                }}
              >
                <i
                  className=" fa-solid fa-trash"
                  id={value.id}
                  onClick={(e) => {
                    e.stopPropagation();
                    contactId.current = e.target.id;
                  }}
                ></i>
              </button>
            </div>
          </div>
          {/* <!-- Modal Delete --> */}
          <div
            className="modal fade"
            id={`exampleModal${index}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Confirmation
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  Are you sure you want to delete this contact?
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      actions.deleteSomeData(contactId.current),
                        actions.loadSomeData();
                    }}
                  >
                    Delete!
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Modal Edit */}
          <div
            className="modal fade"
            id={`modalEdit${index}`}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  {/* Inputs */}
                  <div className="col-12">
                    <label
                      className="visually-hidden"
                      htmlFor="inlineFormInputGroupUsername"
                    >
                      Name
                    </label>
                    <div className="input-group">
                      <div
                        className="input-group-text"
                        htmlFor="inlineFormInputGroupUsername"
                      >
                        <i className="fa-solid fa-user lh-base"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername"
                        placeholder="Edit your Name here"
                        onChange={(e) => {
                          stageEdit.current.name = e.target.value;
                        }}
                      />
                    </div>
                  </div>
                  {/* End Input */}
                  <div className="col-12">
                    <label
                      className="visually-hidden"
                      htmlFor="inlineFormInputGroupUsername"
                    >
                      Address
                    </label>
                    <div className="input-group">
                      <div
                        className="input-group-text"
                        htmlFor="inlineFormInputGroupUsername"
                      >
                        <i className="fa-solid fa-location-dot lh-base fa-lg"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername"
                        placeholder="Edit your Address here"
                        onChange={(e) => {
                          stageEdit.current.address = e.target.value;
                        }}
                      />
                    </div>
                  </div>
                  {/* End Input */}
                  <div className="col-12">
                    <label
                      className="visually-hidden"
                      htmlFor="inlineFormInputGroupUsername"
                    >
                      Phone
                    </label>
                    <div className="input-group">
                      <div
                        className="input-group-text"
                        htmlFor="inlineFormInputGroupUsername"
                      >
                        <i className="fa-solid fa-phone-flip lh-base"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername"
                        placeholder="Edit your Phone here"
                        onChange={(e) => {
                          stageEdit.current.phone = e.target.value;
                        }}
                      />
                    </div>
                  </div>
                  {/* End Input */}
                  <div className="col-12">
                    <label
                      className="visually-hidden"
                      htmlFor="inlineFormInputGroupUsername"
                    >
                      Email
                    </label>
                    <div className="input-group">
                      <div
                        className="input-group-text"
                        htmlFor="inlineFormInputGroupUsername"
                      >
                        <i className="fa-solid fa-envelope lh-base"></i>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroupUsername"
                        placeholder="Edit your Email here"
                        onChange={(e) => {
                          stageEdit.current.email = e.target.value;
                        }}
                      />
                    </div>
                  </div>
                  {/* End Input */}
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    id={value.id}
                    data-bs-dismiss="modal"
                    onClick={(e) => {
                      checkStageEdit();
                      actions.updateSomeData(e.target.id, stageEdit.current);
                      actions.loadSomeData();
                    }}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return renderCards;
}
