import React, { useState } from 'react';
// src/components/Login.js
// Importation de React et de useState pour gérer l'état.


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

// Etats pour stocker l'email et le mot de passe de l'utilisateur, tous initialisés à une chaîne vide.

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Tentative de connexion:', { email, password });
        alert('Connexion réussie !');
    };

// const handleSubmit = (event) => { ... } : Fonction qui est appelée lorsque le formulaire est soumis.
// event.preventDefault(); : Empêche le comportement par défaut du formulaire qui est de recharger la page. Cela permet de gérer la soumission de manière contrôlée.

    return (
        <div>
            <h2 class="bebas-neue-regular">Connexion</h2>
            <form onSubmit={handleSubmit}>
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
                <button type="submit" class="bebas-neue-regular">Se connecter</button>
            </form>
        </div>
    );
};

export default Login;

// Chaque champ <input> utilise les propriétés value et change.
// value={email} lie le champ email à létat email.
// onChange={(e) => setEmail(e.target.value)} met à jour l'état email avec la valeur saisie par l'utilisateur.