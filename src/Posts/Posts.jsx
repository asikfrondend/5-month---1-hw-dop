import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./posts.css";

const Posts = () => {
  return (
    <div>
      <div className="main">
        <div className="block">
          <Link to="/cart">
            <img
              src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/06/Website-Development-alt-1.webp"
              alt=""
            />
            <h1>Photoshop - Web Design</h1>
          </Link>
          <div className="dollar">$290</div>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
            <div className="rev">
              <h6> 25 Reviews </h6>
            </div>
          </div>
          <div className="text-title">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eaque,
            </p>
          </div>
          <div className="later">
            <div className="later-title">
              <h4>1 year</h4>
              <p>Course</p>
            </div>
            <div className="late-title">
              <h4>25</h4>
              <p>Class size</p>
            </div>
            <div className="lat-title">
              <h4>7:00 - 10:00</h4>
              <p>Class Duration</p>
            </div>
          </div>
        </div>

        <div className="block">
          <Link to="/carttwo">
              <img
                src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/06/Website-Development-alt-1.webp"
                alt=""
              />
              <h1>Sketch - Mobile App</h1>
          </Link>
          <div className="dollar">$170</div>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
            <div className="rev">
              <h6> 25 Reviews </h6>
            </div>
          </div>
          <div className="text-title">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eaque ,{" "}
            </p>
          </div>
          <div className="later">
            <div className="later-title">
              <h4>1 year</h4>
              <p>Course</p>
            </div>
            <div className="late-title">
              <h4>25</h4>
              <p>Class size</p>
            </div>
            <div className="lat-title">
              <h4>7:00 - 10:00</h4>
              <p>Class Duration</p>
            </div>
          </div>
        </div>

        <div className="block">
          <Link to="/cartthere">
          <img
            src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2023/06/Website-Development-alt-1.webp"
            alt=""
          />
          <h1>Corel - Fashion Deisng</h1>
          </Link>
          <div className="dollar">$290</div>
          <div className="stars">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStarHalf} />
            <div className="rev">
              <h6> 25 Reviews </h6>
            </div>
          </div>
          <div className="text-title">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
              eaque ,{" "}
            </p>
          </div>
          <div className="later">
            <div className="later-title">
              <h4>1 year</h4>
              <p>Course</p>
            </div>
            <div className="late-title">
              <h4>25</h4>
              <p>Class size</p>
            </div>
            <div className="lat-title">
              <h4>7:00 - 10:00</h4>
              <p>Class Duration</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;
