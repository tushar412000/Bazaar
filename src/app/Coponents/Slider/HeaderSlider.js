import React, { Fragment } from "react";
import { Button, Carousel } from "react-bootstrap";
import "./HeaderSlider.css";
function HeaderSlider() {
  return (
    <Fragment>
      <Carousel variant="dark" style={{ maxHeihgt: "650px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/handbag.jpg"
            alt="pure pu ladies bag"
          />
          <Carousel.Caption className="bg-white">
            <h5>Black Versace Jeans Bag: Where Luxury Meets Attitude </h5>
            <p>Unleash your style with the iconic Black Versace Jeans Bag – a blend of luxury and edge that sets you apart</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/blacksuit.jpg"
            alt="pure mustard oil"
          />
          <Carousel.Caption className="bg-white">
            <h5>Timeless Sophistication: The Black Suit Collection</h5>
            <p>Elevate your presence with our meticulously crafted Black Suit Collection, embodying a classic blend of elegance and confidence</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            style={{ height: "100vh", objectFit: "cover" }}
            src="../img/slider/kitchen.jpg"
            alt="smart blender home appliance"
          />
          <Carousel.Caption className="bg-white">
            <h5>Smart Appliances For Your Smart Kitchen</h5>
            <p>Transform your culinary space into a smart kitchen oasis, where technology seamlessly enhances every aspect of your cooking experience</p>
            <div className="mb-3">
              <Button variant="dark">Shop Now</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Fragment>
  );
}

export default HeaderSlider;
