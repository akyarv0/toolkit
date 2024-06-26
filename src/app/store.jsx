//1. Aşama src içine bir store.jsx oluştur.

import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "../features/counterSlice"; // 4. Aşama slicerları store içine import ediyoruz. bu slicerları istediğimiz yerde kullanmak için bunu yapıyoruz. bu slicer sayısı istediğimiz kadar olabilir. ismini değiştirdik counterSlice idi counterReducer yaptık.

export const store = configureStore({
  reducer: {
    counter: counterReducer, // 5. Aşama slicerleri store içindeki reducer içine ekliyoruz. artık counter ismiyle bu slicer ı çağırabiliriz. root reducer toolkitde yok. burada tüm slicerı ekleyip kullanabiliyoruz.
  },
  
});
