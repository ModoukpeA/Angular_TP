var mesFruitsTab=["banane","pomme", "ananas","pêche","fraise"] ; 
function monControl($scope){ 
    $scope.visible=false;
    $scope.mesFruits=mesFruitsTab; 
    $scope.affichage=function()
    { 
        if ($scope.visible==false){ 
        $scope.visible=true; } 
        else{ $scope.visible=false;
           } 
        }
     }
            