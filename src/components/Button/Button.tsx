import React from "react";
import styled from "styled-components";
import palette from "../../constants/colors";
import { Zap, HelpCircle, XCircle, FileText, ArrowRight } from "react-feather";

interface ButtonProps {
  label?: string;
  icon?: string;
  rightIcon?: string;
  // type?: string;
}

const Button = styled("button")<ButtonProps>`
  font-family: inherit;
  background-color: ${palette.c000};
  color: ${palette.c500};
  border: 1px solid ${palette.c500};
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  :hover {
    background-color: ${palette.c500};
    color: ${palette.c000};
    border: 1px solid ${palette.c000};
  }
  :active {
    background-color: ${palette.c000};
    color: ${palette.c500};
    border: 1px solid ${palette.c500};
  }
`;

const Label = styled("span")`
  margin: 0 0.5rem;
  &::first-letter {
    text-transform: uppercase;
  }
`;
const Icon = styled("div")`
  display: flex;
  align-items: center;
`;
const getIcon = (iconType: string) => {
  let iconSize = 16;
  var icon;
  switch (iconType) {
    case "print": {
      icon = <FileText size={iconSize} />;
      break;
    }
    case "help": {
      icon = <HelpCircle size={iconSize} />;
      break;
    }
    case "close": {
      icon = <XCircle size={iconSize} />;
      break;
    }
    case "arrowRight": {
      icon = <ArrowRight size={iconSize} />;
      break;
    }
    default: {
      icon = <Zap size={iconSize} />;
    }
  }
  return <Icon>{icon}</Icon>;
};

const StyledButton = (props: ButtonProps) => {
  return (
    <Button>
      {props.icon ? getIcon(props.icon) : null}
      <Label>{props.label}</Label>
      {props.rightIcon ? getIcon(props.rightIcon) : null}
    </Button>
  );
};

export default StyledButton;
