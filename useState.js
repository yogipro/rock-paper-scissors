/*
    observer objects must have an update method if they dont error will be thrown

*/
function useState(initialValue){
    
    const State = {
        value:initialValue,
        callbacks : [],
        notifyObservers(){
            this.callbacks.forEach(callback=>callback.call(null,this.value));
        },
        subscribe(callback){
            if(!callback) return;
            this.callbacks.push(callback);
        },
        get(){
            return this.value;
        },
        setState(value){
            this.value = value;
            this.notifyObservers();
        }
    }
    State.notifyObservers = State.notifyObservers.bind(State);
    State.setState = State.setState.bind(State);
    State.get = State.get.bind(State);
    State.subscribe = State.subscribe.bind(State);
    store.subscribe(State);
    
    return [State,State.setState]
}