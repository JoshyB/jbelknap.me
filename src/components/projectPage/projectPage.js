import React, { Component } from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import "./projectPage.css";

class projectPage extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  goBack() {
    this.props.history.goBack();
  }

  render() {
    const {
      name,
      tools,
      about,
      images
    } = this.props.location.state.projectInfo;

    return (
      <ReactCSSTransitionGroup
        component="section"
        className="projectPage"
        transitionName="slide-up"
        transitionAppear={true}
        transitionAppearTimeout={400}
        transitionEnter={true}
        transitionEnterTimeout={400}
        transitionLeave={true}
        transitionLeaveTimeout={400}
      >
        <div className="project__page__container">
          <button onClick={this.goBack}>⬅ Go Back</button>
          <article className="project__page__body">
            <div className="image">
              <img
                src={images ? window.location.origin + images[0] : ""}
                alt=""
              />
            </div>
            <div className="project__text">
              <div className="tools__used">
                <p>{tools}</p>
              </div>
              <div className="project__title">
                <h1>{name}</h1>
              </div>
              <div className="about__project">
                <p>{about}</p>
              </div>
            </div>
          </article>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default projectPage;