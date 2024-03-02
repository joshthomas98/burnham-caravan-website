import "./App.css";
import Navbar from "./Common/Navbar/Navbar";
import Home from "./Components/pages/Home";
import About from "./Components/About/About";
import Gallery from "./Components/gallery/Gallery";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SinglePage from "./SinglePage/SinglePage";

import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import Footer from "./Common/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/singlepage/:id" component={SinglePage} />
          <Route path="/testimonial" component={Testimonial} />
          <Route path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
