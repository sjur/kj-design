import React from "react";
import styled from "styled-components";
import Layout from "../../layout/Layout";
import Paragraph from "../../components/Paragraph/Paragraph";
import Link from "../../components/Link/Link";
const Footer = styled.div`
  text-align: right;
  font-size: 12px;
  color: #666666;
  font-style: italic;
`;

const Home = () => {
  return (
    <Layout pageTitle="Kjernejournal redesign og dokumentasjon">
      <h1>Introduksjon</h1>
      <Paragraph>
        Målet med dette redesignet var å modernisere KJ uten å gjøre dramatiske
        endringer.
        <br />
        Følgende beskriver kort hva som har blitt gjennomført:
        <ul>
          <li>Opprydning i bruk av fonter og farger.</li>
          <li>
            Tabellene har blitt redesignet for å gjøre innholdet mer leselig
            uten å ofre plass.
          </li>
          <li>Knapper og sidefaner har blitt redesignet.</li>
          <li>
            Informasjon i hovedbildet er flyttet rundt for å frigjøre plass på
            skjermen og gi mer fokus til viktige elementer.
          </li>
          <li>
            Det er gjort et komplett redesign av ett skjermbilde:{" "}
            <Link href="/patientrecord">Hovedbildet som møter brukeren</Link>{" "}
            ved oppslag på en pasient.
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        <strong>
          Merk: Prototypen og designdokumentasjonen er kun testet i Chrome.
        </strong>
      </Paragraph>
      <Paragraph>
        Bruk menyen til venstre for å se detaljert dokumentasjon på de ulike
        elementene, og en komplett versjon av forsiden til en pasient.
        <br />
        <br />
        Dette er ment å danne utgangspunkt for videre design og implementering
        av nytt utseende.
        <br />
        Målet er at det skal være enkelt for systemutviklere å lage ny
        funksjonalitet basert på denne designspesifikasjonen.
        <br />
        <br />
        Designelementene er også tilgjengelig som React-komponenter på github:{" "}
        <Link href="https://github.com/sjur/kj-design" target="_blank">
          https://github.com/sjur/kj-design
        </Link>
      </Paragraph>
      <Footer>Versjon 1.0.0 18.05.2020 @sjurs</Footer>
    </Layout>
  );
};

export default Home;
