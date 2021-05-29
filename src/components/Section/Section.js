import { Fragment } from 'react';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      {children}
    </Fragment>
  );
};
export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
