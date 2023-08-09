import {ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import {GetUsers} from "./components/GetUsers.tsx";
import {Form} from "./components/Form.tsx";
import {HundredUsers} from "./components/HundredUsers.tsx";


interface errorI {
    message: string,
    location: string,
    path: string
}

const errorLink = onError(({ graphqlErrors, networkError }) => {
    if (graphqlErrors) {
        graphqlErrors.map(({ message, location, path } : errorI) => {
            alert(`Graphql error ${message}`);
        });
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: "http://localhost:8000/graphql" }),
]);

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
});
function App() {
    return (
        <ApolloProvider client={client}>
            {/*<GetUsers/>*/}
            {/*<Form/>*/}
            <HundredUsers/>
        </ApolloProvider>
    )
}

export default App
