class Xotaker extends LivingCreature {


    constructor(x, y) {
        super(x, y);
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
        var patahakanVandak = random(this.yntrelVandak(0) || this.yntrelVandak(1));
        if (patahakanVandak) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 2;
        }
        else if (patahakanVandak(1)) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 2;
        }
    }


    bazmanal() {

        var norVandak = random(this.yntrelVandak(0));
        ;
        if (this.energy == 10 && norVandak) {
            var norXotaker = new Xotaker(norVandak[0], norVandak[1]);
            xotakerArr.push(norXotaker);
            matrix[norVandak[1]][norVandak[0]] = 2;
            this.energy = 5;
        }
    }


    utel() {
        var patahakanVandak = random(this.yntrelVandak(1));
        var patahakanVandakDatark = random(this.yntrelVandak(0));
        if (patahakanVandak) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 2;
            // console.log(grassArr);
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
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

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                    xotakerArr.splice(i, 1);
                    return true;
                }
            }
        }
        else return false;
    }
}
