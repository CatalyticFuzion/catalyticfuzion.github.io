Gherkin# Manifest

Vision

Gherkin# er skabt for at gøre krav, arkitektur, kode og test til én samlet, iterativ og automatiserbar enhed.

I en verden hvor automatiseret kodning, AI-assistance og DevOps er standard, er der behov for mere end narrativ adfærdsbeskrivelse:
Vi har brug for en struktureret, maskinlæsbar og arkitekturkompatibel DSL.

Gherkin# er svaret på det behov.

⸻

Formål
	•	At strukturere krav så de naturligt mappes til systemarkitektur (klasser og metoder).
	•	At binde adfærdsbeskrivelser direkte til den underliggende systemstruktur.
	•	At gøre krav maskinlæsbare og AI-parbare, så kodning kan automatiseres iterativt.
	•	At understøtte både test og systemdesign med en enkelt, narrativ-venlig, men struktureret DSL.
	•	At forene BDD og OOP i et praktisk, operationelt sprog, der kan drive hele softwareudviklingsprocessen.

⸻

Principper

Princip	Beskrivelse
@class og @method	Definerer systemets objektorienterede struktur (klasser og metoder).
@input og @output	Definerer klart alle dataflows til og fra metoder.
@dependency	Angiver eksplicit hvilke eksterne services/metoder en funktion er afhængig af.
Given/When/Then Steps	Bevarer den narrative form til menneskelig læsbarhed.
[$structured references]	Binder narrative Steps til systemets data og funktioner.
Expectation-sektion	Samler alle output- og sideeffekt-verifikationer på én klar måde.
Scenario Outline	Er blueprint for en metode, understøttet af Examples.
Feature Outline (fremtidig udvidelse)	Er blueprint for en klasse (service) med formål, afhængigheder og API-overblik.



⸻

Hvorfor Gherkin# er nødvendigt
	1.	Klassisk Gherkin var designet til simpel testbeskrivelse – ikke systemarkitektur.
	2.	Moderne udvikling kræver, at krav, kode og tests er strukturelt bundet sammen.
	3.	AI-baseret kodning kræver maskinlæsbare, strukturelle beskrivelser – ikke kun narrativer.
	4.	Systemisk udvikling (DevOps, CI/CD, AutoDoc) kræver fuld tracing fra krav til kode.

⸻

Mål
	•	At kunne beskrive et helt softwaresystem i Gherkin# – fra domænemodel til API til tests.
	•	At kunne generere C#/F#/Dart/TypeScript klasser, metoder og tests direkte fra krav.
	•	At kunne generere PlantUML diagrammer og andre visuelle artefakter automatisk.
	•	At skabe en udviklingscyklus hvor krav, arkitektur og test er én kilde til sandhed.
	•	At gøre AI-baseret samarbejde i kodning naturligt, sikkert og effektivt.

⸻

Gherkin#: From Narrative to Architecture

“Where behavior meets structure – and software grows from stories.”

⸻


⸻

Struktur i Gherkin#

- @class: skrives øverst for at definere en klasse.
- @method: skrives før hver Scenario eller Scenario Outline for at definere en metode.
- @input: følger umiddelbart efter @method og definerer parametrene for metoden.
- Scenario / Scenario Outline beskriver det narrative flow (Given/When/Then).
- @output: placeres efter Expectation, og definerer returtypen for metoden.

⸻


⸻

Returværdi i Gherkin#

- I C# returnerer en metode præcis én værdi, med én type.
- I Gherkin# definerer @output denne type – ikke metodens interne tilstand.
- Hvis metoden returnerer et komplekst objekt (klasse eller tuple), beskrives felterne i objektets egen definition, ikke i @output.
- Gherkin Steps (Given/When/Then) forklarer hvordan output bruges eller ændres, men ikke hvad outputstrukturen er.

Eksempel:

```gherkin
@class: FileService

Feature: File operations

@method: SaveFile
@input: fileSys:FileSys

Scenario: Save a file and update metadata
  Given [$fileSys]: with unsaved changes
  When [$FileService.SaveFile] is called
  Expectation:
    - [$fileSys.LastSaved] is updated
    - [$fileSys.Status] = "Saved"

@output: FileSys
```

C# signatur:

```csharp
public FileSys SaveFile(FileSys fileSys)
```
⸻
