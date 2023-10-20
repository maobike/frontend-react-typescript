import { Reservations } from '../../../interfaces/data-reservations';
import { Rooms } from '../../../interfaces/data-rooms';
import emailjs from '@emailjs/browser';

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
            "reserved": 0,
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
            "status": 1,
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
            "reserved": 0,
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
            "status": 1,
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
            "reserved": 0,
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
            "status": 1,
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
              "taxes": "38.000",
              "location": "Habitación 103",
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
              "taxes": "57.000",
              "location": "Habitación 202",
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

      // Enviamos el mensaje
      // TODO usar dotenv para las secrets de email      
      const serviceIid = "service_o55ix4u";
      const templateId = "template_9qyl6k9";
      const publicKey  = "cgU_s8AAxnCZdmUuM"
      const privateKey = "_lSTkxAJ5UKq0JGDZbK2h"
      var templateParams = {
        to_email: 'maomaoq@gmail.com',
        to_name: `${data.name}`,
        from_name: `${data.name}`,
        message: `Estos son los datos de la reserva!
          Hotel: ${data.hotel.name}
          Tipo de habitación: ${data.room.type}
          Huéspedes: ${data.room.guests}
          Precio: ${data.room.price}
          Impuestos: ${data.room.taxes}
          `
      };

      emailjs.send(serviceIid, templateId, templateParams, publicKey)
        .then(function(response) {
           console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
           console.log('FAILED...', error);
        });


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