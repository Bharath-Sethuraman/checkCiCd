const checkFunction = (a:number,b:number) => {
    try {
        console.log("check Function");   
        return a+b;     
    } catch (error) {
        console.error(error);
        return a;
    }
}

export default checkFunction;