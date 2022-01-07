myCustomBtn.addEventListener('clicked', function showDialog(e){
  myCustomMsgDialog.show();
}) 

document.addEventListener('keydown', function hideDialog(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        // Escape Key Pressed
        myCustomMsgDialog.hide();
    }
})
