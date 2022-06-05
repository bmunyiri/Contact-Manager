import "./styles.css";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}
