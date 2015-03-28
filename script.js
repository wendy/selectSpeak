(function(){
  console.log('activate');
  var msg = new SpeechSynthesisUtterance();
  document.body.onmouseup = function(){
    getSelText();
    if(msg.text !== ""){
      window.speechSynthesis.speak(msg);   
    }
  }
  function getSelText(){
    var txt = '';
    if (window.getSelection) {
      txt = window.getSelection();
    } else if( document.getSelection ){
      txt = document.getSelection();
    } else if (document.selection) {
      txt = document.selection.createRange().tnext;
    } else {
      return;
    }
    msg.text = txt;
  }

}());   