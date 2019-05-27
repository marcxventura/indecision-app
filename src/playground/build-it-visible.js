let visibility = false;

const onDetailsToggle = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onDetailsToggle}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>These are the details</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
