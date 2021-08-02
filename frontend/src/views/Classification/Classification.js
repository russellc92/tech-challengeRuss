import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import ClassificationList from "../../components/ClassificationList/";
import { useGetWordList } from "../../hooks/";
import { useBase } from "../../context/Base";

const useStyles = makeStyles((theme) => ({
  root: {},
  classy: {
    marginTop: "30px",
  },
}));

const Classification = () => {
  const classes = useStyles();
  let baseProv = useBase();
  let classificationsResults = baseProv.classifications;
  let wordColours = useGetWordList();

  return (
    <div
      data-testid="Classification-view"
      id="Classification-view"
      className="Classification-wrapper"
    >
      <Grid container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className={classes.classy}>
            <ClassificationList
              classificationsResults={classificationsResults}
              classColours={wordColours}
            />
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

Classification.defaultProps = {};

Classification.propTypes = {};

export default Classification;
