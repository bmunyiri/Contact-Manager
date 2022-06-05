import "./styles.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

export default function App() {
  const contacts = [
    {
      id: "1",
      name: "paul",
      email: "paul@gmail.com"
    },
    {
      id: "1",
      name: "mary",
      email: "mary@gmail.com"
    }
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}
