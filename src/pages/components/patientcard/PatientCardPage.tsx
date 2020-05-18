import React from "react";
import Layout from "../../../layout/Layout";
import { Grid, Row, Col } from "react-flexbox-grid";
import PatientCard from "../../../components/PatientCard/PatientCard";
import Link from "../../../components/Link/Link";
import Paragraph from "../../../components/Paragraph/Paragraph";

const PatientCardPage = () => {
  return (
    <Layout pageTitle="Patient Card">
      <Row>
        <Col lg={8}>
          <PatientCard title="Informasjonskort">
            Kort danner fundamentet for alle seksjoner i pasientens
            kjernejournal. Et kort kan inneholde tabeller, tekst, og annen
            informasjon. Se <Link href="/patientrecord">Forside pasient</Link>{" "}
            for eksempler. Kort er der brukt for alle viktige seksjoner med
            pasientinformasjon.
          </PatientCard>
          <PatientCard title="Størrelse og layout">
            Et kort følger layout til siden, og tar opp så mange kolonner som
            man setter av til det.
            <p>Dette kortet tar 8 kolonner i en 12-kolonners layout.</p>
          </PatientCard>
        </Col>
        <Col lg={4}>
          <PatientCard title="Et kort som tar opp 4 kolonner">
            Dette kortet tar 4 kolonner i en 12-kolonners layout.
          </PatientCard>
        </Col>
      </Row>
    </Layout>
  );
};

export default PatientCardPage;
