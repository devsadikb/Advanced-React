import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const SINGLE_PRODUCT_QUERY = gql`
  query {
    product(where: { id: "68553b608b917e1e349b91cc" }) {
      id
      name
      description
      price
    }
  }
`;

export default function SingleProductPage({ query }) {
  const { data, error, loading } = useQuery(SINGLE_PRODUCT_QUERY);
  console.log({ data, error, loading });
  return <p>Single Product Page {query.id}</p>;
}
