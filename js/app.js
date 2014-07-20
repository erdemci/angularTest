/**
 * Created by Veysel-ErdemciPC on 18.07.2014.
 */

var app=angular.module('form',[]);

app.controller('formCtrl',function($scope,$http){

   var promise= $http.get("js/sorular.json");

       promise.success(function(data){
            $scope.sorular=data;
        })
       promise.error(function(status){
            $scope.hata=status;
        });

    var ySelect=[];
    var nSelect=[];

    var userAns=[];

    $scope.NisSet=function(id){
        if(nSelect[id])
            return true;
        else
            return false;
    };

    $scope.YisSet=function(id){
        if(ySelect[id])
            return true;
        else
            return false;
    };

    var ySet=function(id){
        ySelect[id]=true;
    };

    var nSet=function(id){
        nSelect[id]=true;
    };

    $scope.change = function(ans,id) {
        if(ans=='yes'){
            userAns[id]=true;
            ySet(id);
        }
        else if(ans=='no'){
            userAns[id]=false;
            nSet(id);
        }
    };
    var yes=0;
    var no=0;


    $scope.degerlendir=function(){
        for(var i=1;i<=userAns.length;i++){
            if(userAns[i]===true){
                yes++;
            }
            else if(userAns[i]===false){
                no++;
            }
        }
        console.log("Evet Sayısı:"+yes);
        console.log("Hayır Sayısı:"+no);
        if(yes>=37*8/10){
            alert("Panik Bozukluk tanısı alma olasılığınız yüksek");
        }else{
            alert("Panik Bozukluk tanısı alma olasılığınız düşük");
        }
    };


});
