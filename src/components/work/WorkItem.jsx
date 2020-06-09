import React, { Component } from "react";

class WorkItem extends Component {
  render() {
    return (
      <div className="col col-d-6 col-t-6 col-m-12 grid-item photo border-line-h">
        <div className="box-item">
          <div className="image">
            <a href={this.props.image} className="has-popup-image">
              <img src={this.props.image} alt="false" />
              <span className="info">
                <span className="ion ion-image" />
              </span>
            </a>
          </div>
          <div className="desc">
            <a href={this.props.image} className="name has-popup-image">
              {this.props.motorcycleHelmet}
            </a>
            <div className="category">{this.props.category}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkItem;
