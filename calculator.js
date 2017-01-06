// JavaScript Document

// change display

function d(val){
document.getElementById("d").value = val;
}


// type values and operators

function v(val){
document.getElementById("d").value += val;
}


// evaluate

function e(){

try{
	d(eval(document.getElementById("d").value));
}
catch(err) {
	d("error 404");
}
}
