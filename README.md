# Zippybeats

# 🎶 **ZippyBeats - Muzyczny Odtwarzacz dla Dzieci** 🎶

ZippyBeats to aplikacja internetowa, która pozwala dzieciom odkrywać i słuchać muzykę w sposób interaktywny, zabawny i edukacyjny. Umożliwia odtwarzanie playlist, filtrowanie ich po tagach.

## 🚀 **Spis Treści**
1. [Opis Aplikacji](#opis-aplikacji)
2. [Użyte Technologie](#użyte-technologie)
3. [Funkcjonalności](#funkcjonalności)
4. [Instalacja](#instalacja)
5. [Struktura Katalogów](#struktura-katalogów)
6. [Znane Problemy](#znane-problemy)

---

## 🎵 **Opis Aplikacji**

ZippyBeats to aplikacja stworzona z myślą o dzieciach i ich muzycznych przygodach.
Aplikacja oferuje specjalnie dobrane playlisty stworzone z myślą o dzieciach. Każda ścieżka została starannie wyselekcjonowana, aby była bezpieczna, odpowiednia do wieku i wspierała rozwój maluchów — zarówno emocjonalny, jak i poznawczy. Rodzice nie muszą się martwić o nieodpowiednie treści ani zastanawiać się, jaka muzyka będzie najlepsza dla ich dziecka. Aplikacja upraszcza cały proces – wszystko jest gotowe do odtworzenia jednym kliknięciem.
Umożliwia także filtrowanie playlist za pomocą przyjaznego interfejsu i filtrów tagów (np. "Relaks", "Zabawne", "Edukacyjne"), co pozwala dzieciom łatwo znaleźć muzykę dostosowaną do ich nastroju i potrzeb.

## ⚙️ **Użyte Technologie**

### Frontend:
- **React.js** - Do budowy interfejsu użytkownika.
- **Tailwind CSS** - Do stylowania komponentów UI z pomocą utility-first CSS framework.
- **React Router** - Używane do nawigacji pomiędzy różnymi widokami aplikacji.
- **Axios** - Używane do komunikacji z backendem i API (pobieranie danych playlist i tagów).

### Backend:
- **Node.js** - Serwer do obsługi logowania i zarządzania danymi użytkowników.
- **Express** - Framework do budowy API i routingu.
- **Spotify Web API** - Integracja z Spotify w celu odtwarzania muzyki i zarządzania playlistami.
- **MongoDB** - Baza danych do przechowywania playlist, tagów i innych danych aplikacji.

### Autoryzacja:
- **OAuth 2.0** (Spotify Authentication) - Mechanizm autoryzacji, który pozwala użytkownikom logować się przez Spotify.

---

## 🔧 **Funkcjonalności**

1. **Playlisty**
   - Użytkownicy mogą wybierać spośród wielu playlist przystosowanych specjalnie dla dzieci.
   
2. **Filtrowanie playlist**:
   - Playlisty można filtrować po tagach (np. edukacyjne, relaksacyjne, zabawne), co pozwala dzieciom łatwo znaleźć muzykę dostosowaną do ich nastroju i potrzeb.
   
3. **Odtwarzanie muzyki przez Spotify**:
   - Aplikacja integruje się z platformą Spotify, pozwalając na odtwarzanie muzyki bezpośrednio w aplikacji.
   
4. **Autoryzacja przez Spotify**:
   - Użytkownicy mogą logować się za pomocą swojego konta Spotify.

5. **Edukacyjne funkcje**:
   - Aplikacja może oferować edukacyjne funkcje takie jak odtwarzanie muzyki do nauki języków, matematyki, czy kształtowanie emocji.

6. **Przyjazny interfejs**:
   - Intuicyjny i przyjazny interfejs z elementami przyjaznymi dla dzieci (np. duże przyciski, jasne kolory, wesoła czcionka).

---
# Dokumentacja projektu – ZippyBeats

## 1. Charakterystyka oprogramowania

### a. Nazwa skrócona
ZippyBeats

### b. Nazwa pełna
ZippyBeats – interaktywny odtwarzacz muzyki dla dzieci z integracją Spotify

### c. Krótki opis ze wskazaniem celów
ZippyBeats to aplikacja webowa wspomagająca rozwój emocjonalny i poznawczy dzieci poprzez muzykę.

Celem projektu jest dostarczenie narzędzia umożliwiającego opiekunom, nauczycielom i dzieciom łatwe korzystanie z muzyki w sposób bezpieczny, uporządkowany i angażujący. Aplikacja integruje się z kontem Spotify użytkownika i oferuje losowe odtwarzanie, odtwarzabue playlist tematycznych oraz intuicyjny interfejs wspierający samodzielność dziecka.

---

## 2. Prawa autorskie

### a. Autorzy
- Patrycja Stanisławczyk
- Patrycja Duliasz
- Natalia Knapik
  
### b. Warunki licencyjne
Oprogramowanie zostało stworzone na potrzeby przedmiotu Inżynieria Oprogramowania i udostępnione jest na licencji MIT.

---

## 3. Specyfikacja wymagań

### a. Lista wymagań

| ID  | Nazwa                          | Opis                                                                 | Priorytet | Kategoria        |
|-----|--------------------------------|----------------------------------------------------------------------|-----------|------------------|
### Specyfikacja wymagań

| ID   | Nazwa                          | Opis                                                                 | Priorytet | Kategoria         |
|------|--------------------------------|----------------------------------------------------------------------|-----------|--------------------|
| R1   | Logowanie przez Spotify        | Użytkownik loguje się przez OAuth 2.0 do swojego konta Spotify      | 1         | funkcjonalne       |
| R2   | Pobieranie playlist z API      | Aplikacja pobiera playlisty z backendu lub bezpośrednio z Spotify   | 1         | funkcjonalne       |
| R3   | Przeglądanie playlist dzieci   | Lista dostępnych playlist z tytułami                    | 1         | funkcjonalne       |
| R4   | Odtwarzacz muzyki              | Wbudowany odtwarzacz Spotify SDK do słuchania muzyki                | 1         | funkcjonalne       |
| R5   | Tryb losowego odtwarzania      | Odtwarzanie losowego utworu z dostępnych playlist                   | 2         | funkcjonalne       |
| R6   | Kolorystyka i kontrast         | Przyjazny dzieciom design w odcieniach różu                          | 2         | pozafunkcjonalne   |
| R7   | Ochrona błędów po stronie UI   | Informowanie użytkownika o błędach logowania lub tokenów            | 1         | pozafunkcjonalne   |


## 4. Architektura systemu

### a. Architektura rozwoju

| Narzędzie/technologia | Przeznaczenie                        | Wersja    |
|------------------------|--------------------------------------|-----------|
| React.js              | Frontend aplikacji                   | 16.x      |
| Node.js               | Backend do obsługi OAuth             | 18.x      |
| Express               | Serwer API dla Spotify               | 4.x       |
| Spotify Web API       | Integracja z kontem użytkownika      | N/A       |
| GitHub                | System kontroli wersji               | N/A       |
| SSMS/T-SQL             | Baza danych przechowująca nazwy i url do playlist | N/A |

### b. Architektura uruchomieniowa

| Narzędzie/technologia | Przeznaczenie                      | Wersja    |
|------------------------|------------------------------------|-----------|
| Google Chrome / Edge         | Przeglądarka testowa               | Najnowsza |
| Node.js                | Serwer backendowy                  | 18.x      |
| Spotify Account        | Uwierzytelnianie i odtwarzanie     | N/A       |

---

## 5. Testy

### a. Scenariusze testów

#### Test R1 – Logowanie
**Warunki początkowe:** Użytkownik nie jest zalogowany.  
**Kroki:**
1. Kliknij przycisk "Log in with Spotify"
2. Zatwierdź dostęp na stronie Spotify  
**Oczekiwany rezultat:** użytkownik zostaje przekierowany do `/playlists`

#### Test R4 – Odtwarzanie utworu
**Warunki początkowe:** Użytkownik jest zalogowany i wybrał playlistę  
**Kroki:**
1. Kliknij "▶️ Play"  
**Oczekiwany rezultat:** utwór rozpoczyna się w odtwarzaczu Spotify SDK

### b. Sprawozdanie z testów

| ID testu | Wynik | Uwagi                          |
|----------|-------|--------------------------------|
| R1       | OK    | Logowanie działa poprawnie     |
| R4       | OK    | Odtwarzanie działa zgodnie z API |

---

## Uwagi końcowe

Projekt spełnia wszystkie kluczowe wymagania funkcjonalne i pozafunkcjonalne. Kod źródłowy znajduje się w repozytorium GitHub.



