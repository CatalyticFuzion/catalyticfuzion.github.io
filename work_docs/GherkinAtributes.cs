
	•	@class og @method som OOP struktur
	•	Gherkin som narrativ beskrivelse
	•	@output som metode-returtype
	•	@dependency for afhængigheder
	•	[$structured references] i narrative Steps
	•	Expectation: sektion for output-kontrol
	•	Scenario Outline = metode blueprint
	•	(Og vi forbereder os mentalt på Feature Outline i fremtiden)

⸻

Opdateret BDD_TDD_Gherkin_Sharp.md (Ny Core Architecture)

# Gherkin# Projekt Setup - Core Architecture

## 🧩 Gherkin# Grundstruktur

Feature: [Titel på funktionalitet]  
[Valgfri beskrivelse af formål for hele klassen eller funktionaliteten.]

  Background:
    Given [fælles forudsætninger i [$structured] format]

  Scenario: [Beskrivelse af et konkret scenarie]
    Given [$input_variable]: værdi
    When [$Service.Method] is called
    Expectation:
      - [$output_variable] = forventet værdi
      - [$dependency_call] is triggered

  Scenario Outline: [Blueprint for en metode]
    Given [$input_variable]: <parameter>
    When [$Service.Method] is called
    Expectation:
      - [$output_variable] = <expected_result>

    Examples:
      | parameter | expected_result |
      | værdi1    | resultat1        |
      | værdi2    | resultat2        |

---

## 🧱 Grundlæggende Metadata

Alle Gherkin#-filer starter med en `#meta` blok, som definerer arkitekturen.

```gherkin
#meta
@class: ServiceName
@method: MethodName
@input: input1:type, input2:type
@output: ReturnType
@dependency: OtherService.OtherMethod
@language: cs
#meta_end

Forklaringer:
	•	@class: → definerer C# klassen.
	•	@method: → definerer en metode i klassen.
	•	@input: → definerer metodeparametre.
	•	@output: → definerer metode-returtypen.
	•	@dependency: → deklarerer kald til andre services/metoder.
	•	@language: → angiver målsprog (cs, fsharp, dart, etc.)

⸻

📚 Eksempel på Gherkin# fil

#meta
@class: UserService
@method: CreateUser
@input: username:text, password:text, email:text
@output: UserProfile
@dependency: EmailService.SendWelcomeEmail
@language: cs
#meta_end

Feature: User Profile Management

Background:
  Given [$Database.Users] is available
  And [$EmailService] is running

Scenario: Create a user and send welcome email
  Given [$username]: "john@example.com"
  And [$password]: "secure123"
  And [$email]: "john@example.com"
  When [$UserService.CreateUser] is called
  Expectation:
    - [$UserProfile.IsCreated] = true
    - [$EmailService.SendWelcomeEmail] is triggered

Scenario Outline: Invalid user creation
  Given [$username]: <username>
  And [$password]: <password>
  When [$UserService.CreateUser] is called
  Expectation:
    - [$UserProfile.IsCreated] = <expected_result>

Examples:
  | username           | password   | expected_result |
  | john@example.com   | secure123  | true            |
  | bad@example.com    | weakpass   | false           |



⸻

⚙️ Build og Validation
	•	Hver Gherkin#-fil valideres mod Gherkin# Core Model:
	•	Tjek at @class, @method, @input, @output er til stede.
	•	Tjek at alle [$structured] referencer matcher inputs, outputs eller dependencies.
	•	Parser kan generere:
	•	C# klasser og metoder
	•	MSTest/NUnit testklasser
	•	PlantUML diagrammer
	•	Dokumentation (markdown, HTML)

⸻

🛠️ Hook struktur med Embedded Gherkin#

Hooks defineres direkte i C# ved hjælp af narrativ Gherkin gennem attributter.

using MyProject.GherkinDsl;

[Binding]
public class Hooks
{
    [GherkinBeforeScenario("Seed Database")]
    [GherkinGiven("a clean database")]
    [GherkinWhen("the test starts")]
    [GherkinThen("the database should contain default users")]
    public void SeedDatabase()
    {
        // TODO: Seed database
    }

    [GherkinAfterScenario("Clear Database")]
    [GherkinGiven("a test run has ended")]
    [GherkinWhen("cleanup begins")]
    [GherkinThen("the database should be cleared")]
    public void ClearDatabase()
    {
        // TODO: Clear database
    }
}



⸻

✨ Gherkin# Core Principper

Element	Betydning
@class	C# Klasse Blueprint
@method	Metode Blueprint
@input/@output	Struktureret metode signatur
@dependency	Strukturering af afhængigheder
Scenario	En test af én metode med konkrete data
Scenario Outline	En Blueprint for metoden, understøttet af mange examples
Examples	Parametriserede testdata
Expectation	Klar beskrivelse af output-forventninger
[$references]	Maskinlæsbare ankre til variabler, metoder og services



⸻

✍️ Konklusion

Gherkin# er en evolution af Gherkin til en komplet krav-, arkitektur-, kode- og test-DSL,
designet til AI-integration, parsergeneration, systemanalyse og DevOps-pipelines.

	