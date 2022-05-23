import React from "react";

import { useParams } from "react-router-dom";

const TitleAccomodation = (props) => {
  const { id } = useParams();

  const dataId = props.blogs.filter((lodge) => lodge.id === id);
  //rating********************************/
  const ratingStar = dataId.map((el) => el.rating);
  
  const num = parseInt(ratingStar, 10);

  //https://github.com/Alphasud/CharlesDenneulin_11_17062021/blob/main/src/Components/Rating.js
  //************************************** */

  return (
    <div className="containerLodgeInfos">
      <div className="infosLodge">
        {dataId.map((blog) => (
          <div className="carouselTitle" key={blog.id}>
            <div className="titleCountries">
              <h4 className="titleAcco">{blog.title}</h4>
              <p className="city">{blog.location}</p>
            </div>
            <div className="tagInfos">
              <ul className="ulTags">
                {dataId.map(({ tags }) => {
                  return tags.map((t) => {
                    return (
                      <li className="tagName" key={t}>
                        {t}
                      </li>
                    );
                  });
                })}
              </ul>
            </div>
          </div>
        ))}

        <div className="blocLessorNote">
          {dataId.map((blog) => (
            <div className="idLessor" key={blog.host.name}>
              <p className="name">{blog.host.name}</p>
              <div>
                <img
                  src={blog.host.picture}
                  alt={blog.host.picture}
                  className="circleName"
                />
              </div>
            </div>
          ))}

          <div className="starContainer">
            <div className="stars">
              <div className="starRate">
                {[...Array(num)].map((stars, index) => {
                  return (
                    <img
                      key={index}
                      src="../componentsIMG/star_rate_24px2.svg"
                      alt=""
                      className="star-rate-2"
                    />
                  );
                })}
              </div>

              <div className="starBase">
                {[...Array(5)].map((starBase, index) => {
                  return (
                    <img
                      key={index}
                      src="../componentsIMG/star_rate_24px1.svg"
                      alt=""
                      className="star-rate-1"
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleAccomodation;

//https://www.figma.com/file/bAnXDNqRKCRRP8mY2gcb5p/UI-Design-Kasa-FR?node-id=4%3A2