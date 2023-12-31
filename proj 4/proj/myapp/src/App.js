// import logo from './logo.svg';
// import './App.css';
// import Login from "./Login";
// import main from "./main.js";

// function App() {
  //   return (
    //     <>
    //      <main />
    //     </>
    //   );
    // }
    
    // export default App;
    
    import ReactDOM from "react-dom/client";
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import Login from "./Login";
    import Main from "./main.js";
    // import Layout from "./pages/Layout";
    // import Home from "./pages/Home";
    // import Blogs from "./pages/Blogs";
    // import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}>
        </Route>
        <Route path="/main" element={<Main />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);