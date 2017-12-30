import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import List from './components/List.jsx';
import AddInput from './components/AddInput.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      items: []
    }
    this.handleIt = this.handleIt.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.remove = this.remove.bind(this);
  }

remove (item){
  axios({
        method: 'DELETE',
        url: '/remove',
        data: {
          item
        }
      })
  .then((response) => {
    this.componentDidMount()
  })
  .catch(function(error){
    console.log(error)    
  })
}

handleIt(item){
  console.log('the in post handler');
  console.log('ITEM : ', item);

  axios.post('/addIt', {
    item: item
  })
  .then((response) => {
    this.componentDidMount()
  })
  .catch( (error) =>{
    console.log(error);
  });
}

  componentDidMount() {
    
    axios.get('/items')
    .then( (response) =>{
      console.log('Working');
      this.setState({items: response.data})
      console.log(this.state.items);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (<div>
      <h1>Item List</h1>
      <AddInput handleIt={this.handleIt}/>
      {/*{console.log(this.state.items)}*/}
      <List items={this.state.items} remove={this.remove}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));