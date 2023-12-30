import styles from "./App.module.css";
import Dropdown from "./components/Dropdown";

function App() {
  const dropdownOptions = ["Yes", "No", "Maybe", "Never", "Always"];

  return (
    <div className={styles.app}>
      <h1>Should you use a dropdown?</h1>
      {/* dropdown component, will recieve the dropdownOptions as props */}
      <Dropdown options={dropdownOptions} />
    </div>
  );
}

export default App;
