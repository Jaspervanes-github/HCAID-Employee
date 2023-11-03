import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Route, Routes } from "react-router-dom";
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

import { Component } from 'react';
import Home from "./pages/Home";
import NoPage from './pages/NoPage';
import Predict from './pages/Predict';
import HowItWorks from './pages/HowItWorks';
import Feedback from './pages/Feedback';


const theme = createTheme({
  palette: {
    primary: {
      main: "#2e1667",
    },
    secondary: {
      main: "#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
    },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  }
});

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
      <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      limit={3}
      />        
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/Predict" element={<Predict />} />
            <Route exact path="/HowItWorks" element={<HowItWorks />} />
            <Route exact path="/Feedback" element={<Feedback />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </ThemeProvider>
    );
  }
}

