import React from "react"
import ReactDOM from "react-dom/client"

const App = () => {
  return (
    <div>
      <h1>Welcome to Zara Mobile</h1>
      <p>Your React app is working!</p>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

root.render(<App />)
