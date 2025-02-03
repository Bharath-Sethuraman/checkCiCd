
const giveMeAJoke = require('give-me-a-joke');

function getJoke() {
    return new Promise((resolve) => {
        giveMeAJoke.getRandomDadJoke((joke:any) => {
            resolve(joke);
        });
    });
}

const checkFunction = async() => {
    let response:any = {
        status:"Failed",
        msg:""
    }
    try {
        console.log("check Function");
        const joke = await getJoke();
        console.log(joke); 
        return response = {
            status:"Success",
            msg:"Got Data"
        }
    } catch (error) {
        console.error(error);
        return response;
    }
}
export default checkFunction;