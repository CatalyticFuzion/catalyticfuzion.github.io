
Gherkin# – Fra krav til kode: BDD, TDD og AI-kompatibel arkitektur

⸻

1. Introduktion: Hvorfor Gherkin#?

I en verden hvor AI, automatisering, kravstyring og DevOps bliver stadig vigtigere, mangler der et effektivt bindeled mellem krav, arkitektur, kode og test.

Klassisk Gherkin blev skabt til at beskrive brugeradfærd narrativt gennem Given/When/Then.
Men det har ingen binding til systemets faktiske arkitektur eller API-design.

Gherkin# tager næste skridt:
Et fuldt systemisk krav- og kodningssprog, som forener BDD’s styrke (narrativer) med TDD’s struktur (input/output) og OOP’s arkitektur (klasser og metoder).

Gherkin# er en Domain Specific Language (DSL), klar til AI, parser, testautomatisering og moderne udviklingsflow.

⸻

2. Grundstruktur i Gherkin#

Gherkin# adskiller klart:
	•	Struktur: (@class, @method, @input, @output, @dependency)
	•	Adfærd: (Given/When/Then)
	•	Dataflow: ([$structured references])

Et Gherkin# dokument starter typisk sådan:

@class: UserService

Feature: User account management

Background:
  Given [$Database.Users] is available

@method: CreateUser
@input: username:text, password:text, email:text

Scenario: Create a new user
  Given [$username]: "john@example.com"
  And [$password]: "secure123"
  And [$email]: "john@example.com"
  When [$UserService.CreateUser] is called
  Expectation:
    - [$UserProfile.IsCreated] = true
    - [$EmailService.SendWelcomeEmail] is triggered

@output: UserProfile



⸻

3. Mapping til C#

Gherkin# metadata maps direkte til C# struktur:

Gherkin#	C#
@class	public class
@method	public metode
@input	metodeparametre
@output	returtype
Given/When/Then	Narrativ, mappes til Steps

Eksempel på C#:

public class UserService
{
    public UserProfile CreateUser(string username, string password, string email)
    {
        // Implementation
    }
}



⸻

4. Datamodeller med @datamodel

Komplekse output beskrives med datamodeller:

@datamodel: UserProfile
@fields:
  - Username: text
  - EmailConfirmed: bool
  - IsCreated: bool

Dette skaber klare, selvstændige typer uden at blande strukturbeskrivelser ind i metodedeklarationerne.

⸻

5. Fuldt Gherkin# til C# eksempel

Gherkin#:

@class: AuthenticationService

Feature: User authentication management

Background:
  Given [$Database.Users] is initialized

@method: AuthenticateUser
@input: username:text, password:text

Scenario Outline: Authenticate a user
  Given [$username]: <username>
  And [$password]: <password>
  When [$AuthenticationService.AuthenticateUser] is called
  Expectation:
    - [$AuthenticationResult.IsSuccess] = <expected_success>

Examples:
  | username          | password    | expected_success |
  | john@example.com  | correct123  | true             |
  | hacker@example.com| wrongpass   | false            |

@output: AuthenticationResult

C#:

public class AuthenticationService
{
    private readonly IUserRepository _repository;

    public AuthenticationService(IUserRepository repository)
    {
        _repository = repository;
    }

    public AuthenticationResult AuthenticateUser(string username, string password)
    {
        var success = _repository.VerifyCredentials(username, password);
        return new AuthenticationResult { IsSuccess = success };
    }
}



⸻

6. Hooks og Miljøopsætning

Hooks definerer opsætning og nedtagning af miljøer:

[Binding]
public class Hooks
{
    [GherkinBeforeScenario("Seed Database")]
    [GherkinGiven("database is clean")]
    [GherkinWhen("test setup starts")]
    [GherkinThen("default users exist")]
    public void SeedDatabase()
    {
        // Setup logic
    }
}

Hooks anvender narrative attributter, der matcher Gherkin# strukturen.

⸻

7. Testing pipelines: Reqnroll og Gherkin#

Gherkin# → Parser → C# Step Definitions → Reqnroll eksekvering.

Eksempel på genereret Steps:

[Binding]
public class AuthenticationSteps
{
    private string _username;
    private string _password;
    private AuthenticationResult _result;

    [Given(@"username ""(.*)""")]
    public void GivenUsername(string username) => _username = username;

    [And(@"password ""(.*)""")]
    public void GivenPassword(string password) => _password = password;

    [When(@"AuthenticationService.AuthenticateUser is called")]
    public void WhenAuthServiceCalled()
    {
        var service = new AuthenticationService(new UserRepository());
        _result = service.AuthenticateUser(_username, _password);
    }

    [Then(@"AuthenticationResult.IsSuccess should be (.*)")]
    public void ThenCheckSuccess(bool expected)
    {
        Assert.AreEqual(expected, _result.IsSuccess);
    }
}

Reqnroll matcher narrative Steps til koden og eksekverer fuldt integrerede tests.

⸻

8. CI/CD integration

I moderne DevOps pipelines kan Gherkin# spille nøglerolle:
	•	Krav verificeres automatisk under build.
	•	Testgenerering og validering sker automatisk.
	•	PlantUML diagrammer genereres fra Gherkin#.
	•	Dokumentation udstedes som en artefakt.
	•	Fuldt Traceability: Krav → Kode → Test → Deployment.

⸻

9. Grafisk Modellering (PlantUML)

Parseren kan generere grafiske modeller automatisk:

@startuml
class AuthenticationService {
    +AuthenticateUser(username, password): AuthenticationResult
}
AuthenticationService --> UserRepository : depends on
@enduml

Dette skaber dokumentation, der er levende og automatisk opdateret.

⸻

10. Fremtiden for Gherkin#

Gherkin# åbner døren for:
	•	Kravstyret udvikling (Requirement Driven Development)
	•	AI-genereret kode fra formelle krav
	•	Automatisk systemdokumentation
	•	Visuel validering af arkitektur
	•	Ultra-hurtig krav → test → kode pipelines

