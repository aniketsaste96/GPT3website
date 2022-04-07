import './App.css';
import { Article, Brand, Cta, Navbar, Feature } from "./components";
import { Blog, Features, Header, Footer, Possibility, WhatGTP3 } from "./containers";
function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGTP3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
