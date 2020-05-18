import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Layout from "../../../layout/Layout";
import ContentTable from "../../../components/ContentTable/ContentTable";
import PatientLogoTable from "../../../images/kj_patient_logo_table.png";

const criticalInformationData = [
  {
    icon: <img src={PatientLogoTable} />,
    type: "legemiddelreaksjon",
    details: "penicilin med utvidet spekter",
    reactionType: "anafylaktisk sjokk",
    verification: "verifisert: 10.05.2019",
  },
  {
    icon: <img src={PatientLogoTable} />,
    type: "Kritisk medisinsk tilstand",
    details: "Påvist genetisk avvik i CYP-metabolismen: CYP2D6 *3/*3	",
    reactionType: "",
    verification: "opprettet: 05.03.2020",
  },
];
const medicationHistory = [
  {
    column1: "Legemiddel",
    column2: "Dosering",
    column3: "utlevert / forskrevet",
  },
  {
    column1: "Paralgin Forte Tab 400 mg/30 mg",
    column2: "1 tablett 3 ganger daglig",
    column3: "21.02.2020",
  },
  {
    column1: "Insulatard FlexPen Inj væske, susp 100 IE/ml",
    column2: "Antall IE etter eget blodsukkerskjema fra lege",
    column3: "26.01.2020",
  },
  {
    column1: "Amlodipin Sandoz Tab 5 mg",
    column2: "1 tablett daglig",
    column3: "18.01.2020",
  },
  {
    column1: "Amoxicillin Mylan Kaps 250 mg",
    column2:
      "1 kapsel morgen, 1 kapsel midt på dagen og 1 kapsel kveld i 20 dager Svelges hel med 1 glass vann",
    column3: "03.01.2020",
  },
];

const TablePage = () => {
  return (
    <Layout pageTitle="Tabell">
      <Row>
        <Col lg={12}>
          <h3>Tabell med ikon, ingen overskriftsrad</h3>
          <p>
            <ContentTable data={criticalInformationData} headerRow={false} />
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <h3>tabell uten ikon, med overskriftsrad</h3>
          <p>
            <ContentTable data={medicationHistory} headerRow={true} />
          </p>
        </Col>
      </Row>
    </Layout>
  );
};

export default TablePage;
