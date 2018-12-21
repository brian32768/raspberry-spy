import React from 'react'
import {Card, CardTitle, CardText, CardImg, CardSubtitle} from 'reactstrap'

const img = require('/assets/pigeon_reading_map.jpg');
const alt = 'Pigeon reading map';

const NotFound = (props) => (
    <div>
      <Card className="card">
        <CardImg className="card_image" width="100%" src={img} alt={alt}></CardImg>
        <CardTitle>
          404 error; are you lost?
        </CardTitle>
        <CardText>
          There is no destination attached to the URL you requested.
        </CardText>
      </Card>
    </div>
)
export default NotFound;
