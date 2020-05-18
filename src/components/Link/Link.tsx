import React from "react";
import styled from "styled-components";
import palette from "../../constants/colors";

interface LinkProps {
  children?: React.ReactNode;
  href?: string;
  target?: string;
}

const StyledLink = styled("a")`
  color: ${palette.c500};
  font-weight: 600;
  text-decoration: none;
  
  :hover {
    cursor: pointer;
    text-decoration: underline;
    /* border-bottom: 2px solid ${palette.c500}; */
    /* border-bottom: 1px solid ${palette.c500}; */
    /* font-weight: 600; */
    /* color: black; */
  }
`;

const Link = (props: LinkProps) => {
  return (
    <StyledLink href={props.href} target={props.target}>
      {props.children}
    </StyledLink>
  );
};

export default Link;
