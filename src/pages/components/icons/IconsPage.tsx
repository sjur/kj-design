import React from "react";
import { Col, Row } from "react-flexbox-grid";
import Layout from "../../../layout/Layout";
import Paragraph from "../../../components/Paragraph/Paragraph";
import Link from "../../../components/Link/Link";
import {
  Zap,
  HelpCircle,
  XCircle,
  FileText,
  ArrowRight,
  AlertTriangle,
  Lock,
} from "react-feather";

const IconsPage = () => {
  return (
    <Layout pageTitle="Ikoner">
      <Row>
        <Col lg={12}>
          <Paragraph>
            Alle ikoner er hentet fra{" "}
            <Link href="https://feathericons.com" target="_blank">
              Feather icons
            </Link>
          </Paragraph>
          <Paragraph>
            Ikonene sin størrelse er tilpasset font-størrelse for de ulike
            elementene. For knapp er det brukt størrelse 16px for ikonene.
            <p />
            <HelpCircle size="16" />
            <ArrowRight size="16" />
            <XCircle size="16" />
          </Paragraph>
          <Paragraph>For hyperlenker er det brukt størrelse 14px.</Paragraph>
          <p />
          <AlertTriangle size="14" />
          <Lock size="14" />
          <Paragraph>
            <h3>Farger</h3>
            Ikonene er svg, og kan ha hvilken som helst farge fra{" "}
            <Link href="/palette">fargepaletten</Link>.
            <Paragraph>
              <HelpCircle size="16" color="#b3b3b3" />
              <ArrowRight size="16" color="#008eb0" />
              <XCircle size="16" color="#f04018" />
              <AlertTriangle size="16" color="#fce80d" />
              <Lock size="16" color="#ffdcdc" />
            </Paragraph>
          </Paragraph>
        </Col>
      </Row>
    </Layout>
  );
};

export default IconsPage;
