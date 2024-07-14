function useEffect(callback,deppendencies){
    if (deppendencies.length == 0) return callback();
    deppendencies.forEach(deppendency => {
        if (deppendency.subscribe){
            deppendency.subscribe(callback);
        }
    });
}