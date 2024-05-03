import React from "react";

import { useSelector } from "react-redux";

import { useDispatch } from "react-redux"; // 8. Asama useDispatch hookunu import ediyoruz. slicer içinde yazdığımız fonksiyonları dışarıda kullanmak için useDispatch hookunu kullanıyoruz.
import { decrement, increment } from "./features/counterSlice";

const App = () => {
  //! const {value} = useSelector((state) => state.counter) şeklinde yazmamızın sebebi herhangi bir state destr yaparak onun valuesini alabilmek.

  const dispatch = useDispatch(); // bu genel kullanım syntaxı.

  const { value } = useSelector((state) => state.counter); //6. Aşama herhangi bir companentten state 'i çekip kullanmak için useSelector hookunu kullanıyoruz.

  console.log(value); // artık state'imizi kullanabiliyoruz.

  return (
    <div>
      <div>{value}</div>
      <button onClick={() => dispatch(increment())} >Arttır</button> {/* 9. Aşama dispactch sevk etmek demek. bizim tüm fonskiyonlarımızı artık sevk ederek istediğimiz yerde kullanabiliriz. */}
      <button onClick={() => dispatch(decrement())}>Azalt</button>
    </div>
  );
};

export default App;
