import { Reservations } from '../../../interfaces/data-reservations';
import { Rooms } from '../../../interfaces/data-rooms';

class SearchServiceClass {

    /**
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    dataRooms: { rooms: Rooms[] };
    dataReservations: { reservations: Reservations[] };

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
            "reserved": false,
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
            "status": true,
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
            "reserved": false,
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
            "status": true,
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
            "reserved": false,
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
            "status": true,
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

      this.dataReservations = {
        "reservations" : [
          {
            "id": 1,
            "name": "Mauricio Moreno",
            "birthday": new Date("1990-12-25"),
            "gender": "Male",
            "typeDocument": "CC",
            "document": "80169686",
            "email": "mauricio.moreno@gmail.com",
            "phone": 3102516675,
            "nameContact": "Paola Rodriguez",
            "phoneContact": 3102345678,
            "hotel": {
              "id": 3,
              "name": "Hotel Four Points",
              "city": "Barranquilla"
            },
            "room": {
              "id": 9,
              "price": "200.000",
              "type": "Sencilla",
              "guests": 1,
            },
            "createdAt": new Date(),
            "updatedAt": new Date(),
          },
          {
            "id": 2,
            "name": "Mauricio Moreno",
            "birthday": new Date("1990-12-25"),
            "gender": "Male",
            "typeDocument": "CC",
            "document": "80169686",
            "email": "mauricio.moreno@gmail.com",
            "phone": 3102516675,
            "nameContact": "Paola Rodriguez",
            "phoneContact": 3102345678,
            "hotel": {
              "id": 2,
              "name": "Hotel la campiña",
              "city": "Cartagena"
            },
            "room": {
              "id": 6,
              "price": "300.000",
              "type": "Doble",
              "guests": 2,
            },
            "createdAt": new Date(),
            "updatedAt": new Date(),
          },
        ]
      }
    }

    /**
     * @returns rooms
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    searchRooms = (dataFilter: any) => {
        const data = this.dataRooms.rooms.filter(room => {
        
          return (
            (!dataFilter.guests || room.guests === parseInt(dataFilter.guests)) &&
            (!dataFilter.city || room.hotel.city.toUpperCase() === dataFilter.city.toUpperCase())
          );
        });
               
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve( data );
            }, 200); // Simular una demora de 1 segundo, como si fuera una solicitud a la API real
        });
    }

        /**
     * @returns rooms
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

      getReservations = () => {
        const data = this.dataReservations;
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

    createReservation = (data: Reservations) => {
      data.id = this.dataReservations.reservations.length + 1;
      this.dataReservations.reservations.push(data);

      // Se debe crear la reserva y enviar el correo
      return new Promise((resolve) => {
          setTimeout(() => {
              resolve({
                data: data,
                status: 200,
                message: 'Reservación creada, se le ha enviado un mensaje con los datos de la reserva a su correo electrónico',
              });
          }, 200); // Simular una demora de 1 segundo, como si fuera una solicitud a la API real
      });
    }
    

}

const SearchService = new SearchServiceClass();

export default SearchService;