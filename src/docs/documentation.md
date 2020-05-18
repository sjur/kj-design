# Dokumentasjon

## Introduksjon

Målet med dette redesignet var å modernisere KJ uten å gjøre for dramatiske endringer.

Følgende beskriver kort hva som har blitt gjennomført:

- Opprydning i bruk av fonter og farger.
- Tabellene har blitt redesignet for å gjøre innholdet mer leselig uten å ofre plass.
- Knapper og sidefaner har blitt redesignet.
- Informasjon i hovedbildet er flyttet rundt for å frigjøre plass på skjermen og gi mer fokus til viktige elementer.
- Det er gjort et komplett redesign av ett skjermbilde: Hovedbildet som møter brukeren ved oppslag på en pasient.

Resten av dokumentet går i detalj på de ulike elementene og hvordan de er designet. Dette er ment å danne utgangspunktet for videre design og implementering av nytt utseende. Målet er at det skal være enkelt for systemutviklere å lage ny funksjonalitet basert på denne designspesifikasjonen.

All kode er også tilgjengelig som React-komponenter på denne adressen: github...bla bla

## Tekst og fonter

Base font-size er 1rem (16px). Roboto Condensed brukes for Pasientnavn (tittel) og for overskrifter på alle informasjonskort. Source Sans Pro brukes for all annen tekst.
Letter-spacing for all tekst:

### Pasientnavn, tittel

Roboto Condensed  
font-size 1.125rem  
font-weight: normal  
letter-spacing: 0.0125rem  
color: #333333  
Brukes: Øverst på siden for pasientens navn  
Eksempel:

### h1

Roboto Condensed  
font-size 1.125rem  
font-weight: normal  
letter-spacing: 0.0125rem  
color: #333333  
Brukes: Som tittel på alle kort med pasientinformasjon og annen informasjon.  
Eksempel:

### h2

Source Sans Pro  
font-size: 0.875rem  
font-weight: normal  
letter-spacing: 0.0125rem  
color: #00637b  
text-transform: uppercase  
margin: 0 0 0.1rem;
Brukes: Som overskrift til seksjoner med informasjon, f.eks. en tabell, en paragraf, eller en liste med informasjon.  
Eksempel:

### body copy

Source Sans Pro  
font-size: 0.85rem  
letter-spacing: 0.0125rem  
colors: #333333, #b3b3b3
weights: 400, 700  
Brukes: All vanlig brødtekst og tabeller. Grå farge med fet skrift brukes for enkelte detaljer.  
Eksempel:

### Hyperlink

Source Sans Pro  
font-size: 0.85rem  
letter-spacing: 0.0125rem  
color: #008eb0
weight: 600
text-decoration: none
:hover {
text-decoration: underline
}  
Eksempel:

---

## farger

list swatches

---

## kort

Informasjon om pasienten er delt inn i seksjoner/kort. Et kort har i hovedsak en tittel, og alternativt en lenke med ikoner. Innholdet i kortet kan være hvilket som helst annet element, f.eks. en tabell, eller en adresseliste.  
Eksempel:

---

## tabell

Eksempel tabell med overskriftskolonne:  
Eksempel tabell uten overskriftskolonne:

---

### fanenavigasjon

---

### knapper

---

## ikoner

Alle ikoner brukt i redesignet er fra Google Material Icons, style baseline.
https://material.io/resources/icons/?style=baseline  
Eksempler på ikoner:  
Warning, Padlock  
Alle ikoner er SVG, og kan derfor fargelegges.  
Eksempler på fargede ikoner:

---

## Eksempel pasientjournal

Det er gjennomført et fullt redesign av hovedbildet i pasientjournalen. Dette bildet bruker alle elementer dokumentert i dette redesignet.  
Eksempel:
