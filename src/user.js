// cannot do straight `export default` b/c of this Babel issue:
// https://github.com/babel/babel/issues/2694

let User= class {
  constructor(props) {
    this.props = props;
  }

  greet() {
    return(`Hello, ${this.props.firstName} ${this.props.lastName}!`);
  }
}

export default User;
