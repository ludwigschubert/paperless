import React from 'react';
import Time from 'react-time'
import { Image, Col, Row, Panel, ProgressBar, Input, ButtonInput } from 'react-bootstrap';

let Task = React.createClass({

  render() {
    const task = this.props.task;
    const patron  = this.props.patron;

    const heading = task.type == "apply" ? "Application for a driver license" : "Driver license renewal";
    const header = (<h4>
      {heading}
      {task.isComplete ? " (complete)" : ''}
      <span className="panel-heading-extra text-muted">
        <Time value={task.createdAt} titleFormat="YYYY/MM/DD HH:mm:ss" relative />
      </span>
    </h4>);

    return(
      <Panel collapsible defaultExpanded={!task.isComplete} header={header}>
        <ProgressBar>
          <ProgressBar  bsStyle="success" now={35} key={1} />
          <ProgressBar striped bsStyle="warning" now={20} key={2} />
        </ProgressBar>
        <p>
          This renewal is <span className="label label-warning">awaiting DL image</span>. The remainder of this form is nonsensical.
        </p>
        <form>
          <Input type="text" label="Text" placeholder="Enter text" />
          <Input type="email" label="Email Address" placeholder="Enter email" />
          <Row>
            <Col sm={3}>
              <Image src={require("../../img/thumbnail@2x.png")} thumbnail responsive />
            </Col>
            <Col sm={9}>
              <Input type="checkbox" label="Checkbox" checked readOnly />
              <Input type="select" label="Select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </Input>
            </Col>
          </Row>
          <Input type="file" label="File" help="[Optional] Block level help text" />
          <Input type="radio" label="Radio" checked readOnly />
          <Input type="textarea" label="Text Area" placeholder="textarea" />
          <ButtonInput className="btn-primary" value="Button Input" />
          <ButtonInput type="reset" value="Reset Button" />
        </form>
      </Panel>
    );

  }
});

export default Task;