import Header from "./Header";

import MainRoutes from "./MainRoutes";

import './App.scss';

const App = () => {
  return (
    <div className="root-app">
      <Header />
      <main className="main">
        <MainRoutes />
      </main>
    </div>
  );
};

export default App;
