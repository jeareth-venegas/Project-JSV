import './App.css';
import React from 'react';
// import { students } from './students';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      students: {},
      isLoaded: false,
      id: 0,
      name: ''
    }
    
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('https://students.hasura.app/api/rest/students', {
      method: 'GET',
      headers: {
        'x-hasura-admin-secret': '733M3Tgq5IK2ALRXFSivpX86TGJX82goni63azRwZGCtVY1qN4t8521f1LE4iKxq'
      }
    }).then(response => response.json())
      .then(result => {
        this.setState({
          students: result.students,
          isLoaded: true
      })
    })
  }

  handleSubmit(event) {
    const id = this.state.id
    const name = this.state.name
    event.preventDefault()
    // const students = [...this.state.students, {"id": id, "name": name}]
    const newStudent = [...this.state.students, {
      "id": id, 
      "name": name
    }]
    //limpiar input
    this.setState({
      id: '',
      name: ''
    })
    //recorre el [i] para validar el id
    for(let i = 0; i < this.state.students.length; i++) {
      if(Number(id) === this.state.students[i].id){
        alert('El ID que añadió ya existe👀');
      }
    }
    this.setState({students: newStudent})
    // para que no entre un id vacío o con 0
    if(id === 0 || id === ''){
      alert('Proporciona un ID válido, por favor🥺');
    }
    //para que no entre un nombre vacío
    if(name === ''){
      alert('Proporciona un nombre válido, por favor🥺');
    }
  }


  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render(){
    const { students, isLoaded } = this.state
    return (
      <Layout>
        <Navbar/>

        <form onSubmit={this.handleSubmit}>
          <input value={this.state.id} type="number" name="id" placeholder="id" onChange={this.handleChange}></input>
          <input value={this.state.name} type="text" name="name" placeholder="name" onChange={this.handleChange}></input>
          <button type="submit" value="submit">Add student</button>
        </form>
        
        {!isLoaded ? <p>Loading...</p> : <List students={students} hoverable/>}
        <Footer />
      </Layout>
    );
  }
}

export default App;
