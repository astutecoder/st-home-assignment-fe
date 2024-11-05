import styled from 'styled-components';
import PrimaryButton from '~/components/buttons/PrimaryButton';

const EmptyProductList = () => {
  return (
    <Wrapper>
      <Title>No products found</Title>
      <RefreshButton>Refresh the page</RefreshButton>
    </Wrapper>
  );
};

export default EmptyProductList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  line-height: 32px;
  text-align: center;
`;

const RefreshButton = styled(PrimaryButton)`
  margin-top: 8px;
  width: fit-content;
`;
