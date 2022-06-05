import React from "react";

const ContactCard = (props) => {
  //Destructuring our props
  const { id, name, email } = props.contact;

  return (
    <div className="item">
      <div className="content">
        <div className="header">{name}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        //inline styling of the trash cans to red color
        style={{ color: "red", marginTop: "10px" }}
      ></i>
    </div>
  );
};
export default ContactCard;
