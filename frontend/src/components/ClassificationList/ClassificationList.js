import React from "react";
import PropTypes from "prop-types";
import ClassificationItem from "../ClassificationItem";

const ClassificationList = ({
  otherProps,
  classificationsResults,
  classColours,
}) => {
  /**
   * From the obtained list of words and colours, return correct colour.
   *
   * @param {string} cls
   * @param {Object} wList
   * @returns
   */
  const getClassyColour = (cls, wList) => {
    if (!cls || !wList || !wList?.wl?.wordList?.colors) {
      return "default";
    }
    return wList.wl.wordList.colors[cls];
  };

  return (
    <div
      data-testid="classificationlist-component"
      className={`classificationlist-wrapper`}
      {...otherProps}
    >
      {classificationsResults &&
        classificationsResults.map((cls, key) => (
          <ClassificationItem
            key={key}
            sentence={cls.sentence}
            classification={cls.classy}
            colour={getClassyColour(cls.classy, classColours)}
          />
        ))}
    </div>
  );
};

ClassificationList.propTypes = {
  classificationsResults: PropTypes.array,
  classColours: PropTypes.object,
};

ClassificationList.defaultProps = {};

export default ClassificationList;
