const InputField = ({ type, label, id, required, placeholder }) => {
    return (
      <div className="col-12">
        <label htmlFor={id} className="form-label">{label}</label>
        <div className="input-group has-validation">
          {type === 'text' && <span className="input-group-text" id="inputGroupPrepend">@</span>}
          <input
            type={type}
            className="form-control"
            id={id}
            required={required}
            placeholder={placeholder}
          />
          <div className="invalid-feedback">Please enter your {label.toLowerCase()}.</div>
        </div>
      </div>
    );
  };
  
  export default InputField;