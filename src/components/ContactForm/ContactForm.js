// import PropTypes from 'prop-types';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../Layout';
// import { nanoid } from 'nanoid';
import { Formik, Field, Form } from 'formik';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, {resetForm}) => {
    onSubmit(values);
    resetForm();
  };
  return (
    <Formik
      initialValues={{
        name: '',
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};
