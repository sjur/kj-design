import React from "react";
import Layout from "../../../layout/Layout";
import { Grid, Row, Col } from "react-flexbox-grid";
import PatientRecord from "../../../components/PatientRecord/PatientRecord";
import PatientCard from "../../../components/PatientCard/PatientCard";
import ContentTable from "../../../components/ContentTable/ContentTable";
import PatientLogoTable from "../../../images/kj_patient_logo_table.png";
import PatientDataSection, {
  SectionHeadline,
  Section,
} from "../../../components/PatientDataSection/PatientDataSection";
import Link from "../../../components/Link/Link";
import { ArrowLeft } from "react-feather";

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
  {
    icon: <img src={PatientLogoTable} />,
    type: "Implantat",
    details: "pacemaker",
    reactionType: "Medtronic Pacemaker modell Adapta - ADDRS2",
    verification: "opprettet: 10.01.2020",
  },
  {
    icon: <img src={PatientLogoTable} />,
    type: "Pasienten har reservert seg mot blodtransfusjon/blodprodukter",
    details: "",
    reactionType: "",
    verification: "oprettet: 15.01.2020",
  },
];
const aboutPatient = [
  {
    section: "Adresse",
    bolignummer: "Bolignummer H0201",
    gateadresse: "Sagmesterveien 61 B",
    postadresse: "3135 Lilleby",
  },
  {
    section: "Pårørende",
    antall: "pårørende registrert av pasient: 2",
    link: <Link>folkeregisteret</Link>,
  },
  {
    section: "Kommunikasjon",
    description: "pasienten har kommunikasjonsvansker",
  },
];
const patientConditions = [
  {
    condition: "Hjerterytmeforstyrrelse",
    year: "2013",
    description: "episode med hjertebank",
  },
  {
    condition: "Diabetes",
    year: "2008",
  },
  {
    condition: "Ankelbrudd",
    year: "2007",
    description: "Operert",
  },
  {
    condition: "Leddgikt (Bekhterev/RA)",
    year: "2005",
    description: "mye plager fra hender",
  },
];
const medicationsRequiringSpecialAttention = [
  {
    column1: "Legemiddel/gruppe",
    column2: "Legemiddel",
    column3: "Risiko/bivirkninger",
  },
  {
    column1: "Opioder",
    column2: "Paralgin Forte Tab 400 mg/30 mg",
    column3:
      "Avhengighet, døsighet, ustøhet og fall. Trafikkfarlig ved oppstart og doseøkning. Obstipasjon.",
  },
  {
    column1: "Kodein og paracetamol",
    column2: "Paralgin Forte Tab 400 mg/30 mg",
    column3:
      "Redusert effekt grunnet Påvist genetisk avvik i CYP-metabolismen: CYP2D6 *3/*3",
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
  {
    column1: "Insulatard FlexPen Inj væske, susp 100 IE/ml",
    column2: "Antall IE etter eget blodsukkerskjema fra lege",
    column3: "29.11.2019",
  },
  {
    column1: "Amlodipin Sandoz Tab 5 mg",
    column2: "BLODTRYUKKSMEDISIN 1 tablett daglig",
    column3: "20.11.2019",
  },
  {
    column1: "Trimetoprim Tab 160 mg",
    column2: "1 tablett 2 ganger daglig i 7 dager",
    column3: "10.11.2019",
  },
  {
    column1: "Legemiddelblanding basert på papirresept",
    column2: "Hostesaft 5ml ved sengetid",
    column3: "04.11.2019",
  },
  {
    column1: "Naproxen-E Mylan Enterotab 500 mg",
    column2: "1 tablett 2 ganger daglig",
    column3: "28.10.2019",
  },
  {
    column1: "Motilium Tab 10 mg",
    column2:
      "1 til 2 tabletter, 3 til 4 ganger per dag. Tas før måltid. Maks 8 tabl per 24 timer.",
    column3: "27.10.2019",
  },
  {
    column1: "Insulatard FlexPen Inj væske, susp 100 IE/ml",
    column2: "MOT DIABETES Antall IE etter eget blodsukkerskjema fra lege",
    column3: "29.07.2019",
  },
  {
    column1: "Insulatard FlexPen Inj væske, susp 100 IE/ml",
    column2: "MOT DIABETES Antall IE etter eget blodsukkerskjema fra lege",
    column3: "29.06.2019",
  },
];

const PatientRecordPage = () => {
  return (
    <Grid>
      <Row>
        <Col lg={12}>
          <p>
            <a href="/">
              <ArrowLeft size="12px" />
              Tilbake til designdokumentasjonen
            </a>
          </p>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <PatientRecord patient="Line Danser">
            <Row>
              <Col lg={9}>
                <PatientCard title="kritisk informasjon">
                  <ContentTable
                    data={criticalInformationData}
                    headerRow={false}
                  />
                </PatientCard>
                <PatientCard
                  title="legemidler"
                  headlineLink="hiddenMedication"
                  headlineLinkIcon="lock"
                >
                  <Section>
                    <SectionHeadline>
                      Legemidler som trenger spesiell oppmerksomhet (siste 12
                      måneder)
                    </SectionHeadline>
                    <ContentTable
                      data={medicationsRequiringSpecialAttention}
                      headerRow={true}
                    />
                  </Section>
                  <Section>
                    <SectionHeadline>Legemiddelhistorikk</SectionHeadline>
                    <ContentTable data={medicationHistory} headerRow={true} />
                  </Section>
                </PatientCard>
              </Col>
              <Col lg={3}>
                <PatientCard title="om pasienten">
                  <PatientDataSection data={aboutPatient} />
                </PatientCard>
                <PatientCard title="sykdommer registrert av pasient">
                  <PatientDataSection data={patientConditions} />
                </PatientCard>
              </Col>
            </Row>
          </PatientRecord>
        </Col>
      </Row>
    </Grid>
  );
};

export default PatientRecordPage;
