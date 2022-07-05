import { Component } from "react";

class CCounter extends Component {
   constructor(props) {
      super(props);
      this.state = {
         count: this.props.initialCounter,
      };
   }
   increase() {
      this.setState({ count: this.state.count + 1 });
   }

   decrease() {
      this.setState({ count: this.state.count - 1 });
   }

   render() {
      return (
         <div>
            <div>{this.state.count} </div>
            <button onClick={() => this.increase()}>
               Incrementar
            </button>
            <button onClick={() => this.decrease()}>
               Decrementar
            </button>
         </div>
      );
   }
}

export default CCounter;
