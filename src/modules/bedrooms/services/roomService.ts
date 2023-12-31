import { Rooms } from '../../../interfaces/data-rooms';

class RoomServiceClass {

    /**
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    dataRooms: { rooms: Rooms[] };

    constructor(){
      this.dataRooms = {
        "rooms": [
          {
            "id": 1,
            "number": 1,
            "type": "Sencilla",
            "price": "200.000",
            "taxes": "38.000",
            "reserved": 0,
            "status": 1,
            "guests": 1,
            "location": "Habitación 101",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 1,
              "name": "Hotel Resort las palmas",
              "city": "Medellin"
            },
          },
          {
            "id": 2,
            "number": 2,
            "type": "Doble",
            "price": "300.000",
            "taxes": "57.000",
            "reserved": 1,
            "status": 1,
            "guests": 2,
            "location": "Habitación 201",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 1,
              "name": "Hotel Resort las palmas",
              "city": "Medellin"
            },
          },
          {
            "id": 3,
            "number": 3,
            "type": "Ejecutiva",
            "price": "500.000",
            "taxes": "95.000",
            "reserved": 0,
            "status": 0,
            "guests": 3,
            "location": "Habitación 301",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 1,
              "name": "Hotel Resort las palmas",
              "city": "Medellin"
            },            
          },
          {
            "id": 4,
            "number": 4,
            "type": "Suite",
            "price": "5.000.000",
            "taxes": "950.000",
            "reserved": 0,
            "status": 1,
            "guests": 4,
            "location": "Habitación 401",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 1,
              "name": "Hotel Resort las palmas",
              "city": "Medellin"
            },            
          },
          {
            "id": 5,
            "number": 1,
            "type": "Sencilla",
            "price": "200.000",
            "taxes": "38.000",
            "reserved": 0,
            "status": 1,
            "guests": 1,
            "location": "Habitación 102",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 2,
              "name": "Hotel la campiña",
              "city": "Cartagena"
            },
          },
          {
            "id": 6,
            "number": 2,
            "type": "Doble",
            "price": "300.000",
            "taxes": "57.000",
            "reserved": 1,
            "status": 1,
            "guests": 2,
            "location": "Habitación 202",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 2,
              "name": "Hotel la campiña",
              "city": "Cartagena"
            },
          },
          {
            "id": 7,
            "number": 3,
            "type": "Ejecutiva",
            "price": "500.000",
            "taxes": "95.000",
            "reserved": 0,
            "status": 0,
            "guests": 3,
            "location": "Habitación 302",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 2,
              "name": "Hotel la campiña",
              "city": "Cartagena"
            },            
          },
          {
            "id": 8,
            "number": 4,
            "type": "Suite",
            "price": "5.000.000",
            "taxes": "950.000",
            "reserved": 0,
            "status": 1,
            "guests": 4,
            "location": "Habitación 402",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 2,
              "name": "Hotel la campiña",
              "city": "Cartagena"
            },            
          },
          {
            "id": 9,
            "number": 1,
            "type": "Sencilla",
            "price": "200.000",
            "taxes": "38.000",
            "reserved": 0,
            "status": 1,
            "guests": 1,
            "location": "Habitación 103",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 3,
              "name": "Hotel Four Points",
              "city": "Barranquilla"
            },
          },
          {
            "id": 10,
            "number": 2,
            "type": "Doble",
            "price": "300.000",
            "taxes": "57.000",
            "reserved": 1,
            "status": 1,
            "guests": 2,
            "location": "Habitación 203",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 3,
              "name": "Hotel Four Points",
              "city": "Barranquilla"
            },
          },
          {
            "id": 11,
            "number": 3,
            "type": "Ejecutiva",
            "price": "500.000",
            "taxes": "95.000",
            "reserved": 0,
            "status": 0,
            "guests": 3,
            "location": "Habitación 303",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 3,
              "name": "Hotel Four Points",
              "city": "Barranquilla"
            },            
          },
          {
            "id": 12,
            "number": 4,
            "type": "Suite",
            "price": "5.000.000",
            "taxes": "950.000",
            "reserved": 0,
            "status": 1,
            "guests": 4,
            "location": "Habitación 403",
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 3,
              "name": "Hotel Four Points",
              "city": "Barranquilla"
            },            
          },

        ]
      };
    }

    /**
     * @returns rooms
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    getRooms = () => {
        //return axiosInstance.get('/api/rooms')

        const data = this.dataRooms;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data });
            }, 200); // Simular una demora de 1 segundo, como si fuera una solicitud a la API real
        });
    }

    /**
     * @returns room
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    addRoom = (data: Rooms) => {
        //return axiosInstance.post('/api/rooms', data)
        data.id = this.dataRooms.rooms.length + 1;
        this.dataRooms.rooms.push(data);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: data,
                    status: 200,
                    message: 'Habitación creada',
                });
            }, 200); // Simular una demora de 200 mili segundos, como si fuera una solicitud a la API real
        });
    }

    /**
     * @returns room
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    editRoom = (id: number, newData: Rooms) => {
        //return axiosInstance.put(`/api/rooms/${id}`, data);

        const index = this.dataRooms.rooms.findIndex(elemento => elemento.id === id);
        this.dataRooms.rooms[index].number = newData.number;
        this.dataRooms.rooms[index].type = newData.type;
        this.dataRooms.rooms[index].price = newData.price;
        this.dataRooms.rooms[index].taxes = newData.taxes;
        this.dataRooms.rooms[index].reserved = newData.reserved;
        this.dataRooms.rooms[index].status = newData.status;
        this.dataRooms.rooms[index].guests = newData.guests;
        this.dataRooms.rooms[index].location = newData.location;

        return new Promise((resolve) => {
          setTimeout(() => {
              resolve({
                  data: newData,
                  status: 200,
                  message: 'Habitación modificada',
              });
          }, 200); // Simular una demora de 200 mili segundos, como si fuera una solicitud a la API real
      });

    }


}

const RoomService = new RoomServiceClass();

export default RoomService;