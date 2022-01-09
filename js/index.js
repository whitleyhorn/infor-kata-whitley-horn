myCustomBtn.addEventListener('click', function showDialog(e){
  myCustomMsgDialog.show();
}) 

document.addEventListener('keydown', function hideDialog(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        // Escape Key Pressed
        myCustomMsgDialog.hide();
    }
})

// Note: I grabbed the following delay functions from Stack Overflow.
// I could have completed the challenge without this code from the web,
// but it's just a lot cleaner than nesting setTimeout callbacks.

// Utility function for returning a promise that resolves after a delay
function delay(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t);
    });
}

Promise.delay = function (fn, t) {
    // fn is an optional argument
    if (!t) {
        t = fn;
        fn = function () {};
    }
    return delay(t).then(fn);
}

Promise.prototype.delay = function (fn, t) {
    // return chained promise
    return this.then(function () {
        return Promise.delay(fn, t);
    });

}
