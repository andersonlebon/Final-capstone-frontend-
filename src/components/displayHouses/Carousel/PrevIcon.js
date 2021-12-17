import PropTypes from 'prop-types';

const PrevIcon = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      background: '#97bf0f',
      width: 'auto',
      height: 'auto',
      padding: '10px 20px 10px 1px',
      right: '0',
      zIndex: '2',
      borderTopRightRadius: '50%',
      borderBottomRightRadius: '50%',
      border: '1.5px solid #97bf0f',
    }}
    onClick={onClick}
    onKeyDown={onClick}
    role="button"
    aria-label="Previous Icon"
    tabIndex={0}
  />
);

export default PrevIcon;

PrevIcon.propTypes = {
  className: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  onClick: PropTypes.func,
};
PrevIcon.defaultProps = {
  className: '',
  style: {},
  onClick: () => {},
};
