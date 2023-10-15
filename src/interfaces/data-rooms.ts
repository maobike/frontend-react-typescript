export interface DataRooms {
    rooms: Rooms;
}
  
export interface Rooms {
    id: number
    number: number,
    type: string,
    price: string,
    reserved: boolean,
    status: boolean,
    createdAt: Date,
    updatedAt: Date,
    hotel: Hotel,
}

export interface Hotel {
    id: number,
    name: string;
}
export interface ResultData {
    status: number,
    message: string,
    data: {
        rooms: Rooms[];
    }
}