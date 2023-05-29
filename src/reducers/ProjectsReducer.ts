// logik för att förändra vårt state här inne (projects)

import { Projects } from "../models/Project";

export interface IAction {
  type: string;
  payload: string;
}

export const ProjectsReducer = (
  projects: Projects[],
  action: IAction
) => {
  switch (action.type) {
    case "gotProjects": {
      return JSON.parse(action.payload);
    }
  }

  return projects;
};
