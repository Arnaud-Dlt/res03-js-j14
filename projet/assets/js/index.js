import { User } from './classes/user.js';
import { Book } from './classes/book.js';

window.addEventListener("DOMContentLoaded", function (){
    let users = [];
    let user1 = new User(0, "Maurice", "email1@gmail.com", "azerty", "Maurice", "Dupont", "profileImage");
    let user2 = new User(1, "Jean", "email2@gmail.com", "uiop", "Jean", "Dupond", "profileImage");
    let user3 = new User(2, "Michel", "email3@gmail.com", "qsdfg", "Michel", "Dupons", "profileImage");
    
    users.push(user1);
    users.push(user2);
    users.push(user3);
    let jsonUser = JSON.stringify(users);
    sessionStorage.setItem("user", jsonUser);
    
    let books = [];
    let book1 = new Book(0, "La Ligne Verte", "Stephen King", "03/07/2000", 507, "Le bloc E, celui des condamnés à mort, reçoit un nouveau pensionnaire: John Caffey ", "https://www.babelio.com/couv/CVT_La-Ligne-Verte_9123.jpg");
    let book2 = new Book(1, "Le Sorceleur", "Andrzej Sapkowski", "16/01/2019", 307, "Geralt de Riv est un homme inquiétant, un mutant devenu le parfait assassin. En ces temps obscurs, ogres, goules et vampires pullulent,...", "https://www.babelio.com/couv/CVT_Le-Sorceleur-tome-1--Le-Dernier-Voeu-reedition_2699.jpg");
    let book3 = new Book(2, "Le seigneur des anneaux", "J.R.R. Tolkien", "03/03/2005", 704, "Le Tiers Age touche à sa fin, et la Terre du Milieu à son crépuscule. La Compagnie de l'Anneau va donc tâcher de déjouer les projets infernaux de Sauron, force du mal d'autant plus difficile à combattre qu'elle est désincarnée", "https://www.babelio.com/couv/CVT_Le-Seigneur-des-Anneaux-Tome-1--La-Communaute-de-_7762.jpg");
    
    books.push(book1);
    books.push(book2);
    books.push(book3);
    let jsonBook = JSON.stringify(books);
    sessionStorage.setItem("book", jsonBook);
    
    console.log(users);
    console.log(books);
    
})