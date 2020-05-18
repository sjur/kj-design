import React from "react";
import Layout from "../../layout/Layout";
import Paragraph from "../../components/Paragraph/Paragraph";
import PatientCard from "../../components/PatientCard/PatientCard";
import { PatientName } from "../../components/PatientRecord/PatientRecord";
import { Grid, Row, Col } from "react-flexbox-grid";
import Link from "../../components/Link/Link";
import PatientDataSection, {
  SectionHeadline,
  Section,
} from "../../components/PatientDataSection/PatientDataSection";

const Typography = () => {
  return (
    <Layout pageTitle="typography">
      <Row>
        <Col lg={8}>
          <h1>Standard verdier</h1>
          <Paragraph>
            Base font-size er 1rem (16px). <strong>Roboto Condensed</strong>{" "}
            brukes for Pasientnavn (tittel) og for overskrifter på alle
            informasjonskort. <strong>Source Sans Pro</strong> brukes for all
            annen tekst.
          </Paragraph>
        </Col>
      </Row>
      <Row>
        <Col lg={6}>
          <PatientName>Pasientnavn, tittel </PatientName>
          <Paragraph>
            Roboto Condensed font-size 1.5rem <br />
            font-weight: normal
            <br />
            letter-spacing: 0.0125rem <br />
            color: #333333 <br />
            Brukes: Øverst på siden for pasientens navn <br />
            Eksempel:
            <Paragraph>
              <PatientName>Line Danser</PatientName>
            </Paragraph>
            Se <Link href="/patientrecord">Forside pasient</Link> for live
            eksempel.
          </Paragraph>
          <Paragraph>
            <h1>h1</h1> Roboto Condensed font-size 1.125rem
            <br />
            font-weight: normal
            <br />
            letter-spacing: 0.0125rem
            <br />
            color: #333333 <br />
            Brukes: Som tittel på alle kort med pasientinformasjon og annen
            informasjon.
            <br />
            Eksempel:
            <Paragraph>
              <PatientCard title="Tittel på pasientkort"></PatientCard>
            </Paragraph>
          </Paragraph>
          <Paragraph>
            <h2>h2</h2> Source Sans Pro font-size: 0.875rem <br />
            font-weight: normal
            <br />
            letter-spacing: 0.0125rem <br />
            color: #00637b <br />
            text-transform: uppercase
            <br />
            margin: 0 0 0.1rem <br />
            Brukes: Som overskrift til seksjoner med informasjon, f.eks. en
            tabell, en paragraf, eller en liste med informasjon. <br />
            Eksempel: <br />
            <SectionHeadline>Seksjonsoverskrift</SectionHeadline>
          </Paragraph>
        </Col>
        <Col lg={6}>
          <Paragraph>
            <Paragraph>body copy</Paragraph>
            Source Sans Pro font-size: 0.85rem
            <br />
            letter-spacing: 0.0125rem <br />
            colors: #333333, #b3b3b3 <br />
            weights: 400, 700 <br />
            Brukes: All vanlig brødtekst og tabeller. Grå farge med fet skrift
            brukes for enkelte detaljer.
          </Paragraph>
          <Paragraph>
            <Paragraph>
              <Link href="#">Hyperlink</Link>
            </Paragraph>{" "}
            Source Sans Pro font-size: 0.85rem <br />
            letter-spacing: 0.0125rem <br />
            color: #008eb0 <br />
            weight: 600 <br />
            text-decoration: none <br />
            :hover text-decoration: underline
          </Paragraph>
        </Col>
      </Row>
    </Layout>
  );
};

export default Typography;
