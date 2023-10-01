import React from "react";
import { Card } from "react-bootstrap";
import Rating from "../components/Rating";
import { Link } from "react-router-dom";

const JobScreen = ({ job }) => {
  return (
    <>
      <Card className="my-3 p-3 rounded">
        <Link to={`/job/${job._id}`}>
           <Card.Img src={"hkj"} variant="top" />
        </Link>
        {/* <Card.Body>
          <Link to={`/job/${job._id}`}>
            <Card.Title as="div">
              <strong>{job.title}</strong>
            </Card.Title>
          </Link>
          <Card.Text as="div">
            <Rating
              text={`Model of vehicle: ${car.vehicle_model}`}
            />
          </Card.Text>
          <Card.Text as="div">
            <Rating
              text={`No. of vehicle: ${car.vehicle_number}`}
            />
          </Card.Text>
          <Card.Text as="div">
            <Rating
              text={`${car.seating_capacity} Seater`}
            />
          </Card.Text>
          <Card.Text as="div">Rent / Day $ {car.rentPerDay}</Card.Text>
        </Card.Body> */}
      </Card>
    </>
  );
};

export default JobScreen;
