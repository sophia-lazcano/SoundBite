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

var beat = ["sixteenth_note.png","sixteenth_rest.png","eighth_note.png","eighth_rest.png","quarter_note.png","quarter_rest.png","half_note.png","half_rest.png","whole_note.jpg","whole_rest.png"]

var noteL = ['A#','A','B','C#','C','D#','D','E','F#','F','G#','G','A#','A','B','C#','C','D#','D','E','F#','F','G#','G']
var beatN = ['1/16','1/16','1/8','1/8','1/4','1/4','1/2','1/2','1/1','1/1']
var option = note[Math.floor(Math.random()*24)]
var optionB = beat[Math.floor(Math.random()*10)]

if(document.getElementById('note')) {
    document.getElementById('note').src = option;
}

if(document.getElementById('beat')) {
    // document.getElementById('note').src = option;
    document.getElementById('beat').src = optionB;
}


