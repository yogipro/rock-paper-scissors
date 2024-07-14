const ROOT = document.getElementById("root");
class UserInterface{
    static instance = null;
    privatconstructor(){
        if (UserInterface.instance){
            return UserInterface.instance;
        }
    }
    clearRoot() {
        ROOT.innerHTML = "";
      }
    
      renderHtmlToRoot(htmlStr) {
        ROOT.innerHTML = htmlStr;
      }
}