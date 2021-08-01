import React from "react";
import MultiTextInput from "../../components/MultiTextInput/MultiTextInput";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {},
  selecto: {
    marginTop: "150px",
  },
  hint: {
    color: "#ffffff",
  },
}));
const SentenceInput = () => {
  const classes = useStyles();

  /**
   * On input.
   * Make sure to debounce.
   */

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
            <div className={classes.hint}>Press Enter to submit</div>
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
