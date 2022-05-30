const env = process.env.REACT_APP_ENV;

console.log(process.env);
console.log(env);

let config = {
    baseURL: "https://localhost/"
}

switch(env.toUpperCase()) {
    case "STAGE":
        config.baseURL = "https://stage.skillsunion.com"
        break;
    case "PRODUCTION": {
        config.baseURL = "https://skillsunion.com"
        break;
    }
}

export default config;