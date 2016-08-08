var Todo = require('./models/todo');
var fs = require('fs');


/*function getSongs(res) {
    Song.find(function (err, songs) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(songs); // return all songs in JSON format
    });
}
;
*/
module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/songs', function (req, res) {
        // use mongoose to get all songs in the database
        getSongs(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/add', function(req, res){
    
    fs.readFile(req.files.audio.path, function (err, data) {
     // ...
     console.log(__dirname);
     var newPath = __dirname + "/uploads/";
     fs.writeFile(newPath, data, function (err) {
     res.redirect("back");
     console.log(res);
  });
})

  });


    // delete a todo
    app.delete('/api/songs/:song_id', function (req, res) {
        Song.remove({
            _id: req.params.
        }, function (err, data) {
            if (err)
                res.send(err);

            getSongs(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
