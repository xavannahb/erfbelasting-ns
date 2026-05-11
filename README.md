# Erfbelasting NS

## Per week 

### Week 1

**Wat heb ik gedaan?**

In de eerste week ben ik begonnen met het opzetten van de projectstructuur. Ik heb een GitHub-repository aangemaakt en de basisopzet van de website ingericht, inclusief mappenstructuur en naamgeving van bestanden. Daarna ben ik uitgebreid gaan experimenteren met HTML-formulieren: welke invoertypes bestaan er, hoe werkt validatie in de browser zonder JavaScript, en welke semantische elementen zijn beschikbaar?
Ik heb veel tijd besteed aan het verkennen van de mogelijkheden van native HTML-formulierelementen, zoals <fieldset>, <legend>, <label>, en de verschillende input-types zoals type="number", type="date", type="email" en type="tel".

**Wat heb ik geleerd?**

Ik heb tijdens deze eerste week geleerd hoeveel je kunt bereiken met alleen HTML. Bijvb. hoeveel validatie en toegangkelijkheid je kunt krijgen van de browser door de juiste elementen en atrributen te gebruiken. Ik heb ook geleerd dat het kiezen van het juiste input type niet alleen functioneel is, maar ook direct invloed heeft op de gebruikservaring op mobiel. Er verschijnt een numeriek toetsenbord verschijnt automatisch bij type="number" of type="tel" wat het eenvoudiger maakt voor de gebruiker.

**Feedback op mezelf**

Ik ben wel iets lang bezig geweest met het opzetten van de structuur van het formulier. Ik ben veel bezig geweest met het opzetten van fieldsets en het goed invoeren van alle html attributen. Ik vind het moeilijk om structuur te krijgen voor dingen die terug komen. 

### Week 2

**Wat heb ik gedaan?**

In week 2 ben ik verder gegaan met het formulier en met de huisstijl van de NS. Ik heb de kleuren, typografie en stijl van de NS verwerkt in het belastingformulier. 
Ik moest hiervoor goed nadenken over hoe ik deze stijl kon toepassen op een totaal andere context van het overheidsformulier. Ik heb ook gekeken naar de toegankelijkheid van het formulier. Daarvoor heb ik nagedacht over hoe iemand die het formulier niet visueel kan zien. Hier is het belangrijk dat er correcte <label>-koppeling zijn.

**Wat heb ik geleerd?**

De combinatie van een visuele huisstijl en toegankelijkheid is interessanter dan ik van tevoren dacht. Je kunt een formulier er goed uit laten zien voor ziende gebruikers, maar tegelijkertijd onbegrijpelijk maken voor een screenreader als je niet oplette. Ik heb geleerd dat toegankelijkheid begint bij de HTML-structuur, niet bij de CSS of JavaScript.
Een andere les was hoe je een vreemde huisstijl integreert. De NS gebruikt specifieke kleuren en lettertypes; door die te vertalen naar CSS-variabelen bleef het onderhoudbaar en consistent, ook al was de context heel anders.

**Feedback gesprek**

Het ontwerp ziet er mooi en strak uit. Het is duidelijk voor de gebruiker alleen is er wel wat weinig om feedback op te geven. Probeer voor jezelf ook een logische structuur te maken waar je niet onnodig veel fieldsets gebruikt. Kijk goed naar je html en ga op basis daar van verder. 

### Week 3

**Wat heb ik gedaan?**

In week 3 ben ik begonnen met het opdelen van het formulier in stappen: 1a, 1b en 1c. Het idee was dat de gebruiker stap 1b pas te zien krijgt nadat stap 1a volledig ingevuld is. Dit heb ik geprobeerd te maken zonder JavaScript. Door gebruik te maken van :has() in combinatie met :checked. Ik heb hier veel tijd aan besteed om dit werkend te krijgen. Veel geëxperimenteerd met de volgorde van elementen en hoe je door alleen HTML en CSS veel dingen kan verbergen.

**Wat heb ik geleerd?**

Hoeveel er mogelijk is met :has() en :checked in CSS. Met deze combinatie kun je acties geven aan je pagina waar ik normaal zou denken dat je er JavaScript voor nodig zou hebben. Het laat wel zien hoeveel er steeds meer mogelijk wordt met HTML en CSS. Ik heb ook geleerd ook dat het verdwijnen van formulierstappen goed moet worden gecommuniceerd aan de gebruiker. Het is anders heel verwarrend waar een stap heen gaat.

**Feedback op mezelf**

Ik merkte dat ik met de veel fieldsets en divs aan het werken was. Het werdt heel erg ingewikkeld om alles goed op een rij te hebben waardoor ik ben gaan kijken naar het ontwerp en alles CSS heb verwijderd. Ik heb ze naast elkaar gehouden om vervolgens te kijken waar zou ik een div doen en waar een fieldset om ervoor te zorgen dat de functie werkend blijft maar dat er niet te veel informatie aan divs etc. instaan terwijl het onnodig is.

## Herkansing 

**De belangrijkste feedback voor de herkansing waren:**

Focus meer op de gebruikerservaring dan op het functionele aspect. Ik was te veel bezig met "iets werkend maken" in plaats van nadenken over hoe de gebruiker het formulier ervaart. Begrijp wat alle talen doen en waar je ze het beste voor kunt gebruiken. HTML voor structuur en semantiek, CSS voor presentatie en interactie waar mogelijk, en JavaScript voor complexere gedragslogica.

**Wat heb ik gedaan?**

Op basis van de feedback heb ik het formulier opnieuw bekeken en stap voor stap hem doorlopen om te kijken waar verbetering nodig was. Ik ben begonnen met het strippen van de code terug naar de HTML en vanaf daar ben ik verder gegaan met CSS. 

Feedbackmechanismen voor de gebruiker:

- Foutmeldingen: Ik heb deze toegevoegd voor velden die onjuist zijn ingevuld. "Vul een geldig BSN-nummer in van 9 cijfers."
- Positieve feedback: Ik heb ook positieve feedback toegevoegd wanneer een veld correct ingevuld is. Dan weet de gebruiker dat ze het correct hebben ingevuld in plaats van dat ze daar op het eind van het formulier pas achter komen.
- Continue-berichten: Deze heb ik toe gevoegd zodat de gebruiker weet dat ze naar de volgende stap kunnen gaan. "Ga verder met vraag 1c."

**Wat heb ik geleerd?**

Wat het meeste belangrijk was voor de herkansing was de gebruiksvriendelijkheid. Met zulke formulieren is het belangrijk dat mensen niet onnodige vragen te zien krijgen en dat ze feedback krijgen op wat ze invullen. Op deze manier vergroot je de kans dat het formulier correct wordt ingevuld en dat de gebruiker niet gefrustreerd afhaakt. Door dit vak heb ik inzichten gekregen in die dingen waar ik voorheen eigenlijk nog nooit over na had gedacht.

Ik heb ook geleerd hoe je verschillende states in CSS en HTML kunt combineren om de ervaring van de gebruiker te verbeteren. Met :focus, :valid, :invalid en :user-invalid zorg je ervoor dat er dus feedback word gegeven op de gebruiker en het uiteindelijk ze dus makkelijker maakt om het formulier in te vullen. 

Door te meer te focussen op progressive enhancement heb ik geleerd hoeveel je dus met alleen html en daarna css kan doen. Ik heb geen javascript hoeven gebruiken om een goede gebruikers ervaring te maken.
