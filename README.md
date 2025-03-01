# BrainBusters

BrainBusters est une application web de quiz permettant aux utilisateurs de tester leurs connaissances sur divers sujets. L'application utilise l'API Open Trivia Database (OpenTDB) pour générer des questions de quiz dynamiques. Les utilisateurs peuvent choisir entre un mode classique et un mode personnalisé pour adapter leur expérience de quiz.

## Fonctionnalités

### 1. **Page d'accueil (homepage.js)**
- Deux modes disponibles :
  - **Mode Classique** : Lance un quiz de 10 questions générées aléatoirement.
  - **Mode Personnalisé** : Permet aux utilisateurs de choisir la catégorie, la difficulté, le type de questions et le nombre de questions.
- Historique : Redirige vers une page affichant les scores précédents enregistrés.

### 2. **Page Quiz (quiz.js)**
- Récupération des questions depuis l'API OpenTDB via `fetch`.
- Affichage dynamique des questions avec des réponses mélangées.
- Mise à jour du score en fonction des réponses correctes.
- Affichage du score final et enregistrement dans `localStorage`.
- Redirection vers la page d'accueil après la fin du quiz.

### 3. **Système de Stockage des Scores**
- Les scores des utilisateurs sont stockés dans `localStorage` sous la clé `quizScores`.
- Possibilité de voir l'historique des scores sur la page dédiée.

## Technologies Utilisées
- **HTML** : Structure de l'application.
- **CSS** : Mise en forme et design de l'interface.
- **JavaScript** : Gestion des événements, récupération des données et mise à jour dynamique de l'interface.
- **OpenTDB API** : Source des questions de quiz.
- **LocalStorage** : Stockage temporaire des scores et des paramètres du quiz.