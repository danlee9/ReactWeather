var React = require('react');
var {IndexLink, Link} = require('react-router');

var Nav = () => {
	return (
		<div>
			<h2>Nav Component</h2>
			<IndexLink activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/">Get Weather </IndexLink>
			<Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/about">About </Link>
			<Link activeClassName="active" activeStyle={{fontWeight: 'bold'}} to="/examples">Examples </Link>
		</div>
	);
};

module.exports = Nav;