import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <h1 className="font-mono text-3xl p-5 ml-2 text-bold">All Products</h1>
      <main className="min-h-lvh">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default App;
