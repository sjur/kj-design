import React from "react";
import styled from "styled-components";
import palette from "../constants/colors";

interface ContentBoxProps {
  children?: React.ReactNode;
  noContentBox?: boolean;
}

const StyledContentBox = styled("div")`
  width: 100%;
  padding: 1rem;
  background-color: ${palette.c000};
  /* background-color: #f9f9f9; */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
`;

const ContentBox = (props: ContentBoxProps) => {
  return props.noContentBox ? (
    <>{props.children}</>
  ) : (
    <StyledContentBox>{props.children}</StyledContentBox>
  );
};

export default ContentBox;
