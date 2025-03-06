import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TodoWrapper from './components/TodoWrapper';
import LandingPage from './components/LandingPage';
import ProfilePage from './components/ProfilePage';  // ✅ Import the Profile Page
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/todo" element={<TodoWrapper />} />
                <Route path="/profile" element={<ProfilePage />} />  {/* ✅ Add Profile Route */}
            </Routes>
        </Router>
    );
}

export default App;
