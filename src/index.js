import sum from './sum';
import './image_viewer'; // It should be imported in at least one file or webpack won't take it.

const total = sum(5, 6);
console.log(total);