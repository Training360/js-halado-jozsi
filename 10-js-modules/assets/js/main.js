import { shuffle as sh } from './utils.js';
import DB from './db.js';

(function() {
    const names = ['Józsi', 'Piri', 'Sanyi'];
    sh(names);
    DB.setItem('todos', [{text: 'feladat', done: false}]);
    console.log(names);
})();