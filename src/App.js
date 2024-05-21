import Layout from "./components/Layout/Layout";
import {AuthProvider} from '../src/context/authContext'
import TokenContextProvider from '../src/context/tokenContext/tokenContextProvider'

function App() {
  // return <Layout />;
  return (
    <AuthProvider>
      <TokenContextProvider>
        <Layout/>
      </TokenContextProvider>
    </AuthProvider>
  )

}

export default App;
