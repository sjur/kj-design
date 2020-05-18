import React from "react";
import styled from "styled-components";
import palette from "../../constants/colors";

interface PatientDataSectionProps {
  data: Array<object>;
}

const Section = styled("div")`
  margin-bottom: 0.5rem;
  :last-child {
    margin-bottom: 0;
  }
`;
const SectionHeadline = styled("h2")`
  margin: 0 0 0.1rem;
  color: ${palette.c400};
  font-weight: bold;
  text-transform: uppercase;
`;
const SectionDataItem = styled("div")``;

const buildSectionItems = (allItems: Array<string>) => {
  const itemsToReturn: Array<React.ReactElement> = [];

  for (let i = 0; i < allItems.length; i++) {
    if (i == 0) {
      itemsToReturn.push(<SectionHeadline>{allItems[i]}</SectionHeadline>);
    } else {
      itemsToReturn.push(<SectionDataItem>{allItems[i]}</SectionDataItem>);
    }
  }
  return itemsToReturn;
};

const buildSections = (allSections: Array<object>) => {
  const sectionsToReturn: Array<React.ReactElement> = [];
  allSections.forEach((section) => {
    const entries = Object.values(section);
    sectionsToReturn.push(<Section>{buildSectionItems(entries)}</Section>);
  });
  return sectionsToReturn;
};

const PatientDataSection = (props: PatientDataSectionProps) => {
  return <>{buildSections(props.data)}</>;
};
export { SectionHeadline, Section };
export default PatientDataSection;
