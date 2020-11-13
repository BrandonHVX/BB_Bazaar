import PropTypes from "prop-types";
import React from "react";

const MobileLangCurrChange = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch
}) => {
  return <div className="mobile-menu-middle"></div>;
};

MobileLangCurrChange.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

export default MobileLangCurrChange;
