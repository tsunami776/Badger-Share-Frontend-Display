import React from "react";

import "./Paginator.css";
import Button from "@mui/material/Button";

const paginator = (props) => (
  <div className="paginator">
    {props.children}
    <div className="paginator__controls">
      {props.currentPage > 1 && (
        <Button variant="contained" onClick={props.onPrevious}>
          {/*<button className="paginator__control" onClick={props.onPrevious}>*/}
          Previous
          {/*</button>*/}
        </Button>
      )}
      {props.currentPage < props.lastPage && (
        <Button variant="contained" onClick={props.onNext}>
          {/*<button className="paginator__control" onClick={props.onNext}>*/}
          Next
          {/*</button>*/}
        </Button>
      )}
    </div>
  </div>
);

export default paginator;
