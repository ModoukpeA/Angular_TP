var meselevesTab=[] ;
 function monControl($scope)
  { 
    $scope.meseleves=meselevesTab; 
    function ajout($scope)
    { 
      
      if ($scope.el!="" && $scope.el1!="" && $scope.el2!="" )
        {
        $scope.meseleves.push($scope.el) ; 
        $scope.el="";
        // $scope.meseleves.push($scope.el1) ; 
        // $scope.el1="";
        // $scope.meseleves.push($scope.el2) ; 
        // $scope.el2="";
        }
     }
   }   