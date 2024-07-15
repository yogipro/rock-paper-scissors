function useEffect(callback,deppendencies){
    if (deppendencies.length == 0) return setTimeout(()=>{
        callback()
    },0);
    deppendencies.forEach(deppendency => {
        if (deppendency.subscribe){
            deppendency.subscribe(callback);
        }
    });
}