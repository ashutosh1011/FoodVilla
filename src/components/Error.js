import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const {status,data} = useRouteError();
  return (
    <div>
        <h1>Error</h1>
        <h2>Oops! something went wrong </h2>
        <h4>{data}</h4>
    </div>
  )
}

export default Error