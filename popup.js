console.log('Hey');
function changeTheme(choice){
    if (choice == "blue"){
        document.body.style.backgroundColor ="lightgrey";
    }
}
document.body.style.backgroundColor = "lightgrey";

var elements = document.getElementsByClassName('repo-list-name');
console.log('You called this class');
elements.sort();
 var div = document.getElementsByClassName('repo-list-item public fork');
for (var i = 0; i < div.length; i++){
    div[i+1].style.display = 'none';
}
