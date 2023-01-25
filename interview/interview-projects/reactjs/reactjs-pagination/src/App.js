import React, { useState, useEffect } from 'react';
import './index.css';

export default function App() {
  const [state, setState] = useState({});
  const limit = 10;

  const fetchProducts = (skip) => {
    fetch(`https://dummyjson.com/products?limit=10&skip=${skip}`)
      .then((res) => res.json())
      .then((res) => {
        setState({ ...state, products: res?.products, total: res?.total });
      });
  };

  useEffect(() => {
    fetchProducts(0);
  }, []);

  const gotoPage = (page) => {
    fetchProducts(page * limit);
  };

  const getPagination = () => {
    const pages = total / limit;
    const paginationItems = [];

    for (let i = 1; i <= pages; i++) {
      paginationItems.push(
        <span className="pagination-items" onClick={() => gotoPage(i - 1)}>
          {i}
        </span>
      );
    }

    return <div className="pagination-body">{paginationItems}</div>;
  };

  const { products, total } = state;

  return (
    <div>
      {products &&
       products.map((product) => {
         return <div>{product.title}</div>;
       })}

      {getPagination()}
    </div>
  );
}
