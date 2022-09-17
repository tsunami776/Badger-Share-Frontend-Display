import React from "react";

import "./BookingList.css";
import Button from "@mui/material/Button";
import Card from "../../../shared/components/UIElements/Card";

const bookingList = (props) => (
  <ul className="bookings__list">
    {props.bookings.map((booking) => {
      return (
        <li key={booking._id} className="bookings__item">
          <Card>
            <div className="bookings__item-data">
              {booking.event.title} -{" "}
              {new Date(booking.createdAt).toLocaleDateString()}
            </div>
            <div className="bookings__item-actions">
              <Button onClick={props.onDelete.bind(this, booking._id)}>
                Cancel
                {/*<button className="btn" onClick={props.onDelete.bind(this, booking._id)}>Cancel</button>*/}
              </Button>
            </div>
          </Card>
        </li>
      );
    })}
  </ul>
);

export default bookingList;
