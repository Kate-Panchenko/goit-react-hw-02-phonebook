import PropTypes from 'prop-types';
import { Contact, Button } from './ContactItem.styled';

export const ContactItem = ({ name, number, onClick, id }) => {
  return (
    <>
      <Contact>
        <span>{name}:</span>
        {number}
      </Contact>
      <Button id={id} type="button" onClick={onClick}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
