import PropTypes from 'prop-types';

export const ContactItem = ({ name, number }) => {
  return (
    <>
      <div>
        <span>{name}</span>
        {number}
      </div>
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
