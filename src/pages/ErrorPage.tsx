import React from "react";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        {
            isRouteErrorResponse(error) ?
            <i>{error.statusText || error.data}</i> : <i>Unknown</i>
        }
      </p>
    </div>
  );
}

export default ErrorPage;