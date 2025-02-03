"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const giveMeAJoke = require('give-me-a-joke');
function getJoke() {
    return new Promise((resolve) => {
        giveMeAJoke.getRandomDadJoke((joke) => {
            resolve(joke);
        });
    });
}
const checkFunction = () => __awaiter(void 0, void 0, void 0, function* () {
    let response = {
        status: "Failed",
        msg: ""
    };
    try {
        console.log("check Function");
        const joke = 1; //await getJoke();
        console.log(joke);
        if (typeof (joke) == "string") {
            response = {
                status: "Success",
                msg: "Got Data",
                data: [joke]
            };
        }
        console.log(response);
        return response;
    }
    catch (error) {
        console.error(error);
        return response;
    }
});
exports.default = checkFunction;
