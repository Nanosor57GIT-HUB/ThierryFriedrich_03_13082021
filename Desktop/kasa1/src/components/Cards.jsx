
import {  NavLink } from "react-router-dom";


const Cards = (props) => {

const cardsLodge = props.blogs 

  return (
    <div className="cardsContainer">
      {cardsLodge.map((blog) => (
        <NavLink
          to={`/accomodations/${blog.id}`}
          className="linkCard"
          key={blog.id}
        >
          <div className="backgroundCard"></div>

          <img
            src={blog.cover}
            alt={blog.cover}
            className="imgCard"
          />

          <div className="maskCard"></div>
          <h3 className="titleLodging">{blog.title}</h3>
        </NavLink>
      ))}
    </div>
  );
};

export default Cards;
