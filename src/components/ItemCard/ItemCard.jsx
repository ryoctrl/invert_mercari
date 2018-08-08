import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardPrimaryAction,
  CardMedia,
  CardAction,
  CardActions,
  CardActionButtons
} from "rmwc/Card";

import "material-components-web/dist/material-components-web.min.css";
import "./ItemCard.css";
import { Typography } from "rmwc/Typography";

export default class ItemCard extends Component {
  render() {
    return (
      <div className="ItemCard">
        <Card
          style={{
            width: "21rem"
          }}
        >
          <CardPrimaryAction>
            {this.props.showImage ? (
              <CardMedia
                sixteenByNine
                style={{
                  backgroundImage:
                    "url(https://material-components-web.appspot.com/images/16-9.jpg)"
                }}
              />
            ) : (
              ""
            )}

            <div
              style={{
                padding: "0 1rem 1rem 1rem"
              }}
            >
              <Typography use="headline6" tag="h2">
                {this.props.productName}
              </Typography>
              <Typography
                use="subtitle2"
                tag="h3"
                theme="text-secondary-on-background"
                style={{
                  marginTop: "-1rem"
                }}
              >
                ¥ {this.props.price}
              </Typography>

              <Typography
                use="subtitle2"
                tag="h4"
                theme="text-secondary-on-background"
                style={{
                  marginTop: "-1rem"
                }}
              >
                by {this.props.userName}
              </Typography>
              <Typography
                use="body1"
                tag="div"
                theme="text-secondary-on-background"
              >
                {this.props.description}
              </Typography>
            </div>
          </CardPrimaryAction>
          <CardActions>
            <Link
              to={
                "/AuctionPage/" +
                this.props.userName +
                "/" +
                this.props.productName
              }
            >
              <CardActionButtons>
                <CardAction>About</CardAction>
              </CardActionButtons>
            </Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}
