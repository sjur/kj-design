import React from "react";
import { Grid, Row, Col } from "react-flexbox-grid";

import SideBar from "./SideBar";
import Content from "./Content";

interface LayoutProps {
  children?: React.ReactNode;
  pageTitle?: string;
  noContentBox?: boolean;
}

const Layout = (props: LayoutProps) => {
  return (
    <Grid>
      <Row>
        <Col xl={2}>
          <SideBar />
        </Col>
        <Col xl={10}>
          <Content
            pageTitle={props.pageTitle}
            noContentBox={props.noContentBox || false}
          >
            {props.children}
          </Content>
        </Col>
      </Row>
    </Grid>
  );
};

export default Layout;
