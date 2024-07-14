const Store = function(){
    this.observables = []
    this.subscribe = function(observable){
        this.observables.push(observable);
        useEffect(()=>{
            // fire app rerender
            document.dispatchEvent(new CustomEvent("component-update"));
        },this.observables)
    }
    this.subscribe = this.subscribe.bind(this);
}
const store = new Store();
