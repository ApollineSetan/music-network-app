// src/App.js
import React from 'react'; // Importe la bibliothèque React. Ce qui est nécessaire pour créer des composants.
import Home from './components/Home'; // Importe le composant Home. Le composant Home est là où tu auras la logique et le rendu pour la page d'accueil de ton application.
import './App.css'; // Importe le fichier CSS pour le style

function App() {
    return (
        <div className="App">
            <Home />
        </div>
    );
}

export default App;

// function App() {...} définit un composant fonctionnel nommé App. Les composants fonctionnels sont des fonctions JavaScript qui retournent du JSX (la syntaxe utilisée par React pour décrire l'interface utilisateur).
// A l'intérieur de ce composant, tu vas définir ce que doit afficher l'application.
// return (...) indique ce que le composant App doit rendre. Tout ce qui se trouve à l'intérieur des parenthèses sera affiché à l'écran.
// <div className="App"> Ceci crée un élèment <div> avec une classe CSS App. Cela peut être utilisé pour appliquer des styles spécifiques à cette partie de l'application.
// <Home /> est une balise JSX qui rend le composant Home. Cela signifie que tout le contenu et la logique seront affichés à cet endroit dans l'application.
// export default App,  permet d'exporter le composant App pour qu'il puisse être importé et utilisé dans d'autres fichiers, comme le fichier index.js où l'application React est initialisée.
