// about.js raspberry-spy
//
import React, {Component} from 'react';
import {Card, CardTitle, CardText, CardImg, CardSubtitle} from 'reactstrap';

export default class About extends Component {
    render() {
        let props = this.props;
        return (
            <div >
              <Card>
              <CardTitle>
                About Raspberry Spy
              </CardTitle>
              <CardText>
                More description goes here.
              </CardText>
              </Card>
            </div>
        );
    }
}
