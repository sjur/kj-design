import React from "react";
import styled from "styled-components";
import palette from "../../constants/colors";
import PatientLogo from "../../images/kj_patient_logo.png";
import KjLogo from "../../images/kj-main-logo.svg";
import Button from "../Button/Button";
import TabNavigation from "../TabNavigation/TabNavigation";
import { Grid, Row, Col } from "react-flexbox-grid";
import Link from "../Link/Link";
import { ChevronDown } from "react-feather";

interface PatientRecordProps {
  children?: React.ReactNode;
  patient: string;
}

const PatientRecordContainter = styled("div")`
  height: auto;
`;

const Footer = styled.div`
  display: flex;
  align-items: flex-end;
`;
const KjLogoContainter = styled.div`
  width: 10rem;
  > img {
    width: 100%;
  }
`;
const LinkGroup = styled.div`
  margin-left: auto;
  display: flex;
  > * {
    margin-left: 1rem;
    margin-bottom: 0.5rem;
  }
`;

const StyledPatientRecord = styled("div")`
  /* width: 100%; */
  max-width: 78rem;
  height: auto;
  padding: 1rem;
  background-color: ${palette.c000};
`;

const Headline = styled("div")`
  display: flex;
  align-items: center;
  height: auto;
  margin-bottom: 0.5rem;
`;

const PatientLogoContainer = styled("div")`
  width: 5rem;
  height: auto;
  margin-right: 1rem;
  > img {
    height: 100%;
  }
`;
const PatientInfo = styled("div")`
  width: auto;
  max-width: 50%;
  z-index: 1;
`;
export const PatientName = styled("div")`
  font-family: "Roboto Condensed";
  font-size: 1.5rem;
`;
const PatientID = styled("div")`
  font-size: 1.15rem;
`;
const Information = styled("div")`
  color: ${palette.c200};
  font-weight: bold;
`;
const Toolbar = styled("div")`
  align-self: flex-start;
  margin-left: auto;
  ${Information} {
    /* display: flex;
    flex-direction: row;
    justify-content: flex-end; */
    float: right;
  }
`;
const ButtonCollection = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  > button {
    margin-left: 1rem;
  }
`;
const TabNavigationContainer = styled("div")`
  padding-top: 1rem;
`;

const PatientRecord = (props: PatientRecordProps) => {
  return (
    <PatientRecordContainter>
      <StyledPatientRecord>
        <Headline>
          <Grid>
            <Row>
              <PatientLogoContainer>
                <img src={PatientLogo} />
              </PatientLogoContainer>
              <PatientInfo>
                <PatientName>{props.patient} </PatientName>
                <PatientID>040980 49628, Kvinne (36 år)</PatientID>
                <Information>Kjernejournal opprettet 08.01.2012</Information>
              </PatientInfo>
              <Toolbar>
                <ButtonCollection>
                  <Button label="Utskriftsversjon" icon="print"></Button>
                  <Button label="Lukk" icon="close"></Button>
                  {/* <Button label="logg ut" /> */}
                </ButtonCollection>
              </Toolbar>
            </Row>
            <Row>
              <TabNavigationContainer>
                <TabNavigation />
              </TabNavigationContainer>
            </Row>
          </Grid>
        </Headline>
        {props.children}
        <Footer>
          <KjLogoContainter>
            <img src={KjLogo} />
          </KjLogoContainter>
          <LinkGroup>
            <Link>Hjelp</Link>
            <Link>Driftsstatus</Link>
            <span>Innlogget som Lege Legesen, Sentrum Legesenter</span>
            <Link>Logg ut</Link>
          </LinkGroup>
        </Footer>
      </StyledPatientRecord>
    </PatientRecordContainter>
  );
};

export default PatientRecord;
