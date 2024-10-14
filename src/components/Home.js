import React, { useState } from 'react';
import Signup from './Signup'; 
import Login from './Login';
// src/components/Home.js
// On importe la bibliothèque React et le hook useState qui permet de gérer l'état dans les composants fonctionnels.
// On importe les composants Signup et Login qui contiennent deux formulaires respectifs.

const Home = () => {
    const [showSignup, setShowSignup] = useState(false);
    const [showLogin, setShowLogin] = useState(true); // Affiche le formulaire de connexion par défaut.

// État pour suivre quel formulaire afficher en premier quand on tombe sur la page.
// Initialement, le formulaire d'inscription n'est pas affiché; setShowSignup est une fonction qui permet de modifier cet état.

    const handleShowSignup = () => {
        setShowSignup(true); // Affiche le formulaire d'inscription.
        setShowLogin(false); // Cache le formulaire de connexion.
    };

    const handleBack = () => {
        setShowSignup(false); // Cache le formulaire d'inscription.
        setShowLogin(true); // Affiche le formulaire de connexion.
    };

    // En gros, on a ici les deux états possibles.

    return (
        <div className="container">
            <h1 class="bebas-neue-regular">Bienvenue</h1>
            <div className="form-container">
                {showLogin && (  
                    <div>
                        <Login /> 
                        <div className="signup-prompt">
                            <p class="bebas-neue-regular">Pas encore membre ? &nbsp;&nbsp;<button onClick={handleShowSignup} class="bebas-neue-regular">S'inscrire</button></p>
                        </div>
                    </div>
                )}
                {showSignup && (
                    <div>
                        <Signup />
                        <p class="bebas-neue-regular">Déjà membre ? &nbsp;&nbsp;<button onClick={handleBack} class="bebas-neue-regular">Se connecter</button></p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;

// Utilisation de conditions pour afficher le formulaire de connexion seulement si showLogin est true. S'il est true, le contenu entre parenthèse s'éxecute. 
// Cela permet d'afficher le formulaire de connexion seulement quand showLogin est true.
// <Login /> est un composant React qui représente le formulaire de connexion. En utilisant <Login />, tu intègres la logique et l'affichage définis dans le fichier Login.js.
// Cela signifie que tout le code et les fonctionnalités que tu as mis en place dans Login.js s'afficheront ici.
// <div className="signup-prompt"> Ce div est utilisé pour créer un espace visuel distinct autour de la phrase qui invite l'utilisateur à s'inscrire.
// onClick={handleShowSignup} : C'est un gestionnaire d'événements. Quand l'utilisateur clique sur le bouton, la fonction handleShowSignup est exécutée. 
// Cette fonction change l'état du composant pour afficher le formulaire d'inscription au lieu du formulaire de connexion.