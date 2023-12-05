import logo from './logo.svg';
import './App.css';
import Users from './components/Users';
import HomeConatainer from "./containers/HomeContainer";
import HeaderContainer from './containers/HeaderContainer';

function App() {
  return (
    <div className="App">
      {/* <h1>App Component</h1>
      <Users data={{ name: "Animal", age: 23 }} /> */}
      <HeaderContainer />
      <HomeConatainer />
    </div>
  );
}

export default App;
