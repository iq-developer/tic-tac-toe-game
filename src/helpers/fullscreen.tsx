const Element_Copy=Element;                         // Magic
function fullscreen(): void {
    const document:any = window.document;           // Magic
    const Element:any = Element_Copy;               // Magic
    const fs = Element[0];
    if (!document.fullscreenElement &&    // alternative standard method
        !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {  // current working methods
        if (fs.requestFullscreen) {
            fs.requestFullscreen();
        } else if (fs.msRequestFullscreen) {
            fs.msRequestFullscreen();
        } else if (fs.mozRequestFullScreen) {
            fs.mozRequestFullScreen();
        } else if (fs.webkitRequestFullscreen) {
            fs.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    }
}
export default fullscreen;
