import React from 'react';
class AddInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      term: ''
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }
    changeHandler (e){
        e.preventDefault();
        this.setState({term: e.target.value})
        console.log(this.state.term)
    }
    clickHandler (e){
        e.preventDefault();
        // console.log(this.props)
        this.props.handleIt(this.state.term)
    }

  render (){
      return (
          <div>
              <form>
                  <input type='text' onChange={this.changeHandler}/>
                  <button onClick={this.clickHandler}>Add!!!</button>
              </form>
          </div>
      )
  }
};

export default AddInput;