import "./style.scss";

// eslint-disable-next-line react/prop-types
export const CustomButton = ({ onClick, children }) => {
  return (
    <div className="custom-button-container" onClick={onClick}>
      {children}
    </div>
  );
};
