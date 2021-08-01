import React from "react";
import PropTypes from "prop-types";
import { TextField, Card, CardContent } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const ClassificationItem = ({ otherProps, classes }) => {
  return (
    <div
      data-testid="classification=item-component"
      className={`classificationitem-wrapper`}
      {...otherProps}
    >
      <Card style={{ backgroundColor: "#ffffffcf" }}>
        <CardContent>noicveasdasw</CardContent>
      </Card>
    </div>
  );
};

ClassificationItem.propTypes = {
  //classes: PropTypes.object.isRequired,
};

ClassificationItem.defaultProps = {};

export default ClassificationItem;
