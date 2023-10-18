export interface DataReservations {
    reservations: Reservations;
}
  
export interface Reservations {
    id: number
    name: string,
    birthday: Date,
    gender: string,
    typeDocument: string,
    document: string,
    email: string,
    phone: number,
    nameContact: string,
    phoneContact: number,
    hotel: Hotel,
    room: Room,
    createdAt: Date,
    updatedAt: Date,
}

export interface Hotel {
    id: number,
    name: string,
    city: string,
}

export interface Room {
    id: number,
    price: string,
    type: string,
    guests: number,
}

export interface ResultData {
    status: number,
    message: string,
    length: number,
    data: {
        reservations: Reservations[];
    }
}