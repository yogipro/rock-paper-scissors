document.addEventListener("component-update",handleComponentUpdate);
function handleComponentUpdate(){
    console.log('re-rendering')
    userInterface.clearRoot();
    userInterface.renderHtmlToRoot(app.render());
}