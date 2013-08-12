window.gameLoad = fonction(bbqgame) {         // fonction appelée par le manager
       var bbq = bbqgame;                                // il faudrait peut être limiter cet objet (juste ready() ?)

       bbqgame.onStart(function(difficulty) {

            console.log( "c'est parti en difficulté " + difficulty);
    
       });


       $.ajax(charge_plein_de_trucs, function(){  // chaque jeu charge ses assets 

             // ok, fini de charger mes 50Mo d'images
             
             bbq.ready();                                       // le manager peut arrêter le "loading..."
                                                                     //  et lancer le jeu avec onStart() du mini jeu
       })
}
