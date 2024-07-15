document.addEventListener("component-update",handleComponentUpdate);
let timeout = null;
function handleComponentUpdate(){
    clearTimeout(timeout)
    timeout = setTimeout(()=>{
        console.log('re-rendering')
        userInterface.clearRoot();
        userInterface.renderHtmlToRoot(app.render());
    },0)
}