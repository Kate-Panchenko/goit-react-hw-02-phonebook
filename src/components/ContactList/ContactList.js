import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { List, Contact } from './ContactList.styled';

export const ContactList = ({ contacts, onClick }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <Contact key={id}>
            <ContactItem
              name={name}
              number={number}
              onClick={onClick}
              id={id}
            />
          </Contact>
        );
      })}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
};
