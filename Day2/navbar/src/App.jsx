import MyStory from "./MyStory";
import Form from "./Form";
import Table from "./Table";
import Cards from "./Cards";

const App = () => {
  return (
    <>
      <div>
        <nav style={{ display: "flex", gap: "20px", margin: "20px" }}>
          <a href="#">Home</a>
          <a href="#">Places</a>
          <a href="#">Contact</a>
        </nav>
      </div>

      <div style={{ gap: "20px", margin: "20px" }}>
        <MyStory />
      </div>

      <div style={{ gap: "20px", margin: "20px" }}>
        <Form />
      </div>
      <div style={{ gap: "20px", margin: "20px" }}>
        <Table />
      </div>
      <div style={{ gap: "20px", margin: "20px" }}>
        <Cards />
      </div>
    </>
  );
};

export default App;
