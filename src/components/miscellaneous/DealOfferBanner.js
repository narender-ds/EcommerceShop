import React from "react";
import { Link } from "react-router-dom";
import Bagimg from "../../assets/images/product-sale.png";
import moment from "moment/moment";
const DealOfferBanner = () => {
  // const current = new Date();
  // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  var time = moment().format('hh:mm:ss');
  return (
    <>
      <section className="categories spad">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <div className="categories__text">
                  <h2>
                    Clothings Hot <br /> <span>Shoe Collection</span> <br />{" "}
                    Accessories
                  </h2>
                </div>
              </div>
              
              <div className="col-lg-4">
                <div className="categories__hot__deal">
                  <img src={Bagimg} alt="" />
                  <div className="hot__deal__sticker">
                    <span>Sale Of</span>
                    <h5>$29.99</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1">
                <div className="categories__deal__countdown">
                  <span>Deal Of The Week</span>
                  <h2>Multi-pocket Chest Bag Black</h2>
                  <div
                    className="categories__deal__countdown__timer"
                    id="countdown"
                  >
                    
                    <div className="cd-item">
                      <span>4</span>
                      <p>Days</p>
                    </div>
                    <div className="cd-item">
                      <span>{time}</span>
                      {/* <p>Hours</p> */}
                    </div>
                    {/* <div className="cd-item">
                      <span>50</span>
                      <p>Minutes</p>
                    </div>
                    <div className="cd-item">
                      <span>18</span>
                      <p>Seconds</p>
                    </div> */}
                  </div>
                  <Link to="/shop" className="primary-btn">
                    Shop now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DealOfferBanner;
