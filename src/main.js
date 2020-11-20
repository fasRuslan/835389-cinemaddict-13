import {createMenuTemplate} from "./view/menu";
import {createSortPanelTemplate} from "./view/sort-panel";
import {createFilmListTemplate} from "./view/films-list";
import {createFooterStatisticsTemplate} from "./view/count-films";
import {createCardFilmTemplate} from "./view/film-card";

const FILM_COUNT = 5;
const FILM_RATED_CONT = 2;

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteFooterStatistics = document.querySelector(`.footer__statistics`);

render(siteMainElement, createMenuTemplate(), `beforeend`);
render(siteMainElement, createSortPanelTemplate(), `beforeend`);
render(siteMainElement, createFilmListTemplate(), `beforeend`);
render(siteFooterStatistics, createFooterStatisticsTemplate(), `beforeend`);

const filmList = siteMainElement.querySelector(`.js-film-list-main`);
const filmListRated = siteMainElement.querySelector(`.js-film-list-rated`);
const filmListCommented = siteMainElement.querySelector(`.js-film-list-commented`);

for (let i = 0; i < FILM_COUNT; i++) {
  render(filmList, createCardFilmTemplate(), `beforeend`);
}

for (let i = 0; i < FILM_RATED_CONT; i++) {
  render(filmListRated, createCardFilmTemplate(), `beforeend`);
}

for (let i = 0; i < FILM_RATED_CONT; i++) {
  render(filmListCommented, createCardFilmTemplate(), `beforeend`);
}
