import "./Wrapper.css";
const Wrapper = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={`wrapper ${className}`.trim()}>{children}</div>;
};

export default Wrapper;
