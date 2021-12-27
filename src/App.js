import styled from "styled-components";
import WrapperForm from "./components/WrapperForm";
import CatImage from "./components/CatImage";
import GetCatButton from "./components/GetCatButton";
import Сontrol from "./components/Сontrol";
import stateCheckbox from "./store/stateCheckbox";
import { useEffect, useState } from "react";

const WrapperApp = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const apiKey = "ff369828-6963-4f96-87e3-b52319dbd6c4";
const url = "https://api.thecatapi.com/v1/images/search";

function App() {
  const [catUrl, setCatUrl] = useState("");

  /*получение изображения */
  const getImage = () => {
    fetch(url, { headers: { "x-api-key": apiKey } })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Ошибка запроса!");
      })
      .then((cats) => {
        const catUrl = cats[0].url;
        setCatUrl(catUrl);
      })
      .catch((error) => {
        console.log("Error", error);
      });
  };

  /*Вывод  изображения при входе на страницу */
  useEffect(() => {
    getImage();
    return () => {};
  }, []);

  /*Отображение нового изображения каждые 5 секунд */
  const getCatEveryFiveSecond = () => {
    const timer = setInterval(() => {
      if (stateCheckbox.enabledChecked && stateCheckbox.autoRefrashChecked) {
        getImage();
      } else {
        clearInterval(timer);
      }
    }, 5000);
  };

  /*получение изображения  по клику на кнопку */
  const getCat = () => {
    if (stateCheckbox.enabledChecked) {
      getImage();
    } else {
      return alert("checkbox Enabled должен быть active ");
    }
  };

  return (
    <WrapperApp>
      <WrapperForm>
        <Сontrol getCatEveryFiveSecond={getCatEveryFiveSecond} />
        <GetCatButton getCat={getCat} />
        <CatImage url={catUrl} />
      </WrapperForm>
    </WrapperApp>
  );
}

export default App;
