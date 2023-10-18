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
            "reserved": false,
            "status": true,
            "guests": 1,
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
            "reserved": true,
            "status": true,
            "guests": 2,
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
            "reserved": false,
            "status": false,
            "guests": 3,
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
            "reserved": false,
            "status": true,
            "guests": 4,
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
            "reserved": false,
            "status": true,
            "guests": 1,
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
            "reserved": true,
            "status": true,
            "guests": 2,
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
            "reserved": false,
            "status": false,
            "guests": 3,
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
            "reserved": false,
            "status": true,
            "guests": 4,
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
            "reserved": false,
            "status": true,
            "guests": 1,
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
            "reserved": true,
            "status": true,
            "guests": 2,
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
            "reserved": false,
            "status": false,
            "guests": 3,
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
            "reserved": false,
            "status": true,
            "guests": 4,
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
        this.dataRooms.rooms[index].reserved = newData.reserved;
        this.dataRooms.rooms[index].status = newData.status;
        this.dataRooms.rooms[index].guests = newData.guests;

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