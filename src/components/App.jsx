import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Contacts } from "./Contacts/Contacts";
import { nanoid } from 'nanoid';
import { Filter } from "./Contacts/Filter/Filter";

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  name: '',
  number: '',
  filter: '',
  }

  contactFilter = event => {
    this.setState({ filter: event.target.value })
  };

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
    const lowerCaseFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter));
    return (
      <Layout>
        <GlobalStyle />
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={ this.state.filter} onChange={this.contactFilter} />
        <Contacts contacts={filteredContacts} />
        {/* {this.state.contacts[0]
          ? <Contacts contact={this.state.contacts} />
          : <p>There’s nothing here yet...</p>} */}
        
    </Layout>
    )
  }
}
