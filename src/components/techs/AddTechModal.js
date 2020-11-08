import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min";

const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = (e) => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter the firstname and lastname" });
    } else {
      console.log(firstName, lastName);
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div id="add-tech-modal" className="modal">
      <h4>New technician</h4>
      <div className="row">
        <div className="input-feild">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label htmlFor="firstName" className="active">
            First Name
          </label>
        </div>
      </div>
      <div className="row">
        <div className="input-feild">
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <label htmlFor="lastName" className="active">
            Last Name
          </label>
        </div>
      </div>
      <div className="row">
        <a href="#!" className="modal-close wave-effect blue wave-light btn">
          {" "}
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
