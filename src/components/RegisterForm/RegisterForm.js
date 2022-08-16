import React from "react";

const RegisterForm = () => {
  return (
    <div>
      <form action="">
        <div>
          <label htmlFor="">First Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Last Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">First Line of Address</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Second Line of Address</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Town</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Postcode</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Device Type</label>
          <select name="vehicle" id="vehicle">
            <option value="">Eskate</option>
            <option value="">Ebike</option>
            <option value="">EUC</option>
            <option value="">Escooter</option>
          </select>
        </div>
        <div>
          <label htmlFor="">Make</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Model</label>
          <input type="text" />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
