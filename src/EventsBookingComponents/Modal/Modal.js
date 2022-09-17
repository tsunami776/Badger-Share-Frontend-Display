import React from "react";

import "./Modal.css";
import Button from "@mui/material/Button";

const modal = (props) => (
  <div className="modal">
    {/*<header className="modal__header">*/}
    {/*  <h1>{props.title}</h1>*/}
    {/*</header>*/}
    <section className="modal__content">{props.children}</section>
    <section className="modal__actions">
      {props.canCancel && (
        <Button onClick={props.onCancel}>
          {/*<button className="btn" onClick={props.onCancel}>*/}
          Cancel
          {/*</button>*/}
        </Button>
      )}
      {props.canConfirm && (
        <Button onClick={props.onConfirm}>
          {/*<button className="btn" onClick={props.onConfirm}>*/}
          {props.confirmText}
          {/*</button>*/}
        </Button>
      )}
    </section>
  </div>
);

export default modal;
