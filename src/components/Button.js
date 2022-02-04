import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
  const btnStyle = {
    backgroundColor: color
  }
  return (
    <button onClick={onClick} style={btnStyle} className='btn'>{text}</button>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
