import React from 'react';
import './fontello/css/fontello.css';
import './App.css';
import "animate.css/animate.min.css";
import Grid from './components/Grid';
import Col from './components/Col';
import Row from './components/Row';
import logo from './assets/logo.svg';
import mini_logo from './assets/mini_logo.svg';
import Button from './components/Button';
import Spacer from './components/Spacer';
import InnerRow from './components/InnerRow';
import TextCol from './components/TextCol';
import vcard from './vcard.vcf';
import ScrollAnimation from 'react-animate-on-scroll';



function App() {

  return (
    <Grid>
    <Row>

      <Col size={2} collapse="xs"></Col>

  <Col className="main_col" size={4}>



        <Row>

        <img alt="logo" className="logo" src={logo}/>

        </Row>



        <Spacer height={5} />

        <Row padding={"0 10% 0 10%"}>

      <Col size={1}><a className="button_link" href={vcard} target="_blank" rel="noopener noreferrer">
      <ScrollAnimation duration={4} animateIn="fadeIn">
        <Button className="button">
          <i className="icon-user-add icon"/>
        </Button>
        </ScrollAnimation>
        </a></Col>

    <Col size={1}><a className="icon-mail icon" href="mailto:info@miomideal.com" target="_blank" rel="noopener noreferrer">
    <ScrollAnimation duration={3} animateIn="fadeIn">
      <Button className="button">
        <i className="icon-mail-alt icon"/>
      </Button>
      </ScrollAnimation>
      </a></Col>


  </Row>

{/* here's where the header ends & the content grows */}
<ScrollAnimation duration={2} animateIn="fadeIn">
        <Row height={20}><Col className="zusatz" size={1}>Designed with <span role="img" aria-label="jsx-a11y/accessible-emoji">❤️</span> Based in Saarbrücken</Col></Row>
        </ScrollAnimation>
{/* Firmbrand */}
<ScrollAnimation duration={2} animateIn="fadeIn">
<InnerRow>
          <Col size={1}><i className="icon-briefcase icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}>Mio Mideal <br/> Achim Hein Pascal Schoenen Gbr </Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>

        </ScrollAnimation>

        <Spacer height={10} />

        <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-user icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}>Achim Hein</Col>
            </Row>
            <Row>
              <Col size={1}>Designer</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

        <Spacer height={5} />

        <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-phone icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}><a className="button_link" href="tel:+4917647696673">+49 176 47 68 66 73</a></Col>
            </Row>
            <Row>
              <Col size={1}>Phone</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

        <Spacer height={10} />

        <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-user icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}>Pascal Schoenen</Col>
            </Row>
            <Row>
              <Col size={1}>Designer</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

        <Spacer height={5} />

        <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-phone icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}><a className="button_link" href="tel:+4915227105703">+49 15 22 7 105 703</a></Col>
            </Row>
            <Row>
              <Col size={1}>Phone</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>

        <Spacer height={10} />

        <ScrollAnimation duration={2} animateIn="fadeIn">
        <InnerRow>
          <Col size={1}><i className="icon-mail-alt icon"/></Col>
          <TextCol size={6}>
            <Row>
              <Col size={1}><a className="button_link" href="mailto:info@miomideal.com">info@miomideal.com</a></Col>
            </Row>
            <Row>
              <Col size={1}>E-Mail</Col>
            </Row>
          </TextCol>
          <Col size={1}></Col>
        </InnerRow>
        </ScrollAnimation>


        <Spacer height={10} />
        <InnerRow><Col className="minilogo" size={1}><img className="minilogo" width="10%" src={mini_logo} alt="bildmarke visio" /></Col></InnerRow>

  </Col>

      <Col size={2} collapse="xs"></Col>
</Row>
</Grid>
  );
}

export default App;
