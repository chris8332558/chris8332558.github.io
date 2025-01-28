function Projects() {
  const { createElement, getState, useEffect } = PortfolioLib;

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
        PortfolioLib.setState({ projects: [
            { id: 1, title: "Project 1", description: "Description 1"},
            { id: 2, title: "Project 2", description: "Description 2"},
            { id: 3, title: "Project 3", description: "Description 3"}
        ]})
    }, 1000);
  }, []);

  const projects = getState().projects || [];

  return createElement("section", { id: "projects" }, [
    createElement("h2", {}, ["My Projects"]),
    createElement("div", { class: "project-list"}, 
        projects.map(project =>
            createElement('div', { class: "proejct-card" }, [
                createElement('h3', {}, [project.title]),
                createElement('p', {}, [project.description]),
            ])
        )
    )
  ]);
}
