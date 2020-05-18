import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Components from "./pages/components/Components";
import PatientCardPage from "./pages/components/patientcard/PatientCardPage";
import PatientRecordPage from "./pages/components/patientrecord/PatientRecordPage";
import Home from "./pages/home/Home";
import Palette from "./pages/palette/Palette";
import Typography from "./pages/typography/Typography";
import ButtonPage from "./pages/components/button/ButtonPageNew";
import TabNavigationPage from "./pages/components/tabnavigation/TabNavigationPage";
import IconsPage from "./pages/components/icons/IconsPage";
import TablePage from "./pages/components/table/TablePage";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/palette" component={Palette} />
        <Route path="/typography" component={Typography} />
        <Route path="/components" component={Components} />
        <Route path="/button" component={ButtonPage} />
        <Route path="/tabnavigation" component={TabNavigationPage} />
        <Route path="/icons" component={IconsPage} />
        <Route path="/patientcard" component={PatientCardPage} />
        <Route path="/table" component={TablePage} />
        <Route path="/patientrecord" component={PatientRecordPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
