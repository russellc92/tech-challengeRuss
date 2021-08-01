import React from "react";
import PropTypes from "prop-types";

// Mui
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

const useStyles = makeStyles(
  (theme) => ({
    root: {
      display: "flex",
      position: "relative", // Remove this or above line if wonky display
      backgroundColor: "#4672d4",
      //height: "100%"
    },
    hide: {
      display: "none",
    },
    content: {
      flexGrow: 1,
      //display: "flex",
      // padding: theme.spacing(3)
    },
  }),
  { name: "Wrapper" }
);

const Wrapper = ({ theme, children }) => {
  const classes = useStyles(theme);

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <main className={classes.content}>{children}</main>
        </div>
      </ThemeProvider>
    </StylesProvider>
  );
};

Wrapper.propTypes = {
  theme: PropTypes.object,
};

Wrapper.defaultProps = {};

export default Wrapper;
