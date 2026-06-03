const orientation = Object.freeze({
    NORTH: 'NORTH',
    EAST: 'EAST',
    SOUTH: 'SOUTH',
    WEST: 'WEST'
});

const belt_accepts = {
    [orientation.NORTH]: [orientation.EAST, orientation.SOUTH, orientation.WEST],
    [orientation.EAST]: [orientation.NORTH, orientation.SOUTH, orientation.WEST],[orientation.SOUTH]: [orientation.NORTH, orientation.EAST, orientation.WEST],[orientation.WEST]: [orientation.NORTH, orientation.EAST, orientation.SOUTH]
}

class board_tile{
    //empty for moment, intended to mark unused space
}

class transport_parent extends board_tile{
    //shouldn't need to know its own position but might be important?
    #direction = 'NORTH';
    constructor(orientation){
        super();
        this.#direction = orientation;
    }

}

class transport_belt extends transport_parent{
    //shouldn't need to know its own position but might be important?
    constructor(orientation){
        super(orientation);
        this.direction = orientation;
    }

    get direction() {
        return this.direction;
    }

    get accepts(){
        return belt_accepts[this.direction];
    }

}




class board_state {
    //10 by 10 'board' hardcode to start
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }


}
