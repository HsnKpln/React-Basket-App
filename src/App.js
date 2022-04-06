import Router from './router/Router';
import './App.css';
import { BasketProvider } from './contexts/Basket';
import Layout from './components/Layout';

function App() {
  return (
    <BasketProvider>
      <Layout>
         <Router/>
      </Layout>
    </BasketProvider>
    
  );
}

export default App;
