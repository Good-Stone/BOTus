import Loki from 'lokijs';

const db = new Loki('image_db');
const imagesDb = db.addCollection('imagesDb');

imagesDb.insert({ url: 'http://i.imgur.com/IrkSwDC.jpg' });
imagesDb.insert({ url: 'http://i.imgur.com/k0nglDG.png' });
imagesDb.insert({ url: 'http://i.imgur.com/K7X8G4A.png' });
imagesDb.insert({ url: 'http://i.imgur.com/oRynQ0E.jpg' });
imagesDb.insert({ url: 'http://i.imgur.com/uOD4sQP.jpg' });
imagesDb.insert({ url: 'http://i.imgur.com/2jNOHqn.png' });
imagesDb.insert({ url: 'http://i.imgur.com/EkQbcHH.jpg' });
imagesDb.insert({ url: 'http://i.imgur.com/gHhziKl.gif' });
imagesDb.insert({ url: 'http://i.imgur.com/3WJbSiF.jpg' });

export default imagesDb;
