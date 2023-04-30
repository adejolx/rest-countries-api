import { Link } from "react-router-dom";
import "./Card.css";

type Props = {
  index: number;
  heading: string;
  image: string;
  alt?: string;
  children: React.ReactNode;
};
const Card = ({ index, heading, image, alt, children }: Props) => {
  return (
    <li className="card">
      <div className="card-copy stack-sm">
        <h2 className="card-heading">
          <Link to={`countries/${index}`}>{heading}</Link>
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
