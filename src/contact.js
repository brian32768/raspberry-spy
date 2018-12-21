import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody,
         CardTitle, CardSubtitle, Button } from 'reactstrap'

const img = require('/assets/Proud.jpg');
const alt = 'This is a pigeon';

export default class Contact extends Component {
    render() {
        return (
            <div>
              <Card >
                <CardImg className="card_image" src={img} alt={alt}></CardImg>
                <CardBody>
                  <CardTitle>Contact us</CardTitle>
                  <CardText>
                    Send me email at <a href="mailto:brian@wildsong.biz">brian@wildsong.biz</a>
                  </CardText>
                </CardBody>
              </Card>
            </div>
        );
    }
}
