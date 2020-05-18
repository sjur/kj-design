import React from "react";
import styled from "styled-components";
import palette from "../../constants/colors";
import Link from "../Link/Link";
import { Lock, AlertTriangle } from "react-feather";

interface PatientCardProps {
  children?: React.ReactNode;
  title: string;
  headlineLink?: string;
  headlineLinkIcon?: string;
}

const StyledPatientCard = styled("div")`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  margin: 0 0 1rem;
  background-color: ${palette.c000};
  /* border: 1px solid ${palette.c300}; */

`;
const CardHeadline = styled("div")`
  background-color: ${palette.c600};

  display: flex;
  max-height: 2rem;
  align-items: center;
  padding: 0.25rem 1rem;
`;
const CardHeadlineLink = styled("div")`
  display: flex;
  align-items: center;
  margin-left: auto;
  > * {
    margin-left: 0.5rem;
  }
`;
const CardTitle = styled("h1")`
  &::first-letter {
    text-transform: capitalize;
  }
`;
const CardContentHeadline = styled("h2")``;
const CardContent = styled("div")`
  padding: 0.75rem 1rem;
`;

const PatientCard = (props: PatientCardProps) => {
  return (
    <StyledPatientCard>
      <CardHeadline>
        <CardTitle>{props.title}</CardTitle>
        {props.headlineLink ? (
          <CardHeadlineLink>
            <AlertTriangle size={14} color={palette.c800} />
            <Link>Det finnes skjulte legemidler</Link>
            <Lock size={14} color={palette.c500} />
          </CardHeadlineLink>
        ) : null}
      </CardHeadline>
      <CardContent>{props.children}</CardContent>
    </StyledPatientCard>
  );
};

export default PatientCard;
