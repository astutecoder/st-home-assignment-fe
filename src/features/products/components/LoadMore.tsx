import { useRef, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import LoadingIcon from '~/components/icons/LoadingIcon';
import { getProducts } from '~/services/product.service';
import { productStore } from '~/store';
import { IProduct } from '~/types/IProduct';
import { THEME } from '~/utils/constants/theme';

const LoadMore = () => {
  const { appendProducts, meta, total } = productStore;
  const [loading, setLoading] = useState(false);
  const isOffline = useRef(false);

  const handleFetchMore = async () => {
    if (!meta.shouldFetchMore) return;
    setLoading(true);

    let result: unknown;

    try {
      result =
        (await getProducts(
          meta.productsPerPage,
          meta.currentPage * meta.productsPerPage
        )) || [];
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      isOffline.current = true;
      return;
    } finally {
      setLoading(false);
    }

    const { products, total: totalProducts } = result as {
      products: IProduct[];
      total: number;
    };

    meta.currentPage += 1;
    if (total + meta.productsPerPage >= totalProducts) {
      meta.shouldFetchMore = false;
    }

    appendProducts(products);
  };

  if (isOffline.current || !meta.shouldFetchMore) return null;

  if (loading)
    return (
      <center>
        <LoadingIcon size={50} fill={THEME.COLORS.PRIMARY['500']} />
      </center>
    );

  return (
    <Waypoint onEnter={handleFetchMore}>
      {meta.shouldFetchMore ? (
        <div style={{ marginBottom: '30px' }}>...</div>
      ) : null}
    </Waypoint>
  );
};

export default LoadMore;
