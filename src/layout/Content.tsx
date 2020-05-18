import React from "react";
import ContentBox from "./ContentBox";

interface ContentProps {
  children?: React.ReactNode;
  pageTitle?: string;
  noContentBox?: boolean;
}

const Content = (props: ContentProps) => {
  return (
    <>
      <h6>{props.pageTitle}</h6>
      <ContentBox noContentBox={props.noContentBox}>
        {props.children}
      </ContentBox>
    </>
  );
};

export default Content;
