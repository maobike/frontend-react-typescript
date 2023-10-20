export interface DataHotels {
    hotels: Hotels;
}
  
export interface Hotels {
    id: number
    name: string,
    email: string,
    street: string,
    phone: string,
    country: string,
    city: string,
    status: number,
    createdAt: Date,
    updatedAt: Date,
}

export interface ResultData {
    status: number,
    message: string,
    data: {
        hotels: Hotels[];
    }
}