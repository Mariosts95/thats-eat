import React from 'react';
import { useParams } from 'react-router-dom';

// Context
import { UseStores } from '../store/StoreProvider';

// Components
import ProductCard from '../components/ProductCard';

// Styles
import './Store.scoped.scss';

const Store = () => {
  const { storesList, storesLoading } = UseStores();
  // get the store id from url
  let { id } = useParams();

  // prevent rendering without items
  if (storesLoading || !storesList) return <div>Loading...</div>;

  // find the specific store from id in url
  const store = storesList.stores.find((x) => x._id === id);
  const groupedProducts = {};

  // loop through products and group them in categories
  for (let i = 0; i < store.menu.length; i += 1) {
    const product = store.menu[i];
    if (!(product.category in groupedProducts)) {
      groupedProducts[product.category] = [product];
    } else {
      groupedProducts[product.category].push(product);
    }
  }

  // get the categories from the grouped array
  const categories = Object.keys(groupedProducts);

  return (
    <>
      <div className='banner'>
        <img src={`/src/assets/images/${id}/banner.jpg`} alt='' />
      </div>
      <div className='store-container'>
        <h1>{store.name}</h1>
        <h2>Products ({store.menu.length}):</h2>
      </div>

      {categories.map((category) => (
        <div className='category-container' key={category}>
          <h3>{category}:</h3>
          {groupedProducts[category].map((product) => (
            <ProductCard
              storeId={id}
              key={product._id}
              id={product._id}
              imgPath={`/src/assets/images/${id}/${product._id}.jpg`}
              product={product}
            />
          ))}
        </div>
      ))}
    </>
  );
};

export default Store;
