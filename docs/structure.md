---
sidebar_position: 2
---

# Struktur i Gherkin#

Gherkin# bruger en klar struktur til at definere systemkomponenter og deres funktionalitet.

## Grundlæggende struktur

- **@class**: Skrives øverst for at definere en klasse.
- **@method**: Skrives før hver Scenario eller Scenario Outline for at definere en metode.
- **@input**: Følger umiddelbart efter @method og definerer parametrene for metoden.
- **Scenario / Scenario Outline**: Beskriver det narrative flow (Given/When/Then).
- **@output**: Placeres efter Expectation, og definerer returtypen for metoden.

## Returværdi i Gherkin#

- I C# returnerer en metode præcis én værdi, med én type.
- I Gherkin# definerer @output denne type – ikke metodens interne tilstand.
- Hvis metoden returnerer et komplekst objekt (klasse eller tuple), beskrives felterne i objektets egen definition, ikke i @output.
- Gherkin Steps (Given/When/Then) forklarer hvordan output bruges eller ændres, men ikke hvad outputstrukturen er.

## Eksempel
