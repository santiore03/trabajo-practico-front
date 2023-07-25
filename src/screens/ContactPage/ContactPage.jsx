import React from "react";
import { useCustomContext } from "../../ContextManager/ContextProvider";
import "./ContactPage.css";
const ContactPage = () => {
  const { formUserData, handleRegisterUser, handleChangeRegisterUser } =
    useCustomContext();

  return (
    <>


    <div className="ContactContainer">
      <div className="ContactCard">
        <div className="title">Contact</div>

        <form onSubmit={handleRegisterUser}>
<div className="lineInput">
            <label htmlFor="nombre">Full Name*</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              onChange={handleChangeRegisterUser}
              value={formUserData.nombre}
            />
</div>
<div className="lineInput">
            <label htmlFor="email">email*</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={handleChangeRegisterUser}
              value={formUserData.email}
            />
</div>
<div className="lineInput">
          <label htmlFor="mensaje">Message*</label>
          <input
            className="textInput"
            type="text"
            name="mensaje"
            id="mensaje"
            onChange={handleChangeRegisterUser}
            value={formUserData.mensaje}
            
          />
</div>
<div className="buttonAlign">
  <div>
            <button type="submit">Send</button>
            </div>
            </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default ContactPage;
