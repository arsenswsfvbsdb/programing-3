// matrix = [
//     [4, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0, 4, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 3, 0, 1, 0, 1, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [1, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 0, 1, 0, 0, 0, 3, 0, 0, 0, 3, 1, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 2, 0, 3, 0, 0, 0, 0, 5, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 2, 2, 0, 2, 0, 3, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 2, 2, 2, 2, 2, 3, 3, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 2, 1, 2, 2, 2, 2, 3, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
//     [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
// ];
    var express = require('express');createrArr 
    var app = express();
    var server = require('http').Server(app);
    var io = require('socket.io')(server);

    app.use(express.static("."));
    app.get('/', function (req, res) {
        res.redirect('index.html');
    });
    server.listen(3000);
    var season = 1;

matrix = [];
side = 25;

function generateMatrix() {
    matrix = [];
    for (var y = 0; y < side; y++) {
        matrix[y] = []
        for (var x = 0; x < side; x++) {
            matrix[y][x] = 0;
        }
    }
    for (var i = 0; i < 100; i++) {
        if (i < 70) {
            matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 1;
        }
        else if (i < 80) {
            matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 2;
        }
        else if (i < 85) {
            matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 3;
        }
        else if (i < 97) {
            matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 5;
        }
        else if (i > 97) {
            matrix[Math.floor(Math.random() * matrix.length)][Math.floor(Math.random() * matrix[0].length)] = 4;
        }
    }

    side = 10;
    grassArr = [];
    xotakerArr = [];
    kajcakArr = [];
    mardArr = [];
    gishatichArr = [];
    createrArr =[];
    for (var y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                xotakerArr.push(new Xotaker(x, y))
            }
            else if (matrix[y][x] == 3) {
                gishatichArr.push(new Gishatich(x, y))
            }
            else if (matrix[y][x] == 4) {
                createrArr.push(new Creater(x, y));
            }
            else if (matrix[y][x] == 5) {
                mardArr.push(new Mard(x, y));
            }
        }
    }
}
    died = [0,0,0,0,0,0];
    created = [0,0,0,0,0,0];
    multiplyed = [0,0,0,0,0,0];
    eated = [0,0,0,0,0,0];
    
    Grass = require("./grass.js");
    Xotaker = require("./grass_eater.js");
    Gishatich = require("./gishatich.js");
    Creater = require("./creater.js");
    Mard = require("./mard.js");
    
   
    generateMatrix();

    side = 10;
    grassArr = [];
    xotakerArr = [];
    kajcakArr = [];
    mardArr = [];
    gishatichArr = [];
    createrArr =[];



io.on('connection', function (socket) {
    function drawserver() {
        for (var i in grassArr) {
            grassArr[i].bazmanal();
        }
        for (var j in xotakerArr) {
            xotakerArr[j].utel();
            if (!xotakerArr[j].mahanal()) {
                xotakerArr[j].bazmanal();
            }
        }
        for (var j in gishatichArr) {

            gishatichArr[j].utel();
            gishatichArr[j].bazmanal();
            gishatichArr[j].mahanal()
        }
        for (var j in createrArr) {
            kajcakArr[j].xpel();
        }
        for (var j in mardArr) {
            mardArr[j].utel();
            mardArr[j].bazmanal();
        }
        io.sockets.emit("matrix", matrix);
        io.sockets.emit("statistica", [died, created, multiplyed, eated]);
    }
    function changeSeason(){
        if(season == 4){
            season = 1;
        }
        else{
            season++;
        }
        io.sockets.emit("season", season);
    }
    socket.on("changeSeason", changeSeason);
    setInterval(generateMatrix, 30000);
    setInterval(changeSeason, 6000);
    setInterval(drawServerayin, 600);
})



