import React from "react";
import PropTypes from "prop-types";
import { Chip, Card, CardContent, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "30px",
  },
  card: {
    //marginTop: "30px",
    backgroundColor: "#ffffffcf",
    //marginLeft: "20px",
    //marginRight: "150px",
    //paddingLeft: "40px",
    //paddingRight: "40px",
  },
  classy: {
    //marginTop: "30px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  chipcon: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
}));

const ClassificationItem = ({
  otherProps,
  sentence,
  classification,
  colour,
}) => {
  const classes = useStyles();

  return (
    <div
      data-testid="classification=item-component"
      className={`classificationitem-wrapper`}
      {...otherProps}
    >
      <Grid className={classes.root} container spacing={3}>
        <Grid item xs={10}>
          <Card className={classes.card}>
            <CardContent>{sentence}</CardContent>
          </Card>
        </Grid>
        <Grid className={classes.chipcon} item xs={2}>
          <Chip
            className={classes.classy}
            label={classification}
            color={colour}
          />
        </Grid>
      </Grid>
    </div>
  );
};

ClassificationItem.propTypes = {
  //classes: PropTypes.object.isRequired,
  sentence: PropTypes.string.isRequired,
  classification: PropTypes.string.isRequired,
};

ClassificationItem.defaultProps = {};

export default ClassificationItem;
