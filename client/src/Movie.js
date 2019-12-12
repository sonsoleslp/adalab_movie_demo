import React from 'react';
import {Col} from 'react-bootstrap';
const fallback = "https://via.placeholder.com/300x442";
export default class Movie extends React.Component {

	render(){

		const { title, posterUrl, onClick } = this.props;
		return (
			<Col className="movie animated zoomIn" xs={12} md={6} lg={3} xl={2} >
				<div onClick={onClick}>
					<img src={posterUrl} alt={title} onError={function(e){e.target.src = fallback}} className="poster"/>
					<p className="title">{title}</p>
				</div>
			</Col>
		);
	}
}