import React, { useState } from 'react';
// src/components/Signup.js
// Importation de React et de useState pour gérer l'état.


const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

// Etats pour stocker le login, l'email et le mot de passe de l'utilisateur, tous initialisés à une chaîne vide.
// Ainsi que deux nouveaux états : error pour stocker les messages d'erreur, et success pour stocker les messages de succès.

    const handleSubmit = async (e) => {
        e.preventDefault();

        const existingEmails = ['test@example.com', 'user@example.com'];

        if (!email.includes('@')) {
            setError('Veuillez entrer une adresse email valide.');
            setSuccess('');
            return;
        }

        if (existingEmails.includes(email)) {
            setError('Cet email est déjà utilisé. Veuillez en choisir un autre.');
            setSuccess('');
            return;
        }

        console.log('Nouvel utilisateur:', { username, email, password });
        setSuccess('Inscription réussie !');
        setError('');
    };

// const handleSubmit = (event) => { ... } : Fonction qui est appelée lorsque le formulaire est soumis.
// event.preventDefault(); : Empêche le comportement par défaut du formulaire qui est de recharger la page. Cela permet de gérer la soumission de manière contrôlée.
// const existingEmails = ['test@example.com', 'user@example.com']; simule la vérification de l'email. Ici, un tableau est créé, dans un vrai scénario, on ferait une requête à un serveur pour vérifier la disponibilité de l'email.
// if (!email.includes('@'))... cherche à vérifier la validité de l'email. S'il ne comprend pas de @, ça affiche un message d'erreur.
// if (existingEmails.includes(email)).. Avant de procéder à l'inscription, le code vérifie si l'email entré est déjà dans la liste existingEmails. Si c'est le cas, un message d'erreur est affiché et la fonction est arrêtée avec return.


    return (
        <div>
            <h2 class="bebas-neue-regular">Créer un compte</h2>
            <form onSubmit={handleSubmit}>
                <input class="bebas-neue-regular"
                    type="text"
                    placeholder="Nom d'utilisateur"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input class="bebas-neue-regular"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input class="bebas-neue-regular"
                    type="password"
                    placeholder="Mot de passe"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" class="bebas-neue-regular">S'inscrire</button>
                {error && <p className="error-message">{error}</p>} {/* Affiche le message d'erreur */}
                {success && <p className="success-message">{success}</p>} {/* Affiche le message de succès */}
            </form>
        </div>
    );
};

export default Signup;

// Chaque champ <input> utilise les propriétés value et change.
// value={email} lie le champ email à létat email.
// onChange={(e) => setEmail(e.target.value)} met à jour l'état email avec la valeur saisie par l'utilisateur.

// Résumé des concepts :
// Etat Local : Utilisation de useState pour gérer les valeurs des champs de formulaire et déterminer quel formulaire afficher
// Gestion des Evénements : Les fonctions de gestion des événements (handleShowSignup, handleShowLogin et handleSubmit) permettent de contrôler le comportement de l'application lors des interactions utilisateur.
// Condition de Rendu : Utilisation des conditions pour afficher dynamiquement les formulaires en fonction de l'état.
// CSS Dynamique : Application de classes CSS pour gérer les transitions et les animations lors de l'affichage des formulaires.