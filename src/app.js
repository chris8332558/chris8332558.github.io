const { render, subscribe, createElement } = Bricker;

function App() {
  return createElement("div", {}, [Header(), About(), Projects(), Contact()]);
}

function renderApp() {
    render(App, document.getElementById("root"));
}

// Re-render the app when state changes
subscribe(renderApp);

// Initial render
renderApp();
