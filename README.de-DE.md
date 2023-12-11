<h1 align='center'>
Vue-Lebenslauf-Vorlage
</h1>

<p align='center'>
<a href="https://github.com/nyxb/vue-resume-template/blob/main/README.md">Englisch</a> | <b>German</b>
</p>

<p align='center'>
Dieses Theme bietet ein einfaches und sauberes Design, das speziell für die Erstellung benutzerfreundlicher Website-Lebensläufe oder CV-Landingpages maßgeschneidert ist. Es ist mit Vue 3.0 (Composition API) und Bootstrap 5 gebaut und bietet ein zusammenhängendes Einseiten-Layout, das Funktionalität und Ästhetik verbindet.
</p>

Schlüsselmerkmale:
- Eine verankerte feste Seiten-Navigationsleiste für sanftes Scrollen durch die Seite.
- Sechs individuelle Abschnittslayouts, die Berufserfahrung, Bildungshintergrund, professionelle Fähigkeiten, Portfolio und mehr präsentieren.
- Ein maßgeschneiderter Navigationsmodus speziell für mobile Bildschirme.
- Unterstützung für mehrsprachige Übersetzungen inklusive.
- Nutzung von Vite für schnellere Build-Zeiten und nahtlose Integration.

## Vorschau

Schau dir eine Live-Version der Vorlage **[hier an](https://dennis-ollhoff.space).**

## Erste Schritte

1. Klone das Repository:
```
git clone https://github.com/ryanbalieiro/vue-resume-template
```

2. Navigiere zum Wurzelverzeichnis des Projekts und installiere alle Abhängigkeiten mit pnpm:
```
pnpm i
```

3. Führe das Projekt im Entwicklermodus aus:
```
pnpm run dev
```

4. Um die Vorladeanimation während der Anpassungen des Themas vorübergehend zu deaktivieren, navigiere zu `public/data/settings.json` und modifiziere das folgende Feld:

```
 "preloaderEnabled": false
```

## Einrichtung für das Herunterladen von Lebenslauf-PDFs

Um den Benutzern das Herunterladen deines Lebenslaufs im PDF-Format zu ermöglichen, befolge bitte die folgenden Schritte:

1. Platziere deine Lebenslauf-PDF-Dateien im Verzeichnis `public/cv/` innerhalb deines Projekts.
2. Stelle sicher, dass jede PDF-Datei nach dem Schema `CV-LANGCODE.pdf` benannt ist, wobei `LANGCODE` den in deinen Spracheinstellungen festgelegten Sprachcodes entspricht (z.B. `CV-EN.pdf`, `CV-DE.pdf`, `CV-IT.pdf` usw.).

### Individuelle Lebenslauf-Vorlage

Zusätzlich habe ich eine anpassbare Lebenslauf-Vorlage in InDesign erstellt, die du gerne nutzen kannst. Du findest diese Vorlage unter dem folgenden Link: [InDesign Lebenslauf-Vorlage](https://665954502273.gumroad.com/l/enujv). Diese Vorlage ist so gestaltet, dass sie leicht anpassbar ist und dir helfen kann, ein konsistentes und professionelles Erscheinungsbild über verschiedene Versionen deines Lebenslaufs hinweg zu wahren.


## Anpassung der Vorlage

### 1. Inhalte ändern

Die Inhalte der Anwendung, einschließlich Texte und Bilder, werden praktischerweise im `public/` Ordner gespeichert. In diesem Verzeichnis findest du zwei Ordner:

- `public/data` ➔ Dieser Ordner beherbergt eine Sammlung von JSON-Dateien, die die Gesamtheit der Inhalte der Anwendung enthalten.
- `public/images`➔ Hier findest du eine Sammlung von Icons und Fotos, die die Anwendung verwendet.

Du kannst die Inhalte der App personalisieren, indem du die Daten in diesen beiden Ordnern nach deinen Vorlieben anpasst.

### 2. Farben schnell anpassen

Das Anpassen der Themefarben kann schnell erfolgen, indem du die Variablen in `src/scss/_variables.scss` bearbeitest. Um dies zu veranschaulichen, kann eine Variation des Themas mit Grüntönen erstellt werden, indem du die folgenden Variablen modifizierst:

```scss
$primary: #13a452; /** ändere die 'primary' Farbe zu Grün **/
$dark: #021307; /** ändere die 'dark' Farbe zu einem dunklen Grün **/
$background-color: #f8fff8; 
```

### 3. Sprachen hinzufügen und entfernen

Um Sprachen hinzuzufügen oder zu entfernen, öffne `public/data/settings.json` und modifiziere das Feld `supportedLanguages` wie benötigt. Nutze die `default` Eigenschaft, um die Fallback-Sprache festzulegen, die verwendet werden soll, wenn die Anwendung die bevorzugte Sprache des Benutzers nicht unterstützt.

```json
{
  "supportedLanguages": [
    {
      "name": "Deutsch",
      "id": "de",
      "flagUrl": "images/flags/de.png"
    },
    {
      "name": "English",
      "id": "en",
      "flagUrl": "images/flags/en.png",
      "default": true
    },
    {
      "name": "Italienisch",
      "id": "it",
      "flagUrl": "images/flags/it.png",
      "default": true
    }

  ]
}
```

Der Ordner `public/images/flags/` enthält bereits eine Sammlung von Flaggen. Wenn du ein spezifisches Flaggen-Symbol benötigst, das dort nicht vorhanden ist, kannst du es kostenlos von dieser [Quelle](https://www.flaticon.com/packs/countrys-flags) herunterladen.

Um die Unterstützung für mehrere Sprachen zu deaktivieren, behalte nur eine einzige Sprache im Array. Dies wird autom

atisch das Sprachauswahlmenü verbergen.

### 4. Abschnitte hinzufügen, entfernen und neu anordnen

Im `public/data/sections.json` File findest du zwei Arrays: eines für Abschnitte und das andere für Kategorien. Jeder Abschnitt in der Anwendung sollte einer entsprechenden Kategorie zugeordnet sein. Diese Kategorien werden verwendet, um Abschnitte innerhalb der mobilen Navigation zu gruppieren.

Das Hinzufügen, Entfernen oder Neuordnen der Portfolioabschnitte und -kategorien kann durch Änderungen an diesen Arrays erfolgen.

Um die Titel der Abschnitte und Kategorien zu lokalisieren, stelle sicher, dass die `id` jedes Abschnitts und jeder Kategorie eine entsprechende Übersetzung in `public/data/strings.json` hat.

*public/data/strings.json*
```json 
{
  "en": {
    "about": "About",
    "aboutProject": "About Project",
    "achievements": "Achievements"
  },

  "de": {
    "about": "Über mich",
    "aboutProject": "Über das Projekt",
    "achievements": "Erfolge"
  }
}
```

### 5. Einen Abschnitt anpassen

Jeder Abschnittseintrag in `public/data/sections.json` umfasst die folgenden Felder:

```json 
{
  "id": "experience",
  "categoryId": "background",
  "component": "TimelineSection",
  "jsonPath": "data/sections/experience.json",
  "faIcon": "fa-solid fa-briefcase"
}
```

- ***id*** ➔ Ein eindeutiger Identifikator für den Abschnitt, der auch als Schlüssel verwendet wird, um den Namen des Abschnitts in `strings.json` abzurufen.
- ***categoryId*** ➔ Gibt die Kategorie an, zu der der Abschnitt gehört.
- ***component*** ➔ Zeigt die Vue-Komponente an, die für das Rendering des Abschnitts verantwortlich ist.
- ***jsonPath*** ➔ Ein Verweis auf die JSON-Datei, die den Inhalt des Abschnitts enthält.
- ***faIcon*** ➔ Das mit dem Abschnitt assoziierte FontAwesome-Icon.

Um den Inhalt eines Abschnitts zu ändern, öffne und bearbeite die entsprechende JSON-Datei. Beachte, dass jede Vue-Komponente möglicherweise eine spezifische JSON-Struktur benötigt. Für die korrekte Strukturierung der Abschnitts-JSON-Dateien verwende die vorhandenen als Leitfaden.

### 6. Felder lokalisieren

Um den Richtlinien des Projekts zu entsprechen, lege die Übersetzungen für deine statischen Texte in der Datei `public/data/strings.json` ab. Diese Datei dient als Zentrum für alle globalen Lokalisierungsbedürfnisse. Für inhalts- und komponentenspezifische Inhalte erstelle ein `locales` Feld, um die entsprechenden Übersetzungen zu kapseln.

Jedes lokalisierbare Objekt folgt der folgenden Struktur:

```
{
    "locales": {
        "en": {
            "hello": "Hello!",
            "age": "Age"
        },
        
        "de": {
            "hello": "Hallo!",
            "age": "Alter"
        },
        
        (...)
    }
}
```

### 7. Funktionalität zum Kontaktformular hinzufügen

Um das Kontaktformular funktionsfähig zu machen, musst du deine eigene serverseitige Implementierung innerhalb der `ContactForm.vue`-Datei erstellen. Bitte beachte, dass die aktuelle Vorlage nur die clientseitige Implementierung enthält, begleitet von einer simulierten Verzögerung mit einem Platzhalter-Timeout, um die Wartezeit für Anfragen nachzuahmen:


```js
function _sendMessage(values) {
   const feedbackView = layout.getFeedbackView()
   feedbackView.showActivitySpinner(`${data.getString('sendingMessage')}...`)
   submitAttempts++

   /** Die Logik zum Senden der Nachrichten geht hier... */
   // setTimeout(() => {
   //    if(submitAttempts % 2 !== 0) {
   //        _onMessageSent()
   //    }
   //    else {
   //        _onMessageError()
   //    }
   // }, 1000)
   /** */
}
```

## Für die Produktion bauen

Netlify macht den Prozess des Web-Developments oder das Bereitstellen von Seiten online un

kompliziert. Hier ist eine schrittweise Anleitung für Anfänger:

### Schritt-für-Schritt-Anleitung zum Hosten einer Vue.js-Anwendung auf Netlify:

1. **Melde dich bei Netlify an:**
   - Besuche [Netlify](https://www.netlify.com/).
   - Klicke auf den 'Sign up'-Button, um ein neues Konto zu erstellen. Du kannst dich mit GitHub, GitLab, Bitbucket oder einer E-Mail-Adresse anmelden.

2. **Erstelle eine neue Seite:**
   - Nachdem du dich eingeloggt hast, klicke auf 'New site from Git'.
   - Du wirst aufgefordert, einen Git-Provider wie GitHub, GitLab oder Bitbucket auszuwählen. Hier befindet sich das Repository deines Projekts.

3. **Autorisiere Netlify:**
   - Wenn du Netlify zum ersten Mal mit deinem Git-Provider verbindest, musst du Netlify den Zugriff auf deine Repositories gewähren.
   - Nach der Autorisierung wähle das Repository aus, das dein Vue.js-Projekt enthält.

4. **Konfiguriere dein Projekt:**
   - Netlify wird nach den Build-Einstellungen fragen. Gib folgendes ein:
     - **Build-Befehl:** Dies ist der Befehl, um einen Produktionsbuild deiner Seite zu erstellen. Für Vue.js-Projekte ist es normalerweise `npm run build`.
     - **Verzeichnis veröffentlichen:** Hier wird Netlify nach deinem Build-Output suchen, um ihn zu deployen. Für Vue.js-Projekte ist es normalerweise `dist/`.
   - Klicke auf 'Deploy site'. Netlify startet dann den Build-Prozess und stellt deine Seite bereit.

5. **Überprüfe deine Seite:**
   - Netlify stellt dir eine temporäre URL zur Verfügung, unter der du deine Live-Seite ansehen kannst, wie zum Beispiel `https://deinseitenname.netlify.app`.
   - Besuche diese URL, um sicherzustellen, dass deine Seite wie erwartet funktioniert.

6. **Kontinuierliche Bereitstellung:**
   - Standardmäßig richtet Netlify eine kontinuierliche Bereitstellung für deine Seite ein. Das bedeutet, dass jedes Mal, wenn du neue Änderungen an dein Repository pushst, Netlify automatisch einen neuen Build erstellt und deine Seite neu deployt.

7. **Eigene Domains:**
   - Du kannst auch eine eigene Domain für deine Seite über den 'Domain management'-Bereich von Netlify einrichten.

## Eigene Domain einrichten

Nachdem du deine Vue.js-Anwendung auf Netlify bereitgestellt hast, kannst du überlegen, eine eigene Domain für deine Seite einzurichten, anstatt die Standard-URL von Netlify zu verwenden. Eine eigene Domain kann deiner Website ein professionelleres Aussehen verleihen und ist oft leichter zu merken.

### Domain-Kauf bei Namecheap

- Eine Option für den Kauf einer Domain ist [Namecheap](https://www.namecheap.com/), ein beliebter Domain-Registrar.
- Bei Namecheap kannst du Domains oft schon für so wenig wie 1,54€ erwerben, was es zu einer kostengünstigen Option macht, insbesondere für Einsteiger oder wenn du ein begrenztes Budget hast.
- Nach dem Kauf deiner Domain kannst du die DNS-Einstellungen so konfigurieren, dass sie auf deine Netlify-Website zeigen. Netlify bietet eine detaillierte Anleitung, wie du deine benutzerdefinierte Domain einrichtest.

### Vorteile einer eigenen Domain

- Eine eigene Domain erhöht die Glaubwürdigkeit und Professionalität deiner Website.
- Sie bietet auch eine höhere Flexibilität und Kontrolle über deine Online-Präsenz.
- Eine benutzerdefinierte Domain kann auch SEO-Vorteile bieten und die Auffindbarkeit deiner Website verbessern.

Indem du eine eigene Domain einrichtest, gibst du deiner Website eine persönliche Note und verbesserst ihre Sichtbarkeit im Internet.

## Über

Diese Vorlage wurde von und wird gepflegt von **[Dennis Ollhoff](https://nyxb.nexus/)**.

Sie basiert auf dem [Bootstrap](https://getbootstrap.com/)-Framework, das von Mark Otto und Jacob Thornton erstellt wurde; und dem [Vue](https://vuejs.org/)-Framework, das von Evan You erstellt wurde.

## Urheberrecht und Lizenz

Der Code wurde unter der [MIT](./LICENSE)-Lizenz veröffentlicht, die vollständige Freiheit für die Nutzung bietet. Fühle dich frei, sie zu verbessern und anzupassen, um sie deinen Bedürfnissen anzupassen.
