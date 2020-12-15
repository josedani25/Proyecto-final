var editor = ace.edit("editor");

editor.session.setMode("ace/mode/javascript");
var size = 12;

function plus(){
    size = size+5;
    document.getElementById('editor').style.fontSize=''+(size)+'px';
}
function minus(){
    size = size-5;
    document.getElementById('editor').style.fontSize=''+(size)+'px';
}