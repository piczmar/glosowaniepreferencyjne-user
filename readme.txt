To jest aplikacja kliencka dla Usera (Glosujacego), stworzona z uzyciem Yeoman.

Aby wystartowac projekt musisz miec zainstalowany:
 * Nodejs & npm (http://nodejs.org/)
 * Yeaoman (http://yeoman.io/)
	npm install -g yo

Uruchom projekt wykonujac po kolei polecenia:

npm install
bower update
grunt serve

nastepnie otworz w przegladarce:
http://localhost:9000/#/vote/asdsfasddasfsf 

Ten URL sluzy do uzupelnienia glowania preferencyjnego. Taki link powinien wygenerowac admin
i wyslac glosujacemu mailem.

Narazie nie ma zapisu do Mongo DB, dane sa przechowane w przegladarce i po refreshu stronki wszystko wraca do stanu wyjsciowego.

Instalacja na serwerze
------------------------
Strony sa instalowane na github.io
http://piczmar.github.io/glosowaniepreferencyjne-user

W repozytorium jest branch gh-pages gdzie musza sie znajdowac aktualne zrodla stron.
Budowanie i update stron na serwerze odbywa sie nastepujaco:
1. grunt build
2. git push origin :gh-pages
3. git subtree push --prefix dist origin gh-pages

Wiecej informacji o buildach: http://yeoman.io/learning/deployment.html
