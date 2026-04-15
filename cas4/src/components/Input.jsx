
export const Input = ({ type, placeholder, value, onChange, name,setToggle }) => {

    return (
        <p>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
            />
            {name === 'togglePass' && 
            <button type='button' onClick={setToggle} className="eye-button">
                <i className={type === "password" ? 'fa fa-eye-slash' :'fa fa-eye'}></i>
            </button>}
        </p>
    )
}