import React from 'react';
import {Modal, Container, Col, Row, Form, Button} from 'react-bootstrap';
const fallback = "https://via.placeholder.com/300x442";

export default class MovieModal extends React.Component {
	constructor(props){
		super(props);
		const { show, title, year, director, posterUrl } = this.props;

		this.state = {
			show, title, year, director, posterUrl
		};
	}
	render(){
		const {id, onCancel, onSuccess, onDelete, edit } = this.props;
		const {  show, title, year, director, posterUrl } = this.state;
		return (
			<Modal show={show} aria-labelledby="contained-modal-title-vcenter">
				<Modal.Header>
				<Modal.Title id="contained-modal-title-vcenter">
				  {edit ? this.props.title : "New movie"}
				</Modal.Title>
				</Modal.Header>
				<Modal.Body>
				<Container>
				  <Row className="show-grid">
				    <Col xs={12} md={6}>
				      <img src={posterUrl || fallback} alt={title} onError={function(e){e.target.src = fallback}} className="poster"/>
				    </Col>
				    <Col xs={12} md={6}>
				      <Form>
				        <Form.Group controlId="">
				          <Form.Label>Movie Title</Form.Label>
				          <Form.Control type="text" name="title" value={title || ""} placeholder="Title of the movie" onChange={e=>this.setState({title: e.target.value})}/>
				        </Form.Group>
				        <Form.Group controlId="">
				          <Form.Label>Director</Form.Label>
				          <Form.Control type="text" name="director" value={director || ""} placeholder="Director of the movie" onChange={e=>this.setState({director: e.target.value})}/>
				        </Form.Group>
				        <Form.Group controlId="">
				          <Form.Label>Year</Form.Label>
				          <Form.Control type="number" min="1700" max="2020" name="year" value={year || 2019 } placeholder="Year of the movie" onChange={e=>this.setState({year: e.target.value})}/>
				        </Form.Group>
				        <Form.Group controlId="">
				          <Form.Label>Poster URL</Form.Label>
				          <Form.Control type="url" name="posterUrl" value={posterUrl || ""} placeholder="Poster URL" onChange={e=>this.setState({posterUrl: e.target.value})}/>
				        </Form.Group>
					</Form>
				    </Col>
				  </Row>
				</Container>
				</Modal.Body>
				<Modal.Footer>
					{ edit ? <Button variant="danger" onClick={()=>onDelete(id)}>Delete</Button> : null}
					<Button variant="warning" onClick={onCancel}>Cancel</Button>
					<Button variant="success" onClick={()=>onSuccess(id, {title, year, director, posterUrl })}>{ edit ? "Update" : "Create"}</Button>
				</Modal.Footer>
			</Modal>
		);
	}

}