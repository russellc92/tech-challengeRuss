import React, { useState } from "react";
import MultiTextInput from "../../components/MultiTextInput/MultiTextInput";
import Grid from "@material-ui/core/Grid";
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
}));

const SentenceInput = () => {
  const classes = useStyles();
  const [userInput, setUserInput] = useState({
    sentence: "",
    caseSensitive: true,
    subWordInclusive: true,
  });
  let baseProv = useBase();

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
        ...oldArray,
        newClassy.result,
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
