import "./categories.scss";
const App = () => {
  const categories = [
    { id: 1, title: "Hats" },
    { id: 2, title: "Jackets" },
    { id: 3, title: "Sneakers" },
    { id: 4, title: "Women" },
    { id: 5, title: "men" },
  ];
  return (
    <div className="catogories-container">
      {categories.map(({ title, id }) => (
        <div key={id} className="catogory-container">
          {/* <img/> */}
          <div className="catogory-body-container">
            <h2>{title}</h2>
            <p>shop Now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
