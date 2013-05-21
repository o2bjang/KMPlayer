var myApp = angular.module('myApp', []);

myApp.factory('Song', function(){
	return{songpath:"", songplay:false}
})
/* Controllers */

function KMPlayerCtrl($scope, Song){


$scope.songs = [];
$scope.song = Song;
$scope.songselect = '';
$scope.program = false;
$scope.playsong = false;
$scope.songpath = "";

$scope.addsong = function(position){
	if($scope.program == true){
	$scope.songs.push({songid: position, songnumber: $scope.songselect});
	$scope.songselect = '';
	$scope.program = false;
	}
	if($scope.playsong == true){
		$scope.song.songpath = 'songs/iasn_E_011.mp3';
		$scope.song.songplay = true;
	}
}

$scope.digitAdd = function(digit){
	$scope.songselect = $scope.songselect + digit;
}

$scope.canProgram = function(){
	$scope.program = true;
}

$scope.canPlaySong = function(){
	$scope.playsong = true;
}

}


function KMPlaySongCtrl($scope, Song)
{

$scope.song = Song;

/*	if($scope.song.songplay == true){
		$scope.load();
		document.getElementById("audio-tag").load();
		}
*/
}


