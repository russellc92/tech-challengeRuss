import React from "react";

const NotFound = () => {
  return (
    <div
      data-testid="not-found-view"
      id="not-found-view"
      style={{
        padding: "4rem",
      }}
    >
      Something’s gone wrong :(
    </div>
  );
};

NotFound.defaultProps = {};

NotFound.propTypes = {};

export default NotFound;
