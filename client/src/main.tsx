import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' // Or your main stylesheet
import { BrowserRouter } from 'react-router-dom'

// The root element in your client/index.html
const rootElement = document.getElementById('root')

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      {/*
        Set the basename for React Router.
        This tells the router that the app is served from a subdirectory.
        All routes will now be relative to /ssn_website/.
        For example, a route defined as path="/" will match /ssn_website/,
        and a route defined as path="/about" will match /ssn_website/about.
      */}
      <BrowserRouter basename="/ssn_website/">
        <App />
      </BrowserRouter>
    </React.StrictMode>,
  )
} else {
  console.error("Failed to find the root element. Ensure your client/index.html has an element with id='root'.")
}
