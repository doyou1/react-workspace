import React from 'react';
import './App.css';
import ProductForm from './Products/ProductForm';
import ProductsList from './Products/ProductsList';

function App() {
  return (
    <div className="App">
      I am App
      <ProductsList />
      <ProductForm />
    </div>
  );
}

export default App;
