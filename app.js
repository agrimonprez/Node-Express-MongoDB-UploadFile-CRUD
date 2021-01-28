const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:Gud0RGzdvxdS8bo4@cluster0.s5cvz.mongodb.net/fullstack?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


const express = require('express');
const app = express();

/* middleware cors
    - Accéder à notre API depuis n'importe quelle origine ( '*' ) ;
    - Ajouter les headers mentionnés aux requêtes envoyées vers notre API (Origin , X-Requested-With , etc.)
    - Envoyer des requêtes avec les méthodes mentionnées ( GET ,POST , etc.)
*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

//extraire l'objet JSON de la demande
const bodyParser = require('body-parser');
app.use(bodyParser.json());


const apiRouter = require('./routes/v1/router'); // Import the application end points/API
app.use('/api', apiRouter); // Assign name to end points

/** 
 * Gérer la ressource images de manière statique (un sous-répertoire de notre répertoire de base, __dirname ) 
 * à chaque fois qu'elle reçoit une requête vers la route /images
 **/ 
const path = require('path');
app.use('/images', express.static(path.join(__dirname, 'images')));


module.exports = app;