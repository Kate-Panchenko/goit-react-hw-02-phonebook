import PropTypes from 'prop-types';
import { FilterForm, Label, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterForm>
      <Label htmlFor="search">Find contacts by name</Label>
      <Input type="text" name="search" value={value} onChange={onChange} />
    </FilterForm>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
