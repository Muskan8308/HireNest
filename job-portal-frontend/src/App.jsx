import { createTheme, MantineProvider } from "@mantine/core";
import {Provider} from "react-redux"
import { Notifications } from "@mantine/notifications";
import '@mantine/carousel/styles.css';
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css"; 
import "./App.css";
import "@mantine/tiptap/styles.css";
import "@mantine/dates/styles.css";
import AppRoutes from "./Pages/AppRoutes";
import Store from "./Store";

function App() {
  // To use mantine color theme, we need to create an array of color palattes
  const theme = createTheme({
    focusRing: "never",
    primaryColor: "orient",
    primaryShade: 5,
    fontFamily: "poppins, sans-serif",
    colors: {
      "mine-shaft": [
        "#f6f6f6",
        "#e7e7e7",
        "#d1d1d1",
        "#b0b0b0",
        "#888888",
        "#6d6d6d",
        "#5d5d5d",
        "#4f4f4f",
        "#454545",
        "#3d3d3d",
        "#2d2d2d",
      ],
      orient: [
        "#f1fafe",
        "#e2f3fc",
        "#bfe8f8",
        "#86d5f3",
        "#45c0eb",
        "#1da8da",
        "#1088b9",
        "#0e6d96",
        "#105d7e",
        "#134c67",
        "#0d3144",
      ],
    },
  });

  return (
    <>
    <Provider store = {Store}>
      {/*  MantineProvider is used to provide Mantine styles and theming to the application */}
      <MantineProvider defaultColorScheme="dark" theme={theme}>
        <Notifications position="top-center" zIndex={1000} />
        <AppRoutes />
      </MantineProvider>
      </Provider>
    </>
  );
}

export default App;
