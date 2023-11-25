import React from "react";

// Customizable Area Start
import {
  Container,
  Box,
} from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";

// Customizable Area End

import EmailAccountLoginController, {
  Props,
} from "./EmailAccountLoginController";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0000ff",
      contrastText: "#fff",
    },
  },
});

export default class EmailAccountLoginBlock extends EmailAccountLoginController {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      // Required for all blocks
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px 0px",
            }}
          >

            <Box sx={{ width: "100%", paddingTop: "20px" }}>
              <Box sx={{ padding: "20px 0px" }}>
              </Box>
              <Box sx={{ padding: "20px 0px" }}>
              </Box>
              <Box
                sx={{
                  fontSize: "18px",
                  color: "#6200EE",
                  fontWeight: "bold",
                  marginTop: "5px",
                }}
              >
                Remember Me
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px 0px",
                }}
              >
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "10px 0px",
                }}
              >
              </Box>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
}
