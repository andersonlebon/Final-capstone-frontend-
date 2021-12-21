import PropTypes from 'prop-types';

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      background: '#97cf1f',
      padding: '20px 0px 20px 30px',
      marginLeft: '60px',
      marginTop: '0rem',
      right: '0',
      zIndex: '2',
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      border: '1px solid #97cf1f',
    }}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    aria-label="Previous Arrow"
    tabIndex={0}
  />
);

export default PrevArrow;

PrevArrow.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.func,
};
PrevArrow.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};
