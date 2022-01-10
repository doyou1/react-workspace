import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ProductForm from './Products/ProductForm';
import ProductsList from './Products/ProductsList';
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        I am App
        <ProductsList />
        <ProductForm />
      </div>
    </Provider>
  );
}

export default App;
