class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this);
  }
  toggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleVisibility}>
          {this.state.visibility ? 'Hide' : 'Show'}
        </button>
        {this.state.visibility && <h2>Visible !!!!!!!</h2>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// let visible = false;

// const toggleText = () => {
//   visible = !visible;
//   renderContent();
// };

// const renderContent = () => {
//   const template = (
//     <div>
//       <h1>Toggle Challenge</h1>
//       <button onClick={toggleText}>{visible ? 'hide' : 'show'}</button>
//       {visible ? <div>Showing</div> : undefined}
//     </div>
//   );
//   ReactDOM.render(template, document.getElementById('app'));
// };

// renderContent();
