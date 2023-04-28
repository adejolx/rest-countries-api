import "./Card.css";

type Props = {
  heading: string;
  image: string;
  alt?: string;
  children: React.ReactNode;
};
const Card = ({ heading, image, alt, children }: Props) => {
  return (
    <li className="card card--clickable">
      <div className="card-copy stack-sm">
        <h2 className="card-heading">
          <a>{heading}</a>
        </h2>
        {children}
      </div>
      <div className="image">
        <img src={image} alt={alt || ""} />
      </div>
    </li>
  );
};
export default Card;
