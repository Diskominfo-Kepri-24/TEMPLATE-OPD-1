import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Shortcut({ iconSrc, label, link }) {
  return (
    <Link to={link} className="flex flex-col items-center">
      <div className="flex items-center justify-center h-14 w-14 bg-white bg-opacity-30 rounded-full backdrop-blur-md">
        <img src={iconSrc} alt={label} className="h-8 w-8" />
      </div>
      <span className="mt-2 text-white text-sm">{label}</span>
    </Link>
  );
}

Shortcut.propTypes = {
  iconSrc: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Shortcut;
