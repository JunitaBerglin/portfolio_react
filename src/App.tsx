import { useEffect, useReducer } from "react";
import "./App.css";
import { ProjectsReducer } from "./reducers/ProjectsReducer";
import { projects } from "./projects/projectList";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";
import { GlobalStyles } from "./components/styled/global-styles/globalStyles";

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
      <GlobalStyles />
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
