// @npm packages
import { Route, Routes, Outlet } from "react-router-dom"

// @components custom

// @pages custom pages
import { Authentication } from "./screens/Authentication"
import { ForgetPassword } from "./screens/Authentication/ForgetPassword"
import { Home } from "./screens/Home"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route exact path="/" element={<Authentication />} />
        <Route exact path="forget-password" element={<ForgetPassword />} />
        <Route exact path="home" element={<Home />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem", textAlign: "center" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
      <Outlet />
    </div>
  )
}

export default App
