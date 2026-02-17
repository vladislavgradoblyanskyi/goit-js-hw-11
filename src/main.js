import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import  {getImagesByQuery}  from "./js/pixabay-api.js";
import {createGallery,clearGallery,showLoader,hideLoader,} from "./js/render-functions.js";

const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const query = event.target.elements["search-text"].value.trim();

  if (!query) {
    iziToast.warning({
      message: "Поле пошуку порожнє!",
      position: "topRight",
    });
    return;
  }

  clearGallery();
 

  getImagesByQuery(query)
   
    .then( (data) => {
      if (data.hits.length === 0) {
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
        });
        return;
      }

      createGallery(data.hits);
    })
    .catch( () =>{
      iziToast.error({
        message: "Помилка запиту на сервер",
        position: "topRight",
      });
    })
    .finally( () => {
      hideLoader();
      form.reset();
    });
});
