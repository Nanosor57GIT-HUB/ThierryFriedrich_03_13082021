import React, { useState } from "react";
import { useParams } from "react-router-dom";

const DropDownAccomodations = (props) => {
  const { id } = useParams();

  const dataId = props.blogs.filter((lodge) => lodge.id === id);

  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  function handleClick() {
    setShow((show) => !show);
  }
  function handleClick2() {
    setShow2((show2) => !show2);
  }

  let stateCheck = show ? "active" : "inActive";

  return (
    <div className="drop-accomodations-container">
      {dataId.map((dropdown, index) => (
        <div className="dropdownAccomodations" key={index}>
          <div className="dropAccomodations">
            <button
              className={`drop-btn-accomodations ${stateCheck}`}
              onClick={handleClick}
            >
              <div className="description">
                <p className="titleDescription">Description</p>
                <img
                  src="../componentsIMG/arrow-dropdown.svg"
                  alt="arrow dropdown"
                  className="arrowDown"
                  style={{
                    transform: show ? "rotate(-180deg)" : null,
                    transition: "0.2s",
                  }}
                />
              </div>
            </button>
            <div className="descriptionText">
              {show ? <p>{dropdown.description}</p> : null}
            </div>
          </div>

          <div className="dropAccomodations">
            <div className="dropEquipements">
              <button
                className={`drop-btn-accomodations ${stateCheck}`}
                onClick={handleClick2}
              >
                <div className="equipements">
                  <p className="titleEquipements">Equipements</p>
                  <img
                    src="../componentsIMG/arrow-dropdown.svg"
                    alt="arrow dropdown"
                    className="arrowDown"
                    style={{
                      transform: show2 ? "rotate(-180deg)" : null,
                      transition: "0.2s",
                    }}
                  />
                </div>
              </button>
              {show2 ? (
                <div className="equipementsText">
                  <ul className="ulEquipments">
                    {dropdown.equipments.map((equip) => (
                      <li key={equip}>{equip}</li>
                    ))}   
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropDownAccomodations;

//https://github.com/Erwandeb

//https://www.youtube.com/watch?v=X5hzO9sd4_U&t=420s

//https://www.youtube.com/watch?v=-Lx-YlI9hlY
