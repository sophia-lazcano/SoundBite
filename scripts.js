console.log("Logging to the console")

function clickhandler(){
    console.log("Accepting a click");
    paragraph = document.getElementById("id1");
    paragraph.innerText = paragraph.innerText + "Howdy again! ";
}

var note = ["AsharpTreble.png",'Atreble.jpg','Btreble.jpg','CsharpTreble.jpg',
'Ctreble.jpg','DsharpTreble.jpg.png','Dtreble.jpg','Etreble.jpg','FsharpTreble.jpg',
'Ftreble.jpg','GsharpTreble.jpg.png','Gtreble.jpg','AsharpBass.jpg','Abass.jpg','Bbass.jpg',
'CsharpBass.png','Cbass.jpg','DsharpBass.png','Dbass.jpg','Ebass.jpg','FsharpBass.png','Fbass.jpg','GsharpBass.png','Gbass.jpg']
var noteL = ['A#','A','B','C#','C','D#','D','E','F#','F','G#','G','A#','A','B','C#','C','D#','D','E','F#','F','G#','G']
var option = note[Math.floor(Math.random()*24)]
//var answer = option == noteL[option]
//var option = note[0]
//document.getElementById('note').innerHTML = option;
document.getElementById('note').src = option;


