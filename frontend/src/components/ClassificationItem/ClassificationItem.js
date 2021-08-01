import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const ClassificationItem = ({ otherProps, classes }) => {
  return (
    <div
      data-testid="classification=item-component"
      className={`classificationitem-wrapper`}
      {...otherProps}
    >
      noicveasdas
    </div>
  );
};

ClassificationItem.propTypes = {
  //classes: PropTypes.object.isRequired,
};

ClassificationItem.defaultProps = {};

export default ClassificationItem;
