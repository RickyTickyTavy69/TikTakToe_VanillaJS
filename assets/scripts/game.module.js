class Game{

    constructor(options) {
        this.winner = 0;
        this.rulesObject = {
            "echse": {
                won : ["spock", "paper"],
                loose: ["sezers", "stone"]
            },
            "sezers": {
                won : ["echse", "paper"],
                loose: ["spock", "stone"]
            },
            "spock": {
                won : ["sezers", "stone"],
                loose: ["echse", "paper"]
            },
            "stone": {
                won : ["sezers", "echse"],
                loose: ["paper", "spock"]
            },
            "paper": {
                won : ["stone", "spock"],
                loose: ["sezers", "echse"]
            }
        }
    }

    static getKIChoosen = () => {
        let num = Math.round(Math.random() * (6 - 1) + 1);
        let KIChoosen;
        switch(num){
            case 1:
                KIChoosen = "echse";
                break;
            case 2:
                KIChoosen = "sezers";
                break;
            case 3:
                KIChoosen = "spock";
                break;
            case 4:
                KIChoosen = "stone";
                break;
            case 5:
                KIChoosen = "paper";
                break;
        }
        return KIChoosen;
    }

    getWinner = (KIChoosen, YouChoosen) => {

        if(this.rulesObject[KIChoosen].won.indexOf(YouChoosen) !== -1){
            this.winner = 2;
        } else if(this.rulesObject[KIChoosen].won.indexOf(YouChoosen) === -1){
            if(KIChoosen === YouChoosen){
                this.winner = 0;
            } else {
                this.winner = 1;
            }
        }

        return this.winner;

    }

}


export default Game;