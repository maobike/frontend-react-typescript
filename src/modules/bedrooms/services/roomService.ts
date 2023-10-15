import { Rooms } from '../../../interfaces/data-rooms';

class RoomServiceClass {

    /**
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    data: { rooms: Rooms[] };

    constructor(){
      this.data = {
        "rooms": [
          {
            "id": 1,
            "number": 202,
            "type": "Sencilla",
            "price": "200.000",
            "reserved": false,
            "status": true,
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 1,
              "name": "Hotel Resort las palmas"
            },
          },
          {
            "id": 2,
            "number": 203,
            "type": "Doble",
            "price": "300.000",
            "reserved": true,
            "status": true,
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 2,
              "name": "Hotel la campiña"
            },
          },
          {
            "id": 3,
            "number": 304,
            "type": "Suite",
            "price": "5.000.000",
            "reserved": false,
            "status": false,
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 3,
              "name": "Hotel Four Points"
            },            
          },
          {
            "id": 4,
            "number": 401,
            "type": "Suite",
            "price": "5.000.000",
            "reserved": false,
            "status": true,
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 3,
              "name": "Hotel Four Points"
            },            
          },
          {
            "id": 5,
            "number": 202,
            "type": "Ejecutiva",
            "price": "500.000",
            "reserved": false,
            "status": true,
            "createdAt": new Date(),
            "updatedAt": new Date(),
            "hotel": {
              "id": 1,
              "name": "Hotel Resort las palmas"
            },
          }
        ]
      };
    }

    /**
     * @returns rooms
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    getRooms = () => {
        //return axiosInstance.get('/api/rooms')

        const data = this.data;
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
        data.id = this.data.rooms.length + 1;
        this.data.rooms.push(data);

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

        const index = this.data.rooms.findIndex(elemento => elemento.id === id);
        this.data.rooms[index].number = newData.number;
        this.data.rooms[index].type = newData.type;
        this.data.rooms[index].price = newData.price;
        this.data.rooms[index].reserved = newData.reserved;
        this.data.rooms[index].status = newData.status;

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