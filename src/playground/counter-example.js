class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleSubtractOne = this.handleSubtractOne.bind(this);
    this.handleResetAll = this.handleResetAll.bind(this);
    this.state = {
      count: 0
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem('count', this.state.count);
    }
  }
  componentDidMount(){
    try {
      const stringCount = localStorage.getItem('count');
      const count = parseInt(stringCount, 10);

      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }

      console.log('Component Mounted: Fetching Data');

    } catch (e) {
      // do nothing, but at least caught the edge case.
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }  
  handleSubtractOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      };
    });
  }  
  handleResetAll() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleSubtractOne}>-1</button>
        <button onClick={this.handleResetAll}>Reset All</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter count={5}/>, document.getElementById('app'));