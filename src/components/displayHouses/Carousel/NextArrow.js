import PropTypes from 'prop-types';

const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      background: '#98bf1f',
      padding: '20px 30px 20px 0px',
      marginRight: '40px',
      marginTop: '0rem',
      right: '0',
      zIndex: '2',
      borderTopLeftRadius: '50%',
      borderBottomLeftRadius: '50%',
      border: '1.5px solid #97cf1f',
    }}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    aria-label="Next Arrow"
    tabIndex={0}
  />
);

export default NextArrow;

NextArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.func,
};

NextArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};
