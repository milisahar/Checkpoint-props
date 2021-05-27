
import './App.css';
import { Profile } from './profile/Profile';

function App() {
  const handleName = (name) => {
    alert(name)
  }
  const fullName = 'Sahar Mili'
  return (
    <div className="App">
      <Profile fullName={fullName} bio="I am from Tunisia, born in 1992" profession='Engineer' handleName={handleName}>
        <img className="photo" src="/images.jpg" alt="profile" width="100px" />

      </Profile>
    </div>
  );
}

export default App;
