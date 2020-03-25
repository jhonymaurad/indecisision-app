const app = {
  title: 'My title',
  subtitle: 'this is a placeholder subtitle',
  options: []
};

const onFormSubmit = e => {
  e.preventDefault();
  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderContent();
  }
};

const onRemoveAll = () => {
  app.options = [];
  renderContent();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderContent = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? 'Here are your option' : 'No options'}
      <button onClick={onMakeDecision} disabled={app.options.length === 0}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Reset Options</button>
      <ol>
        {app.options.map((opt, index) => {
          return <li key={index}>{opt}</li>;
        })}
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, document.getElementById('app'));
};

renderContent();
