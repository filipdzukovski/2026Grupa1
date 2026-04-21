
export const Input = ({ type, placeholder, value, onChange, name, setToggleText,setTogglePassword, renderTextArea,changeInput }) => {

    return (
        <p>
            {renderTextArea ?
                <textarea
                    value={value}
                    onChange={onChange}
                    rows={8}
                    cols={20}
                />

                : <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    name={name}
                />}
            {name === 'togglePass' &&
                <button type='button'
                onMouseDown={setTogglePassword}
                onMouseUp={setToggleText}
                onMouseLeave={setToggleText}
                 className="eye-button">
                    <i className={type === "password" ? 'fa fa-eye-slash' : 'fa fa-eye'}></i>
                </button>}
           {name ==='comment'  && <button type='button' onClick={changeInput} className="eye-button" >
                <i className={renderTextArea ? "fa fa-comment-o" : 'fa fa-comments-o'}></i>
            </button>}
        </p>
    )
}