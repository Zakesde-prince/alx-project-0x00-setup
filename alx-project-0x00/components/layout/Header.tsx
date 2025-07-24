const Header = () => {
  return (
    <header className="bg-white shadow p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🏡 ALX Listing</h1>
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded w-1/2"
        />
        <div className="flex gap-2">
          <button className="text-blue-500">Sign In</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
