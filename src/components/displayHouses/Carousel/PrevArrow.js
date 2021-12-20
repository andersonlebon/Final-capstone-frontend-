import PropTypes from 'prop-types';

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      background: '#97cf1f',
      padding: '25px 2px 25px 30px',
      marginLeft: '25px',
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
