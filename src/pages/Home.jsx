function Home() {
  return (
    <div className="container section">
      <h1>Home Page</h1>
      <p>Hero section and highlights coming soon...</p>

      <div style={{ marginTop: '2rem' }}>
        <h2>Test Content</h2>
        <p>Scroll down to see the navbar shadow effect when sticky.</p>
        <p>Click the theme toggle to switch between light and dark modes.</p>
        <p>On mobile, try the hamburger menu to see the navigation links.</p>
      </div>

      {/* Add some spacing to enable scrolling */}
      {Array.from({ length: 20 }, (_, i) => (
        <p key={i} style={{ marginTop: '2rem' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      ))}
    </div>
  );
}

export default Home;
