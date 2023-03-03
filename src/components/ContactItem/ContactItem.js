import PropTypes from 'prop-types';

export const ContactItem = ({ name, number, onClick, id }) => {
  return (
    <>
      <div>
        <span>{name}</span>
        {number}
      </div>
      <button id={id} type="button" onClick={onClick}>
        Delete
      </button>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
