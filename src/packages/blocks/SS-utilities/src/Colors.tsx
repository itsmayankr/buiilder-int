// Customizable Area Start

/* get colors */
export const colors = (idDark = false) => {
  const lightColors: any = {
    background: "#FFFFFF",
    primary: "#512DA8",
    text: "#121212",
    error: "#D32F2F",
    black: "#000",
    white: "#fff"
  };

  const darkColors: any = {};
  for (const colors in lightColors) {
    darkColors[colors] = lightColors[colors];
  }
  return idDark ? darkColors : lightColors;
};
// Customizable Area End
