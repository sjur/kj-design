import React from "react";
import styled from "styled-components";
import palette from "../../constants/colors";

import Button from "../Button/Button";

interface TabNavigationProps {
  documentation?: boolean;
}

const StyledTabNavigation = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
`;

const TabButton = styled("div")`
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid ${palette.c200};
  color: ${palette.c500};
  box-sizing: border-box; /* font-weight: bold; */
  cursor: pointer;
  &.active {
    border: 1px solid ${palette.c200};
    border-top: 2px solid ${palette.c500};
    border-bottom: none;
    color: ${palette.c100};
  }
  &:hover:not(.active) {
    /* border: 1px solid ${palette.c200}; */
    border-top: 1px solid ${palette.c500};
    /* border-bottom: none; */
    color: ${palette.c100};
    background-color: ${palette.c500};
    color: white;
  }
`;

const TabNavigation = (props: TabNavigationProps) => {
  return (
    <StyledTabNavigation>
      {props.documentation ? (
        <>
          <TabButton>Fane </TabButton>
          <TabButton className="active">Aktiv fane</TabButton>
          <TabButton>Fane</TabButton>
          <TabButton>Fane</TabButton>
          <TabButton>Fane</TabButton>
        </>
      ) : (
        <>
          <TabButton className="active">oversikt</TabButton>
          <TabButton>om pasienten</TabButton>
          <TabButton>Legemidler</TabButton>
          <TabButton>kritisk info</TabButton>
          <TabButton>besøkshistorikk</TabButton>
          <TabButton>journaldokumenter</TabButton>
          <TabButton>innstillinger</TabButton>
        </>
      )}
    </StyledTabNavigation>
  );
};

export default TabNavigation;
