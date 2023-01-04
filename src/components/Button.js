import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn">{text}</button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func,
}

export default Button