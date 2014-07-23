"use strict";

var React = require('react/addons');

var Link = require('react-nested-router').Link;

var LinkTo = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]).isRequired,
    target: React.PropTypes.string.isRequired
  },
  render: function() {
    var cx = React.addons.classSet;
    var target = this.props.target;
    return this.transferPropsTo(
      <Link
        className={cx("ns-LinkTo", "ns-LinkTo--" + this.props.target)}
        to={target}>
        {this.props.children}
      </Link>
    );
  }
});

var Home = React.createClass({
  render: function() {
    return <LinkTo target="home">{this.props.children}</LinkTo>;
  }
});

var Projects = React.createClass({
  render: function() {
    return <LinkTo target="projects">{this.props.children}</LinkTo>;
  }
});

var Project = React.createClass({
  propTypes: {
    projectId:  React.PropTypes.string.isRequired
  },
  render: function() {
    var linkName = this.props.children || this.props.projectId;
    return <LinkTo target="project" projectId={this.props.projectId}>{linkName}</LinkTo>;
  }
});

var External = React.createClass({
  propTypes: {
    children: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    href: React.PropTypes.string.isRequired
  },
  render: function() {
    var linkName = this.props.children || this.props.href;
    return <a href={this.props.href}>X::{linkName}</a>;
  }
});

module.exports = {
  LinkTo: LinkTo,
  Home: Home,
  Projects: Projects,
  Project: Project,
  External: External
};