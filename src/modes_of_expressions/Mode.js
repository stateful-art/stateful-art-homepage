export const ExpressionMode = (mode, artwork, fontName) => {
  
    switch (mode) {
    case "kahlo":
      return {
        name: "kahlo",
        artwork: artwork,
        font: fontName,
      };
    case "picasso":
      return {
        name: "picasso",
        artwork: artwork,
        font: fontName,
      };

    default:
      return {
        name: "daVinci",
        artwork: artwork, //
        font: fontName,
      };
  }
};
