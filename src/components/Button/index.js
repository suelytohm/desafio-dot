import './Button.css'

export const Button = ({ children, ...props }) => {
  return (
    <button className="custom-button" {...props}>
      {children}
    </button>
  )
}
