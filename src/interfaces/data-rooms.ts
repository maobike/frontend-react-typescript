export interface DataRooms {
    rooms: Rooms;
}
  
export interface Rooms {
    id: number
    number: number,
    type: string,
    price: string,
    taxes: string,
    reserved: number,
    status: number,
    guests: number,
    location: string,
    createdAt: Date,
    updatedAt: Date,
    hotel: Hotel,
}

export interface Hotel {
    id: number,
    name: string,
    city: string,
}
export interface ResultData {
    status: number,
    message: string,
    length: number,
    data: {
        rooms: Rooms[];
    }
}