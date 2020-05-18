import React from "react";
import Layout from "../../layout/Layout";
import palette from "../../constants/colors";

import Swatch from "./NewSwatch";

const listColors = () => {
  var elements: Array<React.ReactFragment> = [];
  const entries = Object.entries(palette);

  entries.forEach((element) => {
    elements.push(
      <Swatch color={element[1]} name={element[0] + " - " + element[1]} />
    );
  });
  return elements;
};

const Palette = () => {
  return (
    <Layout pageTitle="Farger">
      <>{listColors()}</>
    </Layout>
  );
};

export default Palette;
