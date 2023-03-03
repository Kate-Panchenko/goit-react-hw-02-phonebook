import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Contacts } from "./Contacts/Contacts";
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
  contacts: [],
  name: '',
  number: '',
  }

  addContact = contact => {
    if (this.state.contacts.find(user => user.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
    } else {
      const newContact = { ...contact };
      newContact.id = nanoid();
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact]
        }
      });
    };
  }

  render() {
    return (
      <Layout>
        <GlobalStyle />
        <ContactForm onSubmit={this.addContact} />
        <Contacts contacts={this.state.contacts} />
        {/* {this.state.contacts[0]
          ? <Contacts contact={this.state.contacts} />
          : <p>There’s nothing here yet...</p>} */}
        
    </Layout>
    )
  }
}
