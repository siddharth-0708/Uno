import ReactDOM from 'react-dom/client';
import FirstComponent from "./FirstComponent.jsx";
import { Provider } from "react-redux";
import { store } from "./src/store/gameStore.tsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <FirstComponent />
    </Provider>
);