# Zippybeats

# 🎶 **ZippyBeats - Muzyczny Odtwarzacz dla Dzieci** 🎶

ZippyBeats to aplikacja internetowa, która pozwala dzieciom odkrywać i słuchać muzykę w sposób interaktywny, zabawny i edukacyjny. Umożliwia tworzenie playlist, filtrowanie po tagach oraz łatwe odtwarzanie muzyki z popularnej platformy Spotify.

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

1. **Tworzenie playlist**:
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


