import { Link } from 'react-router-dom';

export default function ProfilePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
            <h1 className="text-4xl font-bold text-gray-800">Your Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-6 w-80">
                <img src="https://via.placeholder.com/100" alt="Profile" className="w-24 h-24 mx-auto rounded-full" />
                <h2 className="text-xl font-semibold mt-4">John Doe</h2>
                <p className="text-gray-600">Software Developer & Task Enthusiast</p>
            </div>

            <Link to="/" className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 transition">
                Back to Home
            </Link>
        </div>
    );
}
