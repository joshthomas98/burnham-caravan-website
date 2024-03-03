import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./discoverourcaravan.css"; // Import the CSS file

const DiscoverOurCaravan = () => {
  return (
    <div className="caravan-features">
      <Container>
        <Row>
          <Col xs={12} lg={6}>
            <h2>Discover Our Caravan</h2>

            <p>
              Escape to our tranquil static caravan nestled along the stunning
              coastline of Burnham-On-Sea. Experience seaside living at its
              finest and indulge in the comforts of home while surrounded by
              breathtaking natural beauty.
            </p>

            <ul>
              <li>
                <strong>Direct Beach Access:</strong> Step out of your caravan
                and onto the golden sands of Burnham-On-Sea beach. Enjoy
                leisurely strolls, sandcastle building, or simply basking in the
                sun.
              </li>
              <li className="pt-2">
                <strong>Comfortable Accommodations:</strong> Our spacious
                caravans are thoughtfully designed to accommodate families and
                groups, providing ample space for relaxation and bonding.
              </li>
              <li className="pt-2">
                <strong>Stunning Sea Views:</strong> Wake up to panoramic views
                of the shimmering sea from your doorstep. Let the soothing sound
                of waves lull you into serenity as you unwind in your coastal
                retreat.
              </li>
              <li className="pt-2">
                <strong>Modern Amenities:</strong> Enjoy all the comforts of
                home with modern amenities including fully-equipped kitchens,
                cozy bedrooms, and inviting living areas designed for your
                comfort and convenience.
              </li>
              <li className="pt-2">
                <strong>Family-Friendly Activities:</strong> Discover a myriad
                of family-friendly activities and attractions in the surrounding
                area, from theme parks and wildlife reserves to charming seaside
                towns waiting to be explored.
              </li>
              <li className="pt-2">
                <strong>Flexible Booking Options:</strong> We offer flexible
                booking options to accommodate your schedule and preferences,
                ensuring a hassle-free experience from reservation to check-out.
              </li>
            </ul>
          </Col>

          <Col
            xs={12}
            lg={6}
            className="d-flex align-items-center pt-sm-4 pt-md-4"
          >
            <img src="images/gallery-6.jpg" alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DiscoverOurCaravan;
