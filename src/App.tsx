import { useEffect, useReducer } from "react";
import "./App.css";
import { ProjectsReducer } from "./reducers/ProjectsReducer";
import { projects } from "./projects/projectList";

function App() {
  const [projectStateList, dispatch] = useReducer(
    ProjectsReducer,
    []
  );

  useEffect(() => {
    dispatch({
      type: "gotProjects",
      payload: JSON.stringify(projectStateList),
    });
  });
  return <>{projectStateList.length}</>;
}

export default App;
