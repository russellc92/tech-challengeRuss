import React from "react";
import MultiTextInput from "../../components/MultiTextInput/MultiTextInput";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  selecto: {
    marginTop: "200px",
  },
}));
const SentenceInput = () => {
  const classes = useStyles();

  return (
    <div
      data-testid="SentenceInput-view"
      id="SentenceInput-view"
      className="SentenceInput-wrapper"
    >
      <Grid className={classes.root} container spacing={3}>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <div className={classes.selecto}>
            <MultiTextInput />
            <div>Press Enter to submit</div>
          </div>
        </Grid>
        <Grid item xs={3}></Grid>
      </Grid>
    </div>
  );
};

SentenceInput.defaultProps = {};

SentenceInput.propTypes = {};

export default SentenceInput;
