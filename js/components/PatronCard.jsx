import React from 'react';
import { Row, Col, Image, Button, ButtonToolbar, Collapse } from 'react-bootstrap';
import classNames from 'classnames';

import TasksList from './TasksList.jsx'

let PatronCard = React.createClass({

  getInitialState: function() {
    return {
      patronDetailsActive: true,
      taskListActive: true
    }
  },

  _toggleTaskList: function() {
    this.setState({ taskListActive: !this.state.taskListActive });
  },

  _togglePatronDetail: function() {
    this.setState({ patronDetailsActive: !this.state.patronDetailsActive });
  },

  render() {
    return(
      <Col sm={6} className="patron-card">

        <Row className="row-separator" onClick={this._togglePatronDetail}>
          <span>Patron Record</span>
          <Button className="btn-edit btn-xs pull-right">
            Edit
          </Button>
        </Row>

        <Collapse in={this.state.patronDetailsActive}>
          <div>
          <Row className="patron-details">

            <Col sm={3} md={3}>
              <Image circle responsive className='patron-avatar-image' src={this.props.patron.avatarUrl || require("../../img/patron@2x.png")}/>
            </Col>

            <Col sm={9} md={9}>
              <Col sm={9} md={9}>
                <h5>{this.props.patron.name}</h5>
                <p className="text-muted">{this.props.patron.phoneNumber}</p>
              </Col>
              <Col sm={3} md={3}>

              </Col>
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
                  142
                </p>
              </Col>
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
              <Col sm={6} md={6}>
                <p>
                  <Image src={require('../../img/license@2x.png')} width="20px" height="20px" display="inline-block" />
                  &nbsp;
                  Class C License
                </p>
              </Col>
              <Col sm={12} md={12}>
                <p>
                  <Image src={require('../../img/address@2x.png')} width="20px" height="20px" display="inline-block" />
                  &nbsp;
                  566 Mayfield Ave, Stanford, CA 94305
                </p>
              </Col>

            </Col>
          </Row>
          </div>
        </Collapse>

        <Row className="row-separator row-separator-middle" onClick={this._toggleTaskList}>
          <span>Patron Tasks</span>
          <ButtonToolbar className="pull-right">
          </ButtonToolbar>
        </Row>

        <Collapse in={this.state.taskListActive}>
          <Row>
            <TasksList patron={this.props.patron} />
          </Row>
        </Collapse>

      </Col>
    );

  }
});

export default PatronCard;