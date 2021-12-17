/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable */

import PropTypes from 'prop-types';

const NextIcon = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      background: '#98bf0f',
      width: 'auto',
      height: 'auto',
      padding: '10px 20px 10px 1px',
      right: '0',
      zIndex: '1',
      borderTopLeftRdius: '50%',
      borderBottomLeftRadius: '50%',
      border: '1.5px solid #98bf0f',
    }}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    aria-label="Next Icon"
    tabIndex={0}
  />
);

export default NextIcon;

NextIcon.defaultsProps = {
  className: '',
  style: {},
  onClick: () => {},
};

NextIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.func,
};
