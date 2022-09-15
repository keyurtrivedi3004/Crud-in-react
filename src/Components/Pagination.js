import React, { useState, useEffect } from "react";
// import { Next } from "react-bootstrap/esm/PageItem";

const Pagination = ({ showperpage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  const [nuOfPages, setNoOfPages] = useState(Math.ceil(total / showperpage));

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
      if (nuOfPages === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="d-flex justify-content-center">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a
              onClick={() => onButtonClicked("prev")}
              class="page-link"
              href="#"
            >
              Previous
            </a>
          </li>
          {new Array(nuOfPages).fill("").map((el, index) => (
            <li class={`page-item  ${index + 1 === counter ? "active" : null}`}>
              <a
                class="page-link"
                href="#"
                onClick={() => setCounter(index + 1)}
              >
                {index + 1}
              </a>
            </li>
          ))}
          <li class="page-item">
            <a
              onClick={() => onButtonClicked("next")}
              class="page-link"
              href="#"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* <button
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
      </button> */}
    </div>
  );
};

export default Pagination;
