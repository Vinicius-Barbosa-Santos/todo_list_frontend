import "./style.scss";

// eslint-disable-next-line react/prop-types
export const CustomInput = ({ label, value, onChange }) => {
    return (
        <div className="custom-input-container">
            <input
                type="text"
                className="custom-input"
                onChange={(e) => onChange(e)}
            />

            {label ? (
                <label
                    className={`${
                        // eslint-disable-next-line react/prop-types
                        value.length > 0 ? "shrink" : ""
                    } custom-input-label`}
                >
                    {label}
                </label>
            ) : null}
        </div>
    );
};