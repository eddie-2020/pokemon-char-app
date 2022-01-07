
import fetchApiData from './API/responseApiData';
import displayBokomons from './display/displayBokomons';
import { counter } from './display/counter';
import './style/style.css';

const pokeTitle = document.getElementById('bokomonTitle');
window.addEventListener('load', async () => {
  const res = await fetchApiData();
  pokeTitle.innerHTML = `Pokemon(${counter(res.results)})`;
  await displayBokomons(res.results);
});
