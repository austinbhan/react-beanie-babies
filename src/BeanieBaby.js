import { Link } from 'react-router-dom';

export default function BeanieBaby({ id, title, link, image }) {
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    <Link to={`/beanies/${id}`}>
      <div className="beanie-baby">
        <h3>{title}</h3>
        <p>{link}</p>
        <img src={image} />
      </div>
    </Link>  
  );
}
