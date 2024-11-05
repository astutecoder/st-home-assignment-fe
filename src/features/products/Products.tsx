import { observer } from 'mobx-react';
import styled from 'styled-components';
import { Container } from '~/components/Container';
import { productStore } from '~/store/productStore';
import LoadMore from './components/LoadMore';
import ProductCard from './components/productCard/ProductCard';

const Products = observer(() => {
  const { products } = productStore;

  return (
    <Container>
      <ProductList>
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            thumbnail={product.thumbnail}
            images={product.images}
            brand={product.brand}
            title={product.title}
            price={product.price}
            discountPercentage={product.discountPercentage}
            stock={product.stock}
          />
        ))}
      </ProductList>

      <LoadMore />
    </Container>
  );
});

export default Products;

const ProductList = styled.div`
  display: grid;
  gap: 16px;
  margin: 0 auto 20px;

  @media screen and (min-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
