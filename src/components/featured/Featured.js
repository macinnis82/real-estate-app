import React from "react";
import "./Featured.css";
// featured listing #1
import house1 from "../../assets/house1.jpg";
import bed1 from "../../assets/bed1.jpg";
import bed2 from "../../assets/bed2.jpg";
import kitchen from "../../assets/kitchen.jpg";
import bath1 from "../../assets/bath1.jpg";
// featured listing #2
import house2 from "../../assets/house2.jpg";
import bed3 from "../../assets/bed3.jpg";
import bed4 from "../../assets/bed4.jpg";
import livingRoom from "../../assets/living-room.jpg";
import bath2 from "../../assets/bath2.jpg";

const Featured = () => {
  return (
    <div className="featured">
      <h1 className="featured-text">Top Featured Listings</h1>
      <p className="featured-text">
        Selected Listings by City, State & Zip based on views.
      </p>

      {/* Featured Listing #1 */}
      <div className="container">
        <img className="span-3 image-grid-row-2" src={house1} alt="house1" />
        <img src={bed1} alt="bed1" />
        <img src={bed2} alt="bed2" />
        <img src={kitchen} alt="kitchen" />
        <img src={bath1} alt="bath1" />
        <div className="span-3 img-details">
          <div className="top">
            <h2>35 Patriots Way Stratham, NH 03885</h2>
            <p>House for sale</p>
            <p className="price">$2,650,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>6</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>8</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>6876</p>
              </div>
              <div className="info">
                <p className="bold">Estimated Payment:</p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
        <div className="span-2 right-img-details">
          <p>
            A beautiful modern day home in the country with a full-size pool.
            Spacious and luxurious home located in New Hampshire. Including
            media room, workout facility, and built-in sauna.
          </p>
          <button className="btn">View Listing</button>
        </div>
      </div>

      {/* Featured Listing #2 */}
      <div className="container">
        <img className="order-2" src={bed3} alt="bed3" />
        <img className="order-3" src={bed4} alt="bed4" />

        <img
          className="span-3 image-grid-row-2 order-1"
          src={house2}
          alt="house2"
        />

        <img className="order-4" src={livingRoom} alt="livingRoom" />
        <img className="order-5" src={bath2} alt="bath2" />
        <div className="span-2 right-img-details order-7">
          <p>
            A beautiful modern day home in the country with a full-size pool.
            Spacious and luxurious home located in New Hampshire. Including
            media room, workout facility, and built-in sauna.
          </p>
          <button className="btn">View Listing</button>
        </div>
        <div className="span-3 img-details order-6">
          <div className="top">
            <h2>35 Patriots Way Stratham, NH 03885</h2>
            <p>House for sale</p>
            <p className="price">$2,650,000</p>
          </div>
          <div className="info-grid">
            <div>
              <div className="info">
                <p className="bold">Bedrooms:</p>
                <p>6</p>
              </div>
              <div className="info">
                <p className="bold">Bathrooms:</p>
                <p>8</p>
              </div>
            </div>
            <div>
              <div className="info">
                <p className="bold">Square Feet:</p>
                <p>6876</p>
              </div>
              <div className="info">
                <p className="bold">Estimated Payment:</p>
                <p>$14,797/mo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
