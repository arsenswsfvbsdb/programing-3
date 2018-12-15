class Mard extends LivingCreature{


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
        var patahakanVandak = random(this.yntrelVandak(0));
        if (patahakanVandak) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 5;
        }
    }


    bazmanal() {

        var norVandak = random(this.yntrelVandak(0));
        if (this.energy == 6 && norVandak) {
            var norMard = new Mard(norVandak[0], norVandak[1]);
            mardArr.push(norMard);
            matrix[norVandak[1]][norVandak[0]] = 5;
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
            matrix[this.y][this.x] = 5;
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



















}