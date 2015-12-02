import React from 'react';
import Parse from 'parse';
import ParseReact from 'parse-react';
import PUBNUP from 'pubnub';

import { Row, Col, PanelGroup } from 'react-bootstrap';
import Task from './Task.jsx';

let TasksList = React.createClass({
  mixins: [ParseReact.Mixin], // Enable query subscriptions

  observe: function(props, state) {
    return {
      tasks: (new Parse.Query('Task')).equalTo('patron', props.patron).ascending('createdAt')
    };
  },

  render() {
    const patron = this.props.patron;

    return(
      <Col sm={12} className="tasks-list-container" id="tasks-list-container">
        <PanelGroup>
          {this.data.tasks.map( function(task) {
            return <Task key={task.id} task={task} patron={patron}/>;
          })}
        </PanelGroup>
      </Col>
    );

  }
});

export default TasksList;