import Panel from './components/Panel';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import Works from './sections/Works';
import Feedback from './sections/Feedback';
import Contact from './sections/Contact';
import About from './sections/About';
import ChatHead from './components/ChatHead';

const LandingPage = () => {
  return (
    <>
      <Header hide='none' scheme='white'/>
      <Panel tag='main'>
        <Hero />
        <About />
        <Works />
        <Feedback />
        <Contact />
        <ChatHead />
      </Panel>
      <Footer />
    </>
  );
};

export default LandingPage;
