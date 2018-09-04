var friendsArray = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function(req, res) {
        res.json(friendsArray);
        console.log(friendsArray);
    });

    app.post("/api/friends", function(req, res) {
        var newFriend = {
            name: re.body.name,
            photo: req.body.photo,
            scores: JSON.parse(re.body.scores)
        }

        var friendScore = [];

        friendsArray.forEach(function(item, index) {
            var difference = 0;
            for (var i = 0; i < item.scores.length; i++) {
                difference += Math.abs(item.scores[i] - newFriend.scores[i]);
            }
            friendScore.push({ "difference": difference, "index": index });
        });

        friendScore.sort(function(a, b) {
            return a.difference - b.difference;
        });

        friendsArray.push(newFriend);
        res.json(friends[friendScore[0].index]);

    });
}
