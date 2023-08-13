class Project {
  projectName;
  technologiesNames;
  descriptionText;
  image1;
  image2;
  technologies;
  github;
  link;
  store;

  constructor(
    projectName,
    technologiesNames,
    descriptionText,
    image1,
    image2,
    technologies,
    github,
    link,
    store,
  ) {
    this.projectName = projectName;
    this.technologiesNames = technologiesNames;
    this.descriptionText = descriptionText;
    this.image1 = image1;
    this.image2 = image2;
    this.technologies = technologies;
    this.github = github;
    this.link = link;
    this.store = store;
  }
}

export default Project;
