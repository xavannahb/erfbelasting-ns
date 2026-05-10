# Erfbelasting NS


## Per week 

### Week 1

**Wat heb ik gedaan?**

In de eerste week ben ik begonnen met het opzetten van de projectstructuur. Ik heb een GitHub-repository aangemaakt en de basisopzet van de website ingericht, inclusief mappenstructuur en naamgeving van bestanden. Daarna ben ik uitgebreid gaan experimenteren met HTML-formulieren: welke invoertypes bestaan er, hoe werkt validatie in de browser zonder JavaScript, en welke semantische elementen zijn beschikbaar?
Ik heb veel tijd besteed aan het verkennen van de mogelijkheden van native HTML-formulierelementen, zoals <fieldset>, <legend>, <label>, en de verschillende input-types zoals type="number", type="date", type="email" en type="tel".

**Wat heb ik geleerd?**

Ik heb tijdens deze eerste week geleerd hoeveel je kunt bereiken met alleen HTML. Bijvb. hoeveel validatie en toegangkelijkheid je kunt krijgen van de browser door de juiste elementen en atrributen te gebruiken. Ik heb ook geleerd dat het kiezen van het juiste input type niet alleen functioneel is, maar ook direct invloed heeft op de gebruikservaring op mobiel. Er verschijnt een numeriek toetsenbord verschijnt automatisch bij type="number" of type="tel" wat het eenvoudiger maakt voor de gebruiker.

**Volgende week**

In week 2 wilde ik de visuele laag toevoegen door de huisstijl van de NS te implementeren, en het formulier verder uitwerken.

#### Feedback op mezelf

Ik ben wel iets lang bezig geweest met het opzetten van de structuur van het formulier. Ik ben veel bezig geweest met het opzetten van fieldsets en het goed invoeren van alle html attributen. Ik vind het moeilijk om structuur te krijgen voor dingen die terug komen. 

### Week 2

**Wat heb ik gedaan?**

In week 2 ben ik verder gegaan met het formulier en heb ik de NS-huisstijl toegepast. Ik heb de kleuren, typografie en stijl van de NS vertaald naar het belastingformulier. Dit vroeg om nadenken over hoe je een herkenbare stijl — die ontworpen is voor een vervoersbedrijf — kunt inzetten voor een volledig andere context: een overheidsformulier.
Ik heb ook specifiek aandacht besteed aan de toegankelijkheid van het formulier. Daarvoor heb ik nagedacht over hoe iemand die het formulier niet visueel kan zien, het toch moet kunnen gebruiken. Dit betekende: correcte <label>-koppeling via for-attributen, zinvolle aria-attributen waar nodig, en een logische leesvolgorde in de DOM.

**Wat heb ik geleerd?**

De combinatie van een visuele huisstijl en toegankelijkheid is interessanter dan ik van tevoren dacht. Je kunt een formulier er goed uit laten zien voor ziende gebruikers, maar tegelijkertijd onbegrijpelijk maken voor een screenreader als je niet oplette. Ik heb geleerd dat toegankelijkheid begint bij de HTML-structuur, niet bij de CSS of JavaScript.
Een andere les was hoe je een vreemde huisstijl integreert. De NS gebruikt specifieke kleuren en lettertypes; door die te vertalen naar CSS-variabelen bleef het onderhoudbaar en consistent, ook al was de context heel anders.

**Volgende week**

De volgende stap was het opdelen van het formulier in stappen, zodat het overzichtelijk blijft voor de gebruiker.

### Feedback gesprek 

### Week 3

**Wat heb ik gedaan?**

Week 3 stond in het teken van het opdelen van het formulier in stappen: 1a, 1b en 1c. Het idee was dat de gebruiker stap 1b pas te zien krijgt nadat stap 1a volledig ingevuld is. Dit heb ik geprobeerd te realiseren zonder JavaScript, door gebruik te maken van de CSS-pseudo-klasse :has() in combinatie met :checked.
Dit was technisch uitdagend: door slim gebruik te maken van de cascade en de DOM-structuur kun je verborgen secties tonen of verbergen op basis van de staat van een formulierveld, puur met CSS. Ik heb veel geëxperimenteerd met de volgorde van elementen en hoe :has() samenwerkt met andere selectors.

**Wat heb ik geleerd?**

De les van deze week was de kracht van :has() en :checked in CSS. Met deze combinatie kun je interactieve gedragspatronen realiseren die je normaal zou verwachten van JavaScript. Dit is een uitstekend voorbeeld van hoe CSS steeds krachtiger wordt en hoe je als developer keuzes maakt over welke laag van de technologie je inzet voor welk probleem.
Ik leerde ook dat het verdwijnen van formulierstappen goed moet worden gecommuniceerd aan de gebruiker — anders is het verwarrend waar een stap naartoe is gegaan.

### Feedback op mezelf

Ik merkte dat ik met de veel fieldsets en divs aan het werken was. Het werdt heel erg ingewikkeld om alles goed op een rij te hebben waardoor ik ben gaan kijken naar het ontwerp en alles css heb verwijderd. Ik heb ze naast elkaar gehouden om vervolgens te kijken waar zou ik een div doen en waar een fieldset om ervoor te zorgen dat de functie werkend blijft maar dat er niet te veel informatie aan divs etc. instaan terwijl het onnodig is.


### Herkansing 

**De belangrijkste feedback voor de herkansing waren:**

* Probeer 

Feedbackmechanismen voor de gebruiker:
* Foutmeldingen zijn toegevoegd voor velden die onjuist zijn ingevuld, zoals: "Vul een geldig BSN-nummer in van 9 cijfers." Deze verschijnen op het juiste moment — niet meteen bij het laden van de pagina, maar pas nadat de gebruiker het veld heeft verlaten of geprobeerd heeft door te gaan.
* Positieve feedback is toegevoegd wanneer een veld correct ingevuld is, zodat de gebruiker weet dat ze goed bezig zijn.
* Continue-berichten zijn toegevoegd om de gebruiker te begeleiden naar de volgende stap, zoals: "Ga verder met vraag 1c."
States:
* Focus states zijn zichtbaar gemaakt zodat toetsenbordgebruikers altijd weten waar ze zich in het formulier bevinden.
* Error states geven duidelijk aan welke velden aandacht nodig hebben.
* Valid states bevestigen correcte invoer visueel.

**Wat heb ik gedaan?**

Op basis van de feedback heb ik het formulier opnieuw bekeken met een frisse blik. Ik ben begonnen met het strippen van de code terug naar de HTML-basis zodat ik vanaf daar verder kan gaan met de CSS en als nodig is Javascript. 

**Wat heb ik geleerd?**

De grootste les van de herkansing was dat gebruiksvriendelijkheid niet vanzelf ontstaat, maar een bewuste ontwerpkeuze is. Door de gebruiker te voorzien van feedback op het juiste moment — niet te vroeg, niet te laat — vergroot je de kans dat het formulier correct wordt ingevuld en dat de gebruiker niet gefrustreerd afhaakt.
Ik heb ook geleerd hoe je verschillende states in CSS en HTML kunt combineren om een rijkere ervaring te bieden. De combinatie van :focus, :valid, :invalid en :user-invalid (waar ondersteund) geeft je als developer krachtige gereedschappen om een formulier te maken dat zich gedraagt zoals een gebruiker verwacht.
Uiteindelijk heeft dit project me laten zien dat progressive enhancement niet alleen een technische strategie is, maar ook een ontwerpfilosofie: begin met wat iedereen nodig heeft, en voeg laag voor laag toe voor wie dat aankan.

**Reflectie op het gehele proces**

Terugkijkend op het project zijn er een aantal dingen die me zijn bijgebleven:
* Wat goed ging: Het experimenteren met puur HTML en CSS voor formuliervalidatie en interactie voelde aanvankelijk beperkend, maar bleek een waardevolle oefening. Het dwingt je om na te denken over de semantiek van je markup en de robuustheid van je ontwerp.
* Wat beter kon: In de beginfase heb ik te snel willen bouwen zonder voldoende na te denken over de eindgebruiker. De feedback na week 3 was confronterend maar noodzakelijk: een werkend prototype is pas waardevol als het ook een goede ervaring biedt.
* Wat ik meeneem: De waarde van progressive enhancement als aanpak, het belang van toegankelijkheid als vertrekpunt (niet als nagedachte), en het bewust kiezen van de juiste technologische laag voor elk probleem.