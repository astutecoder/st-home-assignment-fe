import { ComponentType, Fragment, ReactElement, useMemo } from 'react';
import { Container } from '../Container';

type ListProps<T extends { id: string | number }> = {
  items: T[];
  itemRenderer: ComponentType<T>;
  separator?: ReactElement;
};

function List<T extends { id: string | number }>({
  items,
  itemRenderer: ListItem,
  separator,
}: ListProps<T>) {
  const renderSeparator = useMemo(() => {
    if (separator) return separator;

    return <hr style={{ margin: 0 }} />;
  }, [separator]);

  if (!items?.length)
    return (
      <Container>
        <p>No items found!</p>
      </Container>
    );

  return (
    <div>
      {items.map((item, index) => (
        <Fragment key={item.id}>
          <ListItem {...item} />
          {index + 1 < items.length ? renderSeparator : null}
        </Fragment>
      ))}
    </div>
  );
}

export default List;
