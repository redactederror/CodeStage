import { useParams } from 'react-router-dom';

function UserProfile() {
  const { username } = useParams(); // grabs /profile/:username

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-zinc-800 rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold">@{username}</h1>
      <p className="text-zinc-400">This is the profile page for @{username}.</p>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Uploaded Games/Videos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* Game/video cards will go here */}
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
