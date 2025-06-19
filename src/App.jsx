import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/profile/:username" element={<UserProfile />} />
        <Route path="/" element={
          <div className="p-4 text-center">
            <h1 className="text-3xl font-bold">Welcome to CodeStage</h1>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
