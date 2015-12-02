import React from 'react';
import Time from 'react-time'
import Reactions from '../vendor/flux-reactions.js';
import { Link } from 'react-router';
import { Image, Alert, Button } from 'react-bootstrap';


let MessageTaskSuggestion = React.createClass({
  mixins: [Reactions.mixin],

  getInitialState() {
    return { suggestionPerformed: false };
  },

  // _notifyApply: function() {
  //   console.log(this);
  //   this.publish('messageSuggestion', "Hi " + this.props.patron.name + "! It looks to us like you already have a driver license. Maybe you have lost it or you need a renewal?");
  // },
  //
  // _notifyRenew: function() {
  //   this.publish('messageSuggestion', "Hi " + this.props.patron.name + "! Sure, we can help you renew your driver license. First, can you send us an image of your current driver license?");
  // },

  render() {
    const task = this.props.task;
    var taskSuggestion;
    switch (task) {
      case "apply":
        taskSuggestion = <div>
            <p>
              It looks like {this.props.patron.name} wants to
              &nbsp;
              <em>apply for a driver license</em>
              , but they already have a driver license.
            </p>
            <p>
              <Button onClick={this.thenTrigger("taskSuggestion", "apply")}>
                Let them know?
              </Button>
            </p>
          </div>
        break;
      case "renew":
        taskSuggestion = <div>
          <p>
            It looks like {this.props.patron.name} wants to <em>renew a driver license</em>.
          </p>
          <p>
            <Button onClick={this.thenTrigger("taskSuggestion", "renew")}>
              Renew driver license?
            </Button>
          </p>
          </div>
        break;

    }

    return(
      <div>
        <div className="message-task-suggestion">
          {taskSuggestion}
          <small className="text-muted">
            {"This is an automatic suggestion. "}
            <a>
              Let us know if it is wrong.
            </a>
          </small>
        </div>
      </div>
    );

  }
});

export default MessageTaskSuggestion;