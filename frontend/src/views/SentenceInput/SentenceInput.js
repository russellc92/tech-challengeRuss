import React, { useState } from "react";
import MultiTextInput from "../../components/MultiTextInput/MultiTextInput";
import {
  Grid,
  Switch,
  FormGroup,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { fetchClassification } from "../../api/classificationApi.js";
import { useBase } from "../../context/Base";

const useStyles = makeStyles((theme) => ({
  root: {},
  selecto: {
    marginTop: "150px",
  },
  hint: {
    color: "#ffffff",
  },
  toggle: {
    paddingRight: "10px",
  },
  toggleText: {
    color: "#ffffff",
  },
}));

const SentenceInput = () => {
  const classes = useStyles();
  const [userInput, setUserInput] = useState({
    sentence: "",
    caseSensitive: true,
    subWordInclusive: false,
  });
  let baseProv = useBase();

  const toggleChecked = (event) => {
    setUserInput((prev) => ({ ...prev, caseSensitive: !prev.caseSensitive }));
  };
  const handleInputChange = (event) => {
    setUserInput({ ...userInput, sentence: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userInput?.sentence) {
      return;
    }
    // post userInput
    let newClassy = await classifySentence(userInput);
    // local store result to context
    if (newClassy && newClassy.result?.classy && newClassy.result?.sentence) {
      baseProv.setClassifications((oldArray) => [
        newClassy.result,
        ...oldArray,
      ]);
    }
    // reset input
    setUserInput({ ...userInput, sentence: "" });
  };

  const classifySentence = async (input) => {
    // TODO: move this try catch logic to api file
    try {
      let res = await fetchClassification(input);
      let hasResults = res?.data?.result?.classy && res?.data?.result?.sentence;
      if (hasResults) {
        return res.data;
      } else {
        throw new Error("error fetching classification");
      }
    } catch (error) {
      console.error(error);
    }
    return;
  };

  return (
    <div
      data-testid="SentenceInput-view"
      id="SentenceInput-view"
      className="SentenceInput-wrapper"
    >
      <Grid className={classes.root} container spacing={3}>
        <Grid item xs={3} />
        <Grid item xs={6}>
          <div className={classes.selecto}>
            {/* <div className={classes.hint}>Case Sensitive</div> */}
            {/* <Switch
              size="small"
              checked={userInput.caseSensitive}
              //onChange={toggleChecked}
              color="secondary"
            /> */}

            <FormGroup className={classes.toggle}>
              <FormControlLabel
                control={
                  <Switch
                    size="small"
                    checked={userInput.caseSensitive}
                    onChange={toggleChecked}
                    color="secondary"
                  />
                }
                label={
                  <Typography className={classes.toggleText}>
                    Case Sensitive
                  </Typography>
                }
                labelPlacement="start"
              />
            </FormGroup>
            <MultiTextInput
              value={userInput.sentence}
              onInput={handleInputChange}
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            />
            <div className={classes.hint}>Press Enter to submit</div>
          </div>
        </Grid>
        <Grid item xs={3} />
      </Grid>
    </div>
  );
};

SentenceInput.defaultProps = {};

SentenceInput.propTypes = {};

export default SentenceInput;
