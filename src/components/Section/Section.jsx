
import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css' 

const Section = ({ title, children }) => (
  <section className={css.section}>
    <h2 className={css.section__title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};

export default Section;