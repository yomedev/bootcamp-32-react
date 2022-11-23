import { Component } from "react"

// EventListener -> click

/*
{
  'minus': () => {log('minus)}
  'plus': () => {log('plus)}
}
 */

// x -> x


export class Counter extends Component {

  state = {
    counter: this.props.defaultValue || 0,
    // plus: 0,
    // minus: 0
  }

  static defaultProps = {
    defaultValue: 10,

  }

  handleMinus = () => {
    this.setState(prevState => ({ counter: prevState.counter - 1 }), () => console.log(this.state.counter))
    console.log();
    this.setState(prevState => ({ counter: prevState.counter - 1 }))
    this.setState(prevState => ({ counter: prevState.counter - 1 }))
    
  }

  handlePlus = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  // handleUpdate = event => {
  //   console.log(event.target.name);
  //   const { name } = event.target
  //   this.setState(prevState => {
  //     switch (name) {
  //       case 'minus':
  //         return ({ counter: prevState.counter - 1, [name]: prevState[name] + 1 }) // "minus": prevState + 1
  //       case 'plus':
  //         return ({ counter: prevState.counter + 1, [name]: prevState[name] + 1 })
  //       default:
  //         throw new Error('Something went wrong!')
  //     }
  //   })
  // }


  render() {
    const { counter } = this.state
  

    return (
      <div className="mb-5 p-5 text-white bg-dark rounded-3">
        <h2 className="text-center">Counter</h2>
        <p className="text-center my-5" style={{ fontSize: 80 }}>
          {counter}
        </p>
        

        <div className="d-flex align-items-center justify-content-center w-100">
          <button className="btn p-3 btn-outline-light w-25 mx-2" name="minus" type="button" onClick={this.handleMinus}>
            Minus
          </button>
          <button className="btn p-3 btn-outline-light w-25 mx-2" name="plus" type="button" onClick={this.handlePlus}>
            Plus
          </button>
        </div>
      </div>
    );
  }
};

// Counter.defaultProps = {
//   defaultValue: 10
// }