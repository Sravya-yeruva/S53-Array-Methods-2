import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Array Merhods-2</h1>
      <button
        type="button"
        onClick={() => {
          let heroines = ["Samantha", "Kajal", "Rakhul"];
          let heros = ["Mahesh Babu", "NTR", "Prabhas"];
          let comedians = ["bramhanandam", "ali"];
          let TeluguIndustry = heroines.concat(heros, comedians);
          console.log(TeluguIndustry);
        }}
      >
        Array Concat
      </button>

      <button
        type="button"
        onClick={() => {
          let a = [1, 2, 3];
          let b = [4, 5, 6];
          let numbers = [...a, ...b];
          console.log(numbers);
        }}
      >
        Spread Operator
      </button>

      <button
        type="button"
        onClick={() => {
          let fruits = ["Apple", "Banana"];
          let vegetables = ["Poatato", "Brinjal"];
          let chocolates = ["Dairy Milk", "5 Star"];
          let result = [fruits, vegetables, chocolates];
          console.log(result.flat());
        }}
      >
        Array Flat
      </button>
      <button
        type="button"
        onClick={() => {
          let a = ["A", "B", "C", "D", "E"];
          console.log(a.slice(0, 4));
        }}
      >
        Array SLice
      </button>

      <button
        type="button"
        onClick={() => {
          let numbers = [1, 2, 3, 4, 5, 6];
          console.log(numbers.fill("8", 1, 4));
        }}
      >
        Array Fill
      </button>

      <button
        type="button"
        onClick={() => {
          let name1 = "Sravya";
          let name2 = "indu";
          let combined = Array.from(name1 + name2);
          console.log(combined);
        }}
      >
        Array From
      </button>

      <button
        type="button"
        onClick={() => {
          let names = ["sravya", "Indu", "Pranavi", "Mahima"];
          console.log(names.includes("Mahima"));
          console.log(names.includes("Ramya"));
        }}
      >
        Array Includes
      </button>

      <button
        type="button"
        onClick={() => {
          let alphabets = ["A", "B", "C", "D", "E", "F"];
          console.log(alphabets.indexOf("F"));
        }}
      >
        Index Of
      </button>

      <button
        type="button"
        onClick={() => {
          let alphabets = ["A", "A", "B", "F", "C", "D", "E", "F", "D"];
          console.log(alphabets.lastIndexOf("F"));
        }}
      >
        Last indexOf
      </button>
      <button
        type="button"
        onClick={() => {
          let a = ["1", "2", "3", "4"];
          console.log(a.reverse());
        }}
      >
        Reverse
      </button>

      <button
        type="button"
        onClick={() => {
          console.log(Array.isArray("sravya"));
          console.log(Array.isArray(["1", "2"]));
        }}
      >
        Is Array
      </button>

      <button
        type="button"
        onClick={() => {
          let a = ["1", "2", "3", "4"];
          a.forEach((element, i) => {
            console.log(`${i},${element}`);
          });
        }}
      >
        For Each
      </button>
    </div>
  );
}

export default App;
