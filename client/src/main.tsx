import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add proper title
document.title = "SSN Consultancy - IT Consulting for Government Agencies";

createRoot(document.getElementById("root")!).render(<App />);
