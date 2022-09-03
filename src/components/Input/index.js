import './Input.css'

export const Input = ({ register, name, error, label, mask, ...props }) => {
  const onChange = event => {
    if (mask) {
      event.target.value = mask(event.target.value)
    }
  }

  return (
    <div className="input-container">
      {label && <label htmlFor={name}>{label}</label>}
      <input {...props} {...register(name, { onChange })} id={name} />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  )
}
