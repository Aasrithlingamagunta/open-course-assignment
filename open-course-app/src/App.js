import React from "react";
import { Helmet } from "react-helmet-async";

const SamplePage = () => {
  return (
    <div>
      <Helmet>
        <title>React Helmet Demo</title>
        <meta name="description" content="This is a demo page using React Helmet" />
        <meta name="keywords" content="React, Helmet, SEO, Open Course" />
      </Helmet>
      <h1>Welcome to React Helmet PoC</h1>
      <p>This page demonstrates how to use React Helmet for SEO optimization.</p>
    </div>
  );
};

export default SamplePage;
