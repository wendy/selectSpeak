(function(){
  var node = document.createElement('script');
  node.src = 'http://responsivevoice.org/responsivevoice/responsivevoice.js';
  document.body.appendChild(node);
  document.body.onmouseup = function(){
    getSelText();
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
    // document.body.innerHTML= txt;
    responsiveVoice.speak(txt,'US English Female');
  }

}());