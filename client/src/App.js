import React from 'react';
import './App.css';
import {Container, Navbar, Nav, Form, FormControl, Button, Row} from 'react-bootstrap';
import Movie from './Movie';
import MovieModal from './MovieModal';

const URL = "http://localhost:3000/movies";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      err: undefined,
      director: "",
      selectedMovie: -1
    };
  }

  render() {
    const {movies, err, selectedMovie} = this.state;
    return (<div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Movie Database</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Form inline>
            <FormControl type="number" placeholder="From" className="mr-sm-2" onChange={(e)=>this.setState({yearAfter: e.target.value})}/>
            <FormControl type="number" placeholder="To" className="mr-sm-2" onChange={(e)=>this.setState({yearBefore: e.target.value})}/>
            <FormControl type="text" placeholder="Director" className="mr-sm-2" onChange={(e)=>this.setState({director: e.target.value})}/>
            <Button variant="outline-success" type="button" onClick={this.search}>Search</Button>&nbsp;
            <Button type="button" variant="success" onClick={()=>{this.setState({selectedMovie: -2})}}>New</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Container fluid>
      <Row>
        {(!err && movies && movies.length > 0) ? (movies.map((movie, selectedMovie)=><Movie key={movie.id} {...movie} onClick={()=>{this.setState({selectedMovie})}} />)) : null }
        {(!err && movies && movies.length === 0) ? (<img src={process.env.PUBLIC_URL + "/spinner.svg"} alt="spinner" className="spinner"/>) : null }
        { err ? <div class="error">{err}</div> : null}
      </Row>
    </Container>
    {selectedMovie !== -1 ? <MovieModal show edit={selectedMovie !== -2} {...movies[selectedMovie]}
      onDelete={(id)=>{this.setState({selectedMovie: -1}); this.delete(id);}}
      onCancel={()=>{this.setState({selectedMovie: -1})}}
      onSuccess={(id, state)=>{this.setState({selectedMovie: -1}); this.edit(id, state);}}
    /> : null}
    </div>);
  }

   search = async () => {
    let query = "?";
    if (this.state.director) {
      query += "director="+ this.state.director + "&";
    }
    if (this.state.yearBefore) {
      query += "yearBefore="+ this.state.yearBefore + "&";
    }
    if (this.state.yearAfter) {
      query += "yearAfter="+ this.state.yearAfter + "&";
    }

    try {
      const movies = await (await fetch(URL+query)).json();
      this.setState({movies, err: (movies && movies.length > 0)? undefined : "No results"});
    } catch(err) {
      this.setState({err: "Error when retrieving movies from server"});
    }
  }

  edit = async (id, state) => {
    if (id) {
      try {
        await (await fetch(URL + "/" + id +"?_method=PUT", 
          {
            method: 'POST', 
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(state)
          })
          ).json();

        await this.search();
      } catch(err) {
        this.setState({err: "Error when updating movie"});
      }
    } else {
      await this.create(state)
    }   
  }

  create = async (state) => {
    try {
      await (await fetch(URL, 
        {
          method: 'POST', 
          headers:{
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(state)
        })
        ).json();

      await this.search();
    } catch(err) {
      this.setState({err: "Error when creating movie"});
    }
  }

  delete = async (id) => {
    try {
      await fetch(URL + "/" + id +"?_method=DELETE", 
        {
          method: 'POST', 
          headers:{
              'Content-Type': 'application/json'
          }
        })

      await this.search();
    } catch(err) {
      this.setState({err: "Error when deleting movie"});
    }
  }

  async componentDidMount() {
    await this.search();
  }


}
