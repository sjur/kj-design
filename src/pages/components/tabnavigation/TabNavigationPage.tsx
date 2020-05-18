import React from "react";
import { Col, Row } from "react-flexbox-grid";
import TabNavigation from "../../../components/TabNavigation/TabNavigation";
import Layout from "../../../layout/Layout";

const TabNavigationPage = () => {
  return (
    <Layout pageTitle="Faner">
      <Row>
        <Col lg={12}>
          <TabNavigation documentation />
        </Col>
      </Row>
    </Layout>
  );
};

export default TabNavigationPage;
