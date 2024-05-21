import React from "react";
import "./Leadership.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Leadership = () => {
  return (
    <div className="container">
      <div className="leadership">
        <div className="sectionn1">
          <div className="leaderTitle">OUR LEADERSHIP</div>
          <p className="leaderText">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
            corporis, eius, eos consectetur consequuntur sit. Aut, perspiciatis,
            reprehenderit.
          </p>
        </div>
        <div className="sectionn2">
          <div className="person">
            <img
              src="https://preview.colorlib.com/theme/foundation/images/person_1.jpg"
              alt=""
            />

            <p className="textt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              repellat. At, soluta. Repellendus vero, consequuntur!
            </p>
            <div className="icons">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="person">
            <img
              src="https://preview.colorlib.com/theme/foundation/images/person_2.jpg.webp"
              alt=""
            />

            <p className="textt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              repellat. At, soluta. Repellendus vero, consequuntur!
            </p>
            <div className="icons">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
            </div>
          </div>
          <div className="person">
            <img
              src="https://preview.colorlib.com/theme/foundation/images/person_3.jpg"
              alt=""
            />

            <p className="textt">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque,
              repellat. At, soluta. Repellendus vero, consequuntur!
            </p>
            <div className="icons">
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <FaTwitter />
              </div>
              <div className="icon">
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Leadership;
