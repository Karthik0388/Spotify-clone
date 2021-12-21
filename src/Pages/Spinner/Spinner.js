import React from "react";
import "./Spinner.css";
const Spinner = () => {
  return (
    <section className="spinnerBlock">
      <article>
        <div className="spinner">
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
          <div className="dot" />
        </div>
      </article>
    </section>
  );
};

export default Spinner;
