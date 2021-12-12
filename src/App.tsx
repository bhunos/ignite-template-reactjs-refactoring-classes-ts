import { BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes';

import GlobalStyle from './components/styles/global';

export function App() {


  return (
    <>
      <GlobalStyle />
      < Router >
        <Routes />
      </Router>
    </>
  )
};

export default App;
