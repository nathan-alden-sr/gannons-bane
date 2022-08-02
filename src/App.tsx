import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Provider as ReduxProvider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import RootComponent from "./RootComponent";
import { persistor, store } from "./store/reducers/store";

const App: React.FC = () => {
  const defaultTitle = "Gannon's Bane - Zelda 1 Randomizer Tracker";

  return (
    <HelmetProvider>
      <Helmet titleTemplate={`%s - ${defaultTitle}`} defaultTitle={defaultTitle} />
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RootComponent />
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  );
};

export default App;
