class Kajcak extends LivingCreature {

    constructor(x, y) {
       super(x,y);
        this.energy = 5;
    }


    stanalNorKordinatner() {
        this.directions = [
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 3],
            [this.x + 4, this.y + 4],
            [this.x + 5, this.y + 5],
            [this.x + 6, this.y + 6],
            [this.x + 7, this.y + 7],
            [this.x + 8, this.y + 8],
            [this.x + 9, this.y + 9],
            [this.x + 10, this.y + 10],
            [this.x + 11, this.y + 11],
            [this.x + 12, this.y + 12],
            [this.x + 13, this.y + 13],
            [this.x + 14, this.y + 14],
            [this.x + 15, this.y + 15],
            [this.x + 16, this.y + 16],
            [this.x + 17, this.y + 17],
            [this.x + 18, this.y + 18],
            [this.x + 19, this.y + 19],
            [this.x + 20, this.y + 20],
            [this.x + 21, this.y + 21],
            [this.x + 22, this.y + 22],
            [this.x + 23, this.y + 24],
            [this.x + 25, this.y + 25],


            [this.x - 1, this.y - 1],
            [this.x, - 2, this.y - 2],
            [this.x - 3, this.y - 3],
            [this.x - 4, this.y - 4],
            [this.x - 5, this.y - 5],
            [this.x - 6, this.y - 6],
            [this.x - 7, this.y - 7],
            [this.x - 8, this.y - 8],
            [this.x - 9, this.y - 9],
            [this.x - 10, this.y - 10],
            [this.x - 11, this.y - 11],
            [this.x - 12, this.y - 12],
            [this.x - 13, this.y - 13],
            [this.x - 14, this.y - 14],
            [this.x - 15, this.y - 15],
            [this.x - 16, this.y - 16],
            [this.x - 17, this.y - 17],
            [this.x - 18, this.y - 18],
            [this.x - 19, this.y - 19],
            [this.x - 20, this.y - 20],
            [this.x - 21, this.y - 21],
            [this.x - 22, this.y - 22],
            [this.x - 23, this.y - 24],
            [this.x - 25, this.y - 25]






        ];

    }
   

    xpel() {



        var patahakanVandak = random(this.yntrelVandak(3));
        var patahakanVandakDatark = random(this.yntrelVandak(0));
        if (patahakanVandak) {
            matrix[this.y][this.x] = 0;
            this.x = patahakanVandak[0];
            this.y = patahakanVandak[1];
            matrix[this.y][this.x] = 4;
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == this.x && gishatichArr[i].y == this.y) {
                    gishatichArr.splice(i, 1);
                    this.energy++;
                    break;
                }
            }
        }
    }




}
