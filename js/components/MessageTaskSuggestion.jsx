import React from 'react';
import ParseReact from 'parse-react';
import Time from 'react-time'
import PostalReactMixin from '../vendor/postal-react-mixin.js';
import { Link } from 'react-router';
import { Image, Alert, Button } from 'react-bootstrap';


let MessageTaskSuggestion = React.createClass({
  mixins: [PostalReactMixin],

  getInitialState() {
    return { suggestionPerformed: false };
  },

  _notifyApply: function() {
    this.publish('messageSuggestion', {
      text: "Hi " + this.props.patron.name + "! It looks to us like you already have a driver license. Maybe you have lost it or you need a renewal?"
    });
    this.setState({ suggestionPerformed: true });
  },

  _notifyRenew: function() {
    this.publish('messageSuggestion', {
      text: "Hi " + this.props.patron.name + "! Sure, we can help you renew your driver license. First, can you send us an image of your current driver license?"
    });
    this.setState({ suggestionPerformed: true });
    ParseReact.Mutation.Create('Task', {
      type: 'renew',
      isComplete: false,
      patron: this.props.patron
    }).dispatch();
  },

  render() {
    const task = this.props.task;
    var taskSuggestion;
    switch (task) {
      case "apply":
        if (this.state.suggestionPerformed) {
          taskSuggestion = <div>
            <p>
              You let {this.props.patron.name} know they already have a driver license.
            </p>
            <p>
              <Button disabled>
                Let them know?
              </Button>
              <Image className="buttonIcon" src={require('../../img/check@2x.png')} width="24px" />
            </p>
          </div>
        } else {
          taskSuggestion = <div>
            <p>
              It looks like {this.props.patron.name} wants to
              &nbsp;
              <em>apply for a driver license</em>
              , but they already have a driver license.
            </p>
            <p>
              <Button onClick={this._notifyApply}>
                Let them know?
              </Button>
            </p>
          </div>
        }
        break;
      case "renew":
        if (this.state.suggestionPerformed) {
          taskSuggestion = <div>
            <p>
              You started renewing a driver license for {this.props.patron.name}.
            </p>
            <p>
              <Button disabled>
                Renew driver license?
              </Button>
              <Image className="buttonIcon" src={require('../../img/check@2x.png')} width="24px" />
            </p>
          </div>
        } else {
          taskSuggestion = <div>
            <p>
              It looks like {this.props.patron.name} wants to <em>renew a driver license</em>.
            </p>
            <p>
              <Button onClick={this._notifyRenew}>
                Renew driver license?
              </Button>
            </p>
          </div>
        }
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