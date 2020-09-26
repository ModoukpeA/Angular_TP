var mesFruitsTab=[] ;
 function monControl($scope)
  { 
    $scope.mesFruits=mesFruitsTab; 
    $scope.ajout=function()
    { 
      
      if ($scope.monFruit!="")
        {
        $scope.mesFruits.push($scope.monFruit) ; 
        $scope.monFruit="";
        }
     }
   }