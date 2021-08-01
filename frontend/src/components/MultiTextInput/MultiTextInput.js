import React from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTextField = withStyles({
  root: {
    width: "100%",
    "& .MuiInputBase-root": {
      color: "white",
      minHeight: "100px",
      // paddingTop: "14.5px",
      // paddingBottom: "140.5px",
    },
    "& .MuiFormLabel-root": {
      color: "white",
    },
    "& label.Mui-focused": {
      color: "yellow",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "yellow",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white",
      },
      "&.Mui-focused fieldset": {
        borderColor: "yellow",
      },
      "&:hover fieldset": {
        borderColor: "yellow",
      },
    },
  },
})(TextField);

const MultiTextInput = ({ otherProps, classes }) => {
  return (
    <div
      data-testid="multitextinput-component"
      className={`multitextinput-wrapper`}
      {...otherProps}
    >
      <StyledTextField
        id="outlined-textarea"
        label="Sentence to Classify"
        placeholder="Enter sentence to classify here!"
        multiline
        variant="outlined"
        style={{ minHeight: "100%" }}
      />
    </div>
  );
};

MultiTextInput.propTypes = {
  //classes: PropTypes.object.isRequired,
};

MultiTextInput.defaultProps = {};

export default MultiTextInput;
