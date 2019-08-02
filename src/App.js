import React, { useState } from 'react';
import './assets/css/App.css';
import { Alert, Button, Col, Row, notification, Input } from 'antd';
import ContentComment from './components/ContentComment';
import strings from './localization/localization';

const { Search } = Input;

function App() {

  const [visible, setVisible] = useState(true)

  const handleClick = () => {
    setVisible(false)
  }

  const close = () => {
    console.log(
      'Notification was closed. Either the close button was clicked or duration time elapsed.',
    );
  };

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <React.Fragment>
        <Search
          style={{
            marginTop: 10
          }}
          className="email-address"
          placeholder="Email Address"
          enterButton="Count Me In"
          size="large"
          onSearch={() => notification.close(key)}
        />
      </React.Fragment>
    )

    const args = {
      message: 'Get latest updates in web technologies',
      description:
        'I write articles related to web technologies, such as design trends, development tools, UI/UX case studies and reviews, and more. Sign up to my newsletter to get them all.',
      duration: 0,
      placement: 'bottomLeft',
      btn,
      key,
      onClose: close,
    };
    notification.open(args);
  };

  const content = [
    {
      icon: <i className="far fa-comments" style={{
        fontSize: 16,
        color: '#959697'
      }}></i>,
      name: 'Consult',
      text: 'Co-create, design thinking; strengthen infrastructure resist granular. Revolution circular, movements or framework social impact low-hanging fruit. Save the world compelling revolutionary progress.'
    },
    {
      icon: <i className="fas fa-paint-brush" style={{
        fontSize: 16,
        color: '#959697'
      }}></i>,
      name: 'Design',
      text: ' Policymaker collaborates collective impact humanitarian shared value vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile issue outcomes vibrant boots on the ground sustainable.'
    },
    {
      icon: <i className="fas fa-cubes" style={{
        fontSize: 16,
        color: '#959697'
      }}></i>,
      name: 'Develop',
      text: 'Revolutionary circular, movements a or impact framework social impact low-hanging. Save the compelling revolutionary inspire progress. Collective impacts and challenges for opportunities of thought provoking.'
    },
    {
      icon: <i className="fas fa-bullhorn" style={{
        fontSize: 16,
        color: '#959697'
      }}></i>,
      name: 'Marketing',
      text: 'Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile,replicable, effective altruism youth. Mobilize commitment to overcomeinjustice resilient, uplift social transparent effective.'
    },
    {
      icon: <i className="fas fa-tasks" style={{
        fontSize: 16,
        color: '#959697'
      }}></i>,
      name: 'Manage',
      text: 'Change-makers innovation or shared unit of analysis. Overcome injustice outcomes strategize vibrant boots on the ground sustainable. Optimism, effective altruism invest optimism corporate social.'
    },
    {
      icon: <i className="fas fa-chart-line" style={{
        fontSize: 16,
        color: '#959697'
      }}></i>,
      name: 'Evolve',
      text: 'Activate catalyze and impact contextualize humanitarian. Unit of analysis overcome injustice storytelling altruism. Thought leadership mass incarceration. Outcomes big data, fairness, social game-changer.'
    }
  ]

  const styleAlertImage = {
    height: 50,
    position: "absolute",
    top: "9%",
    left: "13px",
    transform: "translate(14px, 38px)"
  }

  const notification_panel = strings.formatString(
    strings.notification_panel,
    <a href="/">{"Cookie Policy"}</a>,
    <a href="/">{"Privacy Policy"}</a>,
    <a href="/">{"Term of Service"}</a>
  );
  return (
    <React.Fragment>
      <div className="App">
        {visible &&
          <div className="alert-notif">
            <Alert
              message={notification_panel}
              type="success"
              closeText={<Button className="alert-notif__button" onClick={handleClick}>{strings.got_it}</Button>}
            />
          </div>}
        <div className="bg-image" />
        {visible === true ?
          <img src={require("./assets/img/y-logo-white.png")}
            style={styleAlertImage} alt="" /> :
          <img src={require("./assets/img/y-logo-white.png")} style={{
            height: 50,
            margin: "10px 0px 0px 10px",
            position: "absolute",
            top: 0
          }} alt="" />
        }
        <div className="bg-text">
          <h5>{strings.my_name_is}</h5>
          <b>{strings.my_jobs}</b>
          <p>{strings.contact_me}</p>
          <Button className="content__button">Let's Make Contact</Button>
        </div>
      </div>
      <div className="content-icant-help-you">
        <Row style={{ paddingTop: 30 }}>
          <Col md={7} />
          <Col md={10}>
            <div className="content-icant-text">
              <h5>How Can I Help You?</h5>
              <span>{strings.help_you_paragraph}</span>
            </div>
          </Col>
          <Col md={7} />
        </Row>
        <Row style={{ marginTop: 30 }}>
          <ContentComment data={content} />
        </Row>
      </div>
      <footer>
        <p> &copy; 2018 Putra Irawan All rights reserved.</p>
        {visible === false ? "" : openNotification()}
      </footer>
    </React.Fragment>
  );
}

export default App;
