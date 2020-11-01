//responsible for just for operations onver name array
class Names {
    constructor() {
        this.nameArr = [];
    }

    insertName = (name) => {
        this.nameArr[Names.index] = name;
        Names.index++;
    }

    printName = () => {
        console.log(this.nameArr);
    }

    deleteName = (index) => {
        delete this.nameArr[index];
    }

}
Names.index = 0;


//persistant module.
//seperating out concerns.
class PersistantHelper {
    //code for persistance in DB
}


const newNamesObj = new Names();

newNamesObj.insertName("Aalekh");
newNamesObj.insertName("Minah");
newNamesObj.printName();
newNamesObj.deleteName(0) ;
newNamesObj.printName();