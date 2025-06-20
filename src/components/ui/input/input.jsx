import SearchIcon from '../icons/search-icon';
import { IconWrapper, InputWrapper, StyledInput } from './input.styled';

const Input = props => {
  return (
    <InputWrapper>
      <IconWrapper>
        <SearchIcon />
      </IconWrapper>
      <StyledInput {...props} />
    </InputWrapper>
  );
};

export default Input;
