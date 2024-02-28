import AddIcon from '@mui/icons-material/Add';

export default function Dashboard() {
  const userName = "User Name"; // Dynamically replace as needed

  return (
    <div className="flex justify-center items-center w-full h-full"> {/* Adjusted to match parent size without specifying viewport height */}
      <div className="flex flex-col items-center justify-center space-y-4"> {/* Ensures vertical centering with flexbox */}
        <h1 className="text-3xl md:text-5xl font-bold">Welcome {userName}!</h1> {/* "Welcome" is now larger */}
        <p className="text-xl md:text-2xl">Start by adding a module to your dashboard!</p> {/* Ensures "Start by..." is smaller than "Welcome" */}
        <button className="bg-primary hover:bg-primary text-white font-bold py-2 px-4 rounded flex items-center"> {/* Uses primary colors */}
          <AddIcon className="text-current" /> {/* Uses Tailwind for styling */}
          <span className="ml-2">Add Module</span>
        </button>
      </div>
    </div>
  );
}
