import React, { useState } from "react";
import { Wrapper } from "./components";

// Views
const Classification = React.lazy(() =>
  import(/* webpackChunkName: "classification-view" */ "./views/Classification")
);

const SentenceInput = React.lazy(() =>
  import(/* webpackChunkName: "sentenceinput-view" */ "./views/SentenceInput")
);

/**
 * Used when Routing is implementee
 */
const NotFound = React.lazy(() =>
  import(/* webpackChunkName: "not-found" */ "./views/NotFound")
);

/**
 * Apply the Wrapper and base provider to the Root of the project (this is for simplicity purposes)
 */
const RootLayout = ({ children }) => {
  return (
    // <BaseProvider>
    <Wrapper>{children}</Wrapper>
    // </BaseProvider>
  );
};

function Landing() {
  return (
    <React.Suspense
      fallback={
        <RootLayout>
          <div className="ui-loading">Loading...</div>
        </RootLayout>
      }
    >
      <RootLayout>
        <SentenceInput />
        <Classification />
        {/* <NotFound default /> */}
      </RootLayout>
    </React.Suspense>
  );
}

export default Landing;
