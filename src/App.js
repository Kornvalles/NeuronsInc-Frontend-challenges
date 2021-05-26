import Login from './components/Login';
import Header from './components/Header';

function App() {
  return (
    <div style={Container}>
      <Header />
      <div style={LoginContainer} >
        <Login />
      </div>
    </div>
  );
}

const Container = {
  backgroundColor: '#EEEDF2',
  paddingTop: '1em',
  height: '100%',
  width: '100%',
}

const LoginContainer = {
  marginTop: '100px',
  height: '100%',
}

export default App;
