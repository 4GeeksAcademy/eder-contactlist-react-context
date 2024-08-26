import React from "react";
import { ContactList } from "../component/contactList.jsx";
import { Link } from "react-router-dom";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export function Home() {
  //const navigate = useNavigate();
  return (
    <div className=" mx-lg-5 px-lg-5">
      <div className="mx-lg-5 px-lg-5">
        <div className="mx-lg-5 px-lg-5">
          <div className="text-center py-3 text-lg-end mx-lg-5">
            <button type="button " className="btn btn-success mt-lg-3">
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/new-contact"
              >
                Add new contact
              </Link>
            </button>
          </div>

          <div className="container-fluid px-lg-5">
            <ContactList />
          </div>
        </div>
      </div>
    </div>
  );
}
