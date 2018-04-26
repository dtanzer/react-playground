import React from 'react';
import { connect } from 'react-redux';

export class Square extends React.PureComponent {
	render() {
		return (
			<rect x={this.props.x} y={this.props.y} width={50} height={50} className="square" />
		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		x: state.getIn(['squares', ownProps.id, 'x']),
		y: state.getIn(['squares', ownProps.id, 'y']),
	};
}

export const SquareContainer = connect(mapStateToProps)(Square);
