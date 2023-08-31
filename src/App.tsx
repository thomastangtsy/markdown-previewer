import Header from "./components/Header";

const App = () => {
  const onToggleGuide = () => {
    // TODO: Toggle guide when "Guide" button is clicked
  };

  return (
    <div className="w-screen h-[200vh] md:h-screen">
      <Header onToggleGuide={onToggleGuide} />
    </div>
  );
};

export default App;
