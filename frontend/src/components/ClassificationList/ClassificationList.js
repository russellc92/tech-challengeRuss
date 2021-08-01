import React from "react";
import PropTypes from "prop-types";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import ClassificationItem from "../ClassificationItem";

const ClassificationList = ({ otherProps, classes }) => {
  const aaa = [
    {
      sentence: "dsa",
      classi: "asd",
    },
  ];
  return (
    <div
      data-testid="classificationlist-component"
      className={`classificationlist-wrapper`}
      {...otherProps}
    >
      {aaa && aaa.map((cls) => <ClassificationItem />)}
    </div>
  );
};

ClassificationList.propTypes = {
  //classes: PropTypes.object.isRequired,
};

ClassificationList.defaultProps = {};

export default ClassificationList;
