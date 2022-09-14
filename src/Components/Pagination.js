import React, { useState, useEffect } from "react";
import { Next } from "react-bootstrap/esm/PageItem";

const Pagination = ({ showperpage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showperpage * counter;
    onPaginationChange(value - showperpage, value);
  }, [counter]);

  const onButtonClicked = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showperpage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-between">
      <button
        className="btn btn-primary"
        onClick={() => onButtonClicked("prev")}
      >
        Previous
      </button>
      <button
        className="btn btn-primary"
        onClick={() => onButtonClicked("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
