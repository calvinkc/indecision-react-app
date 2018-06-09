class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
        {
          this.state.visibility && (
          <div> 
          <p>There is something to see!</p>
          </div>
          )
      } 
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// VisibilityToggle - render, constructor, handleToggleVisibility
// visiblity -> false 

// console.log('Build-it-Visible is running!');

// let visibility = false;

// const onModeSwitch = () => {
//   visibility = !visibility; // REMEMBER THIS TRICK!!!
//   renderPage();
// };

// const renderPage = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onModeSwitch}>{visibility ? 'Hide Details' : 'Show Details'}</button>
//       {
//         visibility && (
//           <div> 
//           <p>There is something to see!</p>
//           </div>
//           )
//       } 
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById('app'));
// };
// renderPage();
