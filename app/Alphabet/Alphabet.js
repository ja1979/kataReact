import React, {Component} from 'react';

export class Alphabet extends Component {
  constructor(props) {
    super(props);
    this.state = {abc: ['a', 'b',
      'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']};
  }


  rotate(array, times){

    let L = array.length;
    const n = L-times;
    return array.slice(L - n).concat(array.slice(0, L - n));
  }

  rotateAndUpper(times) {
    return times + ": " + this.rotate(this.state.abc, times).join("").toUpperCase();

  }

  render() {
    return (
      <div className="container">
        Alphabet Page
        <p>{this.rotateAndUpper(1)}</p>
        <p>{this.rotateAndUpper(2)}</p>
        <p>{this.rotateAndUpper(3)}</p>
      </div>
    );
  }
}

export default Alphabet;
