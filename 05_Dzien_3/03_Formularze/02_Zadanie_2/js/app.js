import React from "react";
import { createRoot } from "react-dom/client";
import Form from "./Form";


const App = () => <Form />
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);