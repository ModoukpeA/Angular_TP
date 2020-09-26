var serieTab= [ 
        { titre:"Le Trône de fer",
        titreOr:"Game of Thrones", 
        createur:" David Benioff et D. B. Weiss", 
        urlImage:"nord2.jpg", 
        etat:"en cours saison 04 diffusée au printemps 2014"}, 
        
        { titre:"Lost : Les Disparus",
        titreOr:"Lost", 
        createur:"J. J. Abrams, Damon Lindelof et Jeffrey Lieber", 
        urlImage:"nord3.jpg",
        etat:"terminée"},
        
        { titre:"Homeland", 
        titreOr:"Homeland",
        createur:"Howard Gordon et Alex Gansa", 
        urlImage:"nord4.jpg", 
        etat:"en cours, saison 03 diffusée en septembre 2013"}
         ] ;
    function monControl ($scope)
        { 
          $scope.tabSerie= serieTab;
        }