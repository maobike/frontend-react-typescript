import { axiosInstanceExtern } from "../../../api/AxiosConfig";
import { Hotels } from '../../../interfaces/data-hotels';

class HotelServiceClass {

    /**
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    data: { hotels: Hotels[] };

    constructor(){
      this.data = {
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
    }

    /**
     * @returns hotels
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    getHotels = () => {
        //return axiosInstance.get('/api/hotels')

        const data = this.data;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ data });
            }, 200); // Simular una demora de 1 segundo, como si fuera una solicitud a la API real
        });
    }

    /**
     * @returns country of Americas
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    getCountries = () => {
        return axiosInstanceExtern.get('/v3.1/region/americas?fields=name')
    }

    /**
     * @returns hotel
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    addHotel = (data: Hotels) => {
        //return axiosInstance.post('/api/hotels', data)
        data.id = this.data.hotels.length + 1;
        this.data.hotels.push(data);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    data: data,
                    status: 200,
                    message: 'Hotel creado',
                });
            }, 200); // Simular una demora de 200 mili segundos, como si fuera una solicitud a la API real
        });
    }

    /**
     * @returns hotel
     * @author Mauricio Moreno @maomaoq@hotmail.com
     */

    editHotel = (id: number, newData: Hotels) => {
        //return axiosInstance.put(`/api/hotels/${id}`, data);

        const index = this.data.hotels.findIndex(elemento => elemento.id === id);
        this.data.hotels[index].name = newData.name;
        this.data.hotels[index].email = newData.email;
        this.data.hotels[index].phone = newData.phone;
        this.data.hotels[index].street = newData.street;
        this.data.hotels[index].phone = newData.phone;
        this.data.hotels[index].country = newData.country;
        this.data.hotels[index].city = newData.city;
        this.data.hotels[index].status = newData.status;

        return new Promise((resolve) => {
          setTimeout(() => {
              resolve({
                  data: newData,
                  status: 200,
                  message: 'Hotel modificado',
              });
          }, 200); // Simular una demora de 200 mili segundos, como si fuera una solicitud a la API real
      });

    }


}

const HotelService = new HotelServiceClass();

export default HotelService;