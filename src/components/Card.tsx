import { Link } from "react-router-dom";
import "./Card.css";

type Props = {
  heading: string;
  image: string;
  alt?: string;
  link: string;
  children: React.ReactNode;
};
const Card = ({ heading, image, alt, link, children }: Props) => {
  return (
    <li className="card">
      <div className="card-copy stack-sm">
        <h2 className="card-heading">
          <Link to={`countries/${link}`}>{heading}</Link>
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
