function Header() {
  const { createElement } = Bricker;

  return createElement("header", {}, [
    createElement("h1", {}, ["My Portfolio"]),
    createElement("nav", {}, [
      createElement("a", { href: "#about" }, ["About"]),
      createElement("a", { href: "#projects" }, ["Projects"]),
      createElement("a", { href: "#contact" }, ["Contact"]),
    ]),
  ]);
}
