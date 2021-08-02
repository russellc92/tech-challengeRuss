import React, { useState } from "react";

const BaseContext = React.createContext();

function BaseProvider(props) {
  const [classifications, setClassifications] = useState([]);

  // Optimization (memorise the value to prevent rewrites)
  const value = React.useMemo(() => {
    return {
      classifications,
      setClassifications,
    };
  }, [classifications]);

  return <BaseContext.Provider value={value} {...props} />;
}

const useBase = () => {
  const context = React.useContext(BaseContext);
  return context;
};

export { BaseProvider, useBase };
