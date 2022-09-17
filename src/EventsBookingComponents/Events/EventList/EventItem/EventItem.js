import React from "react";

import "./EventItem.css";
import Button from "@mui/material/Button";
// import Card from "../../../../shared/components/UIElements/Card";

const eventItem = (props) => (
  <li key={props.eventId} className="events__list-item">
    <div>
      <h1>{props.title}</h1>
      <h2>
        ${props.price} - {new Date(props.date).toLocaleDateString()}
      </h2>
    </div>
    <div className="events__control">
      {props.userId === props.creatorId ? (
        <p>Your the owner of this event.</p>
      ) : (
        <Button
          size="small"
          variant="outlined"
          onClick={props.onDetail.bind(this, props.eventId)}
        >
          {/*<button className="btn" onClick={props.onDetail.bind(this, props.eventId)}>*/}
          View Details
          {/*</button>*/}
        </Button>
      )}
    </div>
  </li>
);

export default eventItem;
