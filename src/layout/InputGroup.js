
const InputGroup = (props) => {

    const hasErrors = props.hasErrors ? props.hasErrors : ""
    

    return (
        <div className={`input-group ${hasErrors}`}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id} 
                type={props.type}
                className="form-input"
                placeholder={props.placeholder == null ? "" : props.placeholder}
                value={props.value}
                onChange={props.onChange}             
            />
            <small></small>
        </div>
    )
}

export default InputGroup