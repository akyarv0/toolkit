import { createSlice } from "@reduxjs/toolkit"; //3. Aşama src içine slicerları içine ekleyeceğimiz bir features klasöru oluşturuyoruz. slicer kısayolunu kullanıp eklemeyi kendimiz de yapabiliriz dökumandan direkt almak da mümkün.

const initialState = {
  value: 0, // state'imizi slicer içinde tutuyoruz. istediğimiz yerden bu state ulaşabiliyoruz.
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //7.a Aşama yapmak istediğimiz olayların fonskiyonlarını  reducer içinde yazıyoruz. actionCreater yerini bunlar aldı. 
    increment: (state) => {
      //!(state) burada yukarıda yazdığımız initialState olarak ilk değeri olan state. state'imizi artık başlangıç değerini bir fonksiyon yardımıyla değiştirebiliyoruz.
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; //7.b Aşama bu yazdığımız fonksiyonları dışarıda istediğimiz yerde kullanmak için slice içinde bu fonksiyonları export ediyoruz.

export default counterSlice.reducer; // yazılan slice'ın reducer'ı bu şekilde export edilir. store'a bu reducerı ekliyoruz.
