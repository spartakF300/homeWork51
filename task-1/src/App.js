import React from 'react';
import './App.css';
import Header from "./Companents/Header/header";
import './Companents/Header/Header.css'
import Page_top from "./Companents/Page_top/Page_top";
import './Companents/Page_top/Page_top.css'
import Content from "./Companents/Content/Content";
import './Companents/Content/Content.css'
import Footer from "./Companents/Footer/Footer";
import './Companents/Footer/Footer.css'
function App() {
  return (
    <div className="App">
<Header/>
<Page_top/>
<Content/>
<Footer/>
    </div>
  );
}

export default App;
