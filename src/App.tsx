import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header/Header';
import Products from './features/products/Products';

function App() {
  return (
    <ErrorBoundary fallback={<p>Opps! Something went wrong</p>}>
      <Header />
      <Products />
    </ErrorBoundary>
  );
}

export default App;
