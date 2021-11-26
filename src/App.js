import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import CourseDetails from './components/CourseDetails/CourseDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
           <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/courses">
            <Courses />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/course-details/:courseDetailsID">
            <CourseDetails />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router> 
    </div>
  );
};

export default App;
