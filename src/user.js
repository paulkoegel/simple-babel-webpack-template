export default class {

  constructor(props) {
    this.props = props;
  }

  greet() {
    return(`Hello, ${this.props.firstName} ${this.props.lastName}!`);
  }

}
