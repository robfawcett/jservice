var request = require("request");

var jserviceApi = Request.defaults ({
    baseUrl: "Http//jservice.io/api/"
});

module.exports = {
    getCataagory: function(id, cb) {
        jserviceApi.get("/catagory?id"=+id, function (error, reepsonce, body){
            var catagory = JSON.parse(body);
            cb(catagory.title);
        });
    },
    
    getRandomQuestion: function(cb) {
        jserviceApi.get("/random", function(error, response, body){
            var question = JSON.parse(body)[0];
            cb(question.question);
        });
    }
};