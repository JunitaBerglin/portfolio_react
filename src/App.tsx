import { useEffect, useReducer } from "react";
import "./App.css";
import { ProjectsReducer } from "./reducers/ProjectsReducer";
import { projects } from "./projects/projectList";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {
  const [projectStateList, dispatch] = useReducer(
    ProjectsReducer,
    projects
  );

  useEffect(() => {
    dispatch({
      type: "gotProjects",
      payload: JSON.stringify(projectStateList),
    });
  });
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
