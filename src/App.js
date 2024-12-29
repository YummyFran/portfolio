import { RouterProvider, createRoutesFromElements, Route, createBrowserRouter } from 'react-router-dom';
import Homepage from "./pages/Homepage"
import Projects from './pages/Projects';

function App() {
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Homepage />} />
        <Route path="projects" element={<Projects />} >
  
        </Route>
      </>
    )
  );

  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App