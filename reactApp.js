
// Default App component that all other components are rendered through
function App(props){
  return (
    <div>
      <h1>Welcome to the sports game starter</h1>
      This file represents the code after completing the setup step in the lab instructions
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

//Render the application
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
