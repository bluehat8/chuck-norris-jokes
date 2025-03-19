// // src/configureStore.js
// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from '../src/redux/reducers';
// import rootSaga from './redux/sagas';

// const sagaMiddleware = createSagaMiddleware();

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
// });

// sagaMiddleware.run(rootSaga);

// export default store;


// // src/configureStore.js
// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './redux/reducers';
// import rootSaga from './redux/sagas';

// // Crea el middleware de Redux-Saga
// const sagaMiddleware = createSagaMiddleware();

// // Configura el store con una función para el campo middleware
// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
// });

// // Inicia las sagas
// sagaMiddleware.run(rootSaga);

// export default store;



// // src/configureStore.js
// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from './redux/reducers';
// import rootSaga from './redux/sagas';

// const configureStoreFn = () => {
//   const sagaMiddleware = createSagaMiddleware();

//   const store = configureStore({
//     reducer: rootReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({ thunk: true }), // Asegúrate de incluir redux-thunk
// });

//   sagaMiddleware.run(rootSaga);

//   return store;
// };

// export default configureStoreFn; // Exporta la función configureStoreFn


// src/configureStore.js
import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './redux/reducers';
import rootSaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware), // Deshabilitamos thunk y añadimos saga
});

sagaMiddleware.run(rootSaga); // Inicia las sagas después de configurar el store

export default store;
