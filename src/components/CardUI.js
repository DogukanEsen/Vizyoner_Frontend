import React from "react";
import img1 from "../assets/aselsan.png";
import img2 from "../assets/roketsan.png";
import img3 from "../assets/tr_egitim.png";

const CardUI = (props) => {
  const style = {
    marginTop: "25px",
    border: "1px soft #fefefe",
  };

  return (
    <div className="card">
      <img
        src={process.env.PUBLIC_URL + "/aselsan.png"}
        alt="Aselsan"
        className="card-img-top"
      />
      {/* <img
        src={process.env.PUBLIC_URL + "/roketsan.png"}
        alt="Roketsan"
        className="card-img-top"
      />
      <img
        src={process.env.PUBLIC_URL + "/tr_egitim.png"}
        alt="Tr Eğitim"
        className="card-img-top"
      /> */}
      <div className="card-body text-dark">
        <h4 className="card-title">{props.title}</h4>
        <p className="card-text text-secondary" style={style}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          necessitatibus nisi amet dolores maiores temporibus voluptatem quaerat
          adipisci veniam quasi!
        </p>

        <a href="#" className="btn btn-outline-success">
          Daha Fazla
        </a>
      </div>
    </div>
  );
};
export default CardUI;
