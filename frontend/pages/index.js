import {
  ApolloClient,
  ApolloProvider,
  gql,
  useQuery,
  InMemoryCache,
} from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:4000/graphql",
});

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <MainWindow />
    </ApolloProvider>
  );
}

export function MainWindow() {
  const bookQuery = gql`
    query {
      books {
        title
        author
      }
    }
  `;

  const { data, loading, error } = useQuery(bookQuery);
  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div
      style={{
        background: "#EEEEEE",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1
        style={{ fontFamily: "Poppins", fontSize: "64px", textAlign: "center" }}
      >
        Hello, this is a test with apollo graphql
      </h1>
      {console.log(data)}
      {data && data.books ? <Books data={data.books} /> : null}
    </div>
  );
}

function Books({ data }) {
  return (
    <div>
      {data.map((book, index) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#FFFFFF",
            padding: "24px 48px",
            borderRadius: "16px",
            marginBottom: "20px",
          }}
        >
          <div style={{ fontFamily: "Poppins", fontSize: "24px" }}>
            Book {index + 1}
          </div>
          <div style={{ fontFamily: "Poppins", fontSize: "48px" }}>
            {book.title}
          </div>
          <div style={{ fontFamily: "Poppins-Italic", fontSize: "16px" }}>
            Written by {book.author}
          </div>
        </div>
      ))}
    </div>
  );
}
