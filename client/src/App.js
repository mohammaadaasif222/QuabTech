import "./App.css";
import Footer from "./components/footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import JobDetails from "./screens/JobDetails";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";

import React from "react";

function App() {
  return (
    <Router>
      <Header />
      <main className="my-3">
        <Container>
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/job/:id" component={JobDetails} />
          <Route path="/" component={HomeScreen} exact />
        </Container>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
