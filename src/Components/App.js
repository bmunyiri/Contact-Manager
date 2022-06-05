import "./styles.css";
import React, { useState } from "react";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

export default function App() {
  const [contacts, setContacts] = useState([]);

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}
