
// import { Link } from 'react-router-dom';
import './App.css';

export default function BeanieBaby({ title, image }) { // Add id when adding Link
  return (
    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    // <Link to={`/beanies/${id}`}>
    <div className="beanie-baby">
      <h3>{title}</h3>
      <img className="beanie-img" src={image} />
    </div>
    // </Link>  
  );
}

// Make the Link Later