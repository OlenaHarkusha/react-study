import { Title } from './PageTitle.styled';
import PropTypes from 'prop-types';

export const PageTitle = ({ text }) => {
  return <Title>{text}</Title>;
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
