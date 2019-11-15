import React from 'react';
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";
import logo from './logo.svg';
import './App.css';
import NewForm from "./NewForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome! Start Your Onboarding Here!</h1>
        <NewForm />
      </header>
    </div>
  );
}

export default App;
