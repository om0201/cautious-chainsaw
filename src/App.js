import Header from "./components/Header";
import Aside from "./components/aside/Aside";
import Activity from "./components/activity/Activity";
import styles from "./App.module.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={styles.flex_container}>
        <Aside />
        <Activity />
      </div>
    </div>
  );
}

export default App;
