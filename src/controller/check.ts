
const giveMeAJoke = require('give-me-a-joke');

function getJoke() {
    return new Promise((resolve) => {
        giveMeAJoke.getRandomDadJoke((joke: any) => {
            resolve(joke);
        });
    });
}

const checkFunction = async () => {
    let response: any = {
        status: "Failed",
        msg: ""
    }
    try {
        console.log("check Function");
        const joke = 1//await getJoke();
        console.log(joke);
        console.log("new Data");
        console.log("Re-Check");
        console.log("Once more");
        
        
        
        if (typeof (joke) == "string") {
            response = {
                status: "Success",
                msg: "Got Data",
                data: [joke]
            }
        }

        console.log(response);
        return response
    } catch (error) {
        console.error(error);
        return response;
    }
}
export default checkFunction;