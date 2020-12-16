/*
1. Módosítsd a Storage nevű modul 3. feladatát.
2. Amennyiben a kérés során bármilyen hiba van, szintén a localStorage-ból 
olvassa ki az adatokat a program!
3. Ilyenkor jeleníts meg egy üzenetet, hogy az alkalmazás offline!
4. Amennyiben a localStorage is üres, jeleníts meg egy szabadon választott 
hibaüzenetet.
5. Alapértelmezetten 5 másodpercenként ismételd meg újra a 
kérést összesen 10 alkalommal! 
6. Az 5 másodperc és a 10 alkalom paraméterként megadható legyen! 
7. Ha a 10-ből bármelyik alakalommal sikeres a kérés, akkor aszerint járj el 
(kiíratás, tárolás, stb.).
*/
import { userHandler } from './userHandler.js';

userHandler.showList('.list', 5, 10);
