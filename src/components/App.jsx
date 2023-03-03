import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';
import { Title } from "./ContactForm/ContactForm.styled";
import { ThemeProvider } from 'styled-components';
import { theme } from './Layout';

export class App extends Component {
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
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

  deleteContact = evt => {
    const contactId = evt.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  }

  render() {
    const lowerCaseFilter = this.state.filter.toLowerCase();
    const filteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCaseFilter));
    return (
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyle />
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.addContact} />
          <Title>Contacts</Title>
          <Filter value={ this.state.filter} onChange={this.contactFilter} />
          <ContactList contacts={filteredContacts} onClick={this.deleteContact} />
        </Layout>
      </ThemeProvider> 
    )
  }
}
