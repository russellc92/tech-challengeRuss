import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ClassificationList from "../../components/ClassificationList/";

const Classification = () => {
  return (
    <div
      data-testid="Classification-view"
      id="Classification-view"
      className="Classification-wrapper"
    >
      <Grid /*className={classes.root}*/ container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          {/* <div className={classes.selecto}> */}
          <ClassificationList />
          {/* <div>Press Enter to submit</div>
          </div> */}
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

Classification.defaultProps = {};

Classification.propTypes = {};

export default Classification;
