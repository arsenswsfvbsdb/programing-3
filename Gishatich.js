var LivingCreature = require("./livingCreature.js");
var Xotaker = require("./grass_eater.js");
module.exports = class Gishatich extends Xotaker {
    constructor(x, y) {
        super(x,y);
        super.index = 3;
        this.energy = 5;
        
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    
    yntrelVandak(character) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(character);
    }

    


    sharjvel() {
        this.energy--;
        var patahakanVandak = random(this.yntrelVandak(0));
        if (patahakanVandak) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 3;
        }
    }


    bazmanal() {

        var norVandak = random(this.yntrelVandak(2));
        if (this.energy == 7 && norVandak) {
            var norGishatich = new Gishatich(norVandak[0], norVandak[1]);
            gishatichArr.push(norGishatich);
            matrix[norVandak[1]][norVandak[0]] = 3;
            this.energy = 5;
        }
    }


    utel() {
        var patahakanVandak = random(this.yntrelVandak(2));
        var patahakanVandakDatark = random(this.yntrelVandak(0));
        if (patahakanVandak) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 3;
            // console.log(grassArr);
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    this.energy++;
                    break;
                }
            }
        }
        else if (patahakanVandakDatark) {
            this.sharjvel();
        }
    }


    mahanal() {
        var patahakanVandak = random(this.yntrelVandak(0));
        if (patahakanVandak && this.energy <= 0) {
            matrix[this.y][this.x] = 0;

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    return true;
                }
            }
        }
        else return false;
    }
}