import { axiosInstanceExtern } from "../../../api/AxiosConfig";
import { Hotels } from '../../../interfaces/data-hotels';
import { Reservations } from "../../../interfaces/data-reservations";
import { Rooms } from "../../../interfaces/data-rooms";

class ReservationServiceClass {

    /**
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    dataHotels: { hotels: Hotels[] };
    dataRooms: { rooms: Rooms[] };
    dataReservations: { reservations: Reservations[] };

    constructor(){
      this.dataHotels = {
        "hotels": [
          {
            "id": 1,
            "name": "Hotel Resort las palmas",
            "email": "servicio@laspalmas.com",
            "street": "calle 10 # 23-45",
            "phone": "3142836430",
            "country": "Colombia",
            "city": "Medellin",
            "status": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "id": 2,
            "name": "Hotel la campiña",
            "email": "reservas@lacampina.com",
            "street": "calle 100 # 50-5",
            "phone": "3102456687",
            "country": "Colombia",
            "city": "Cartagena",
            "status": false,
            "createdAt": new Date(),
            "updatedAt": new Date()
          },
          {
            "id": 3,
            "name": "Hotel Four Points",
            "email": "servicio@fourpoints.com",
            "street": "carrera 53 No 79-212",
            "phone": "3143556789",
            "country": "Colombia",
            "city": "Barranquilla",
            "status": true,
            "createdAt": new Date(),
            "updatedAt": new Date()
          }
        ]
      };

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

      this.dataReservations = {
        "reservations" : [
          {
            "id": 1,
            "name": "Mauricio Moreno",
            "birthday": new Date("25/12/1990"),
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
            "birthday": new Date("25/12/1990"),
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
     * @returns hotels
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    getHotels = () => {
        const data = this.dataHotels;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data });
            }, 200); // Simular una demora de 1 segundo, como si fuera una solicitud a la API real
        });
    }

    /**
     * @returns rooms
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    getRooms = () => {
        const data = this.dataRooms;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data });
            }, 200); // Simular una demora de 1 segundo, como si fuera una solicitud a la API real
        });
    }

    /**
     * @returns reservations
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

}

const ReservationService = new ReservationServiceClass();

export default ReservationService;