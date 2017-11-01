# LMS



*Instruktioner hur man använder Git:*

Gå in i din mapp:<br>
hämta hem git map: || git clone https://github.com/obed123456/LMS<br>
Skriv || git init.<br>
Skapa din branch || git checkout -b<br>
Skriv || git status.<br>
Skriv || git add .filenamn/mappnamn<br>
Skriv || git commit -m "kommentera"<br>
Skicka upp ändringar till Github. || git push --set-upstream origin "din_egen_branch" <br>
Prova detta om du inte är kopplat mot staging || git branch --set-upstream-to=origin/staging<br><br><br>

///// jobba med andras branchar//////
Koppla med andras branch först || git checkout branchnamn<br>
Uppstreama med andra branch....|| git branch --set-upstream-to=origin/branchnamn<br>
Hämta hem senaste ändringar    || git pull <br>
Efter dina ändringar pusha upp || git add ..... git commit -m ""..... git push origin branchnamn<br>

/////processen inne i github.com ////<br><br><br>

Skicka alltid filer i din egen branch<br>
Skapa pull request och merg request så alla andra kan ta del av dina ändringar. <br><br><br>

/////Pull request///<br>
Om du har ändrat i filer du har clonat hem. <br>
Prova detta om du inte är kopplat mot staging branch || git branch --set-upstream-to=origin/staging<br><br>


Kom ihåg alltid göra push request slutet på dagen när du har gjort dina ändringar. <br><br>

Början på dagen du skapar pull request för att se om några ändringar har skett eller om det är konflikter. <br><br>


Några andra viktiga kommando:
git remote -v  // se vilken repository du är kopplat mot. <br>
git log // se vilka ändringar du har gjort <br>
git diff // se dina lokala ändringar. <br>
git remote add origin http:// <br>//Om du vill komma åt din egen repository <br>
git remote set-url origin http:// <br> //Om du vill komma åt någon annans repository <br>
git branch //<br> se vilken branch du är i och hur många finns det.
