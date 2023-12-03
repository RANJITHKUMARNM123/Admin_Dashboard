import "./App.css";
import UsersList from "./UsersList";
import { ErrorBoundary } from "./ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <UsersList />
      </ErrorBoundary>
    </div>
  );
}

export default App;
