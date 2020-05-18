import palette from "./colors";

const fonts = {
  h1: {
    typeface: "PT Sans Narrow 19 (1.1875rem)",
    colors: [palette.c100],
    weights: ["regular"],
    styles: ["normal"],
    "letter-spacing": "0.0125rem",
    usage: ["headline"]
  },
  h2: {
    typeface: "Source Sans Pro 16 (1rem)",
    colors: [palette.c100],
    weights: ["regular"],
    styles: ["normal"],
    "letter-spacing": "0.0125rem",
    usage: ["headline"]
  },
  body: {
    typeface: "Source Sans Pro 13 (0.8125rem)",
    colors: [
      palette.c000,
      palette.c100,
      palette.c200,
      palette.c500,
      palette.c800
    ],
    weights: ["regular", "bold"],
    styles: ["normal", "italic"],
    "letter-spacing": "0.0125rem",
    usage: ["body copy", "hyperlink", "label"]
  }
};

export default fonts;
