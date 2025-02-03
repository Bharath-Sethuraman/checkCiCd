
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
        const joke = await 1//getJoke();
        if (typeof (joke) == "string") {
            response = {
                status: "Success",
                msg: "Got Data",
                data: [joke]
            }
        }
        return response
    } catch (error) {
        console.error(error);
        return response;
    }
}
export default checkFunction;