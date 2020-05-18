import React from "react";
import styled from "styled-components";

// denne komponenten brukes bare for dokumentasjonssidene, ikke for KJ-redesign. Ikke bruk denne line-height i KJ-designer, det ødelegger designet.

interface Props {
  children?: any;
}

const StyledParagraph = styled.p`
  font-size: 1rem;
  line-height: 1.5rem;
`;

const Paragraph = (props: Props) => {
  return <StyledParagraph>{props.children}</StyledParagraph>;
};

export default Paragraph;
