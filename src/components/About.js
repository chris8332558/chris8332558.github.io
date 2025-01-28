//const { createElement } = PortfolioLib;

function About() {
  return createElement("section", { id: "about" }, [
    createElement("h2", {}, ["About Me"]),
    createElement("p", {}, [
      "I am a Game Developer passionate about creating amazing games.",
    ]),
  ]);
}