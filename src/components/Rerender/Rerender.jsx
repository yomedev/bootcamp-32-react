import { Component, PureComponent } from 'react';


class Button extends PureComponent {

  // shouldComponentUpdate(prevProps, prevState) {
  //   if (prevProps.onClick === this.props.onClick) {
  //     return false
  //   }
  //   return true
  // }


  render() {
    const { label, onClick } = this.props;
    console.log('Button');

    return (
      <button className="btn btn-outline-light" type="button" onClick={onClick}>
        {label}
      </button>
    );
  }
}

/*
{
  node: 3
}

tree.node = 3
*/

export class Rerender extends Component {
  state = {
    counter: 0,
  };

  handleCount = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    const { counter } = this.state;
    console.log('Rerender');

    return (
      <div className="d-flex flex-column justify-content-center align-items-center p-5 text-bg-dark rounded-3 mb-5">
        <h2>{counter}</h2>

        <Button label="Click me!" onj={{ name: 'bob' }} onClick={this.handleCount} />
      </div>
    );
  }
}
