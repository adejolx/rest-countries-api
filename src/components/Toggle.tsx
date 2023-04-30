import "./Toggle.css";

const Toggle = ({
  ...otherProps
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <>
      <button type="button" className="theme-toggle" {...otherProps}>
        <i className="fa-solid fa-lg fa-moon"></i>
        <span>Dark Mode</span>
      </button>
    </>
  );
};

export default Toggle;
