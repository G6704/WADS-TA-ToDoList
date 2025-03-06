import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-5xl font-bold text-gray-800">Manage Your Tasks Effortlessly</h1>
            <p className="text-lg text-gray-600 mt-4 max-w-lg">
                A simple yet powerful task manager to keep you organized and productive.
            </p>

            {/* Buttons for Navigation */}
            <div className="flex gap-4 mt-6">
                <Link to="/todo" className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
                    Start Managing Tasks
                </Link>
                <Link to="/profile" className="bg-gray-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600 transition">
                    View Profile
                </Link>
            </div>
        </div>
    );
}
