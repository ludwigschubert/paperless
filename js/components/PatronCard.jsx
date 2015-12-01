import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import classNames from 'classnames';

let PatronCard = React.createClass({

  render() {
    return(
      <Col sm={6} className="patron-details">
        <center>
          <Image circle responsive className='patron-avatar-image' src={this.props.patron.avatarUrl || "http://jetsrant.com/wp-content/uploads/2012/03/anonymous_person-200x200.jpg"}/>
          <h2>{this.props.patron.name}</h2>
        </center>

        <Row>
          <Col sm={6} md={6}>
            <p>
              <Image src={require('../../img/gender@2x.png')} width="20px" display="inline-block" />
              &nbsp;
              Male
            </p>
          </Col>
          <Col sm={6} md={6}>
            <p>
              <Image src={require('../../img/weight@2x.png')} width="20px" display="inline-block" />
              &nbsp;
              174
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6}>
            <p>
              <Image src={require('../../img/eye-color@2x.png')} width="20px" display="inline-block" />
              &nbsp;
              Brown
            </p>
          </Col>
          <Col sm={6} md={6}>
            <p>
              <Image src={require('../../img/height@2x.png')} width="20px" height="20px" display="inline-block" />
              &nbsp;
              5&#39; 11&#34;
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}>
            <p>
              <Image src={require('../../img/address@2x.png')} width="20px" height="20px" display="inline-block" />
              &nbsp;
              566 Mayfield Ave, Stanford, CA 94305
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm={12} md={12}>
            <p>
              <Image src={require('../../img/license@2x.png')} width="20px" height="20px" display="inline-block" />
              &nbsp;
              Class C License
            </p>
          </Col>
        </Row>

        <hr />

        <Row>
          <Col sm={6} md={6}>
            <h4>Apply for driver&#39;s license</h4>
          </Col>
          <Col sm={3} md={3}>
            <div className="c100 p100 small" height="30px">
                <span>100%</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6}>
            <h4>Complete driver&#39;s test</h4>
          </Col>
          <Col sm={3} md={3}>
            <div className="c100 p100 small" height="30px">
                <span>100%</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col sm={6} md={6}>
            <h4>Renew driver&#39;s license</h4>
          </Col>
          <Col sm={3} md={3}>
            <div className="c100 p30 small" height="30px">
                <span>30%</span>
                <div className="slice">
                    <div className="bar"></div>
                    <div className="fill"></div>
                </div>
            </div>
          </Col>
        </Row>

      </Col>
    );

  }
});

export default PatronCard;