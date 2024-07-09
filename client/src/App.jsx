import { Provider } from "react-redux";
import { Header } from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import { Post } from "./components/Post";
import { RightSidebar } from "./components/RightSidebar";
import store from "./store/store";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { AuthProvider } from "./components/AuthContext.jsx";
import { ProtectedRoute } from "./components/ProtectedRoute.jsx";

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/"  element={<Login />} />
            <Route path="/register" element={<Signup />} />

            <Route
              path="/social-media"
              element={
                <ProtectedRoute>
                  <Header />
                  <main className="flex  bg-gray-100">
                    {/* Left side bar */}
                    <LeftSidebar />

                    {/* Center side bar and Create Post */}
                    <Post />

                    {/* Right side bar */}
                    <RightSidebar />
                  </main>
                </ProtectedRoute>
              }
            ></Route>
          </Routes>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;

