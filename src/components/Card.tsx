import "./Card.css";

type Props = {
  heading: string;
  image: string;
  alt?: string;
  children: React.ReactNode;
};
const Card = ({ heading, image, alt, children }: Props) => {
  return (
    <article className="card card--clickable">
      <h2 className="card-heading">{heading}</h2>
      <div className="image-container">
        <img src={image} alt={alt || ""} />
      </div>
      <div className="card-copy stack-sm">{children}</div>
    </article>
  );
};
export default Card;
