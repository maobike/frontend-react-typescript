import { Route, Routes } from "react-router-dom"
import { OtherComponent } from "../modules/hotels/components/OtherComponent"
import { ListHotels } from "../modules/hotels/components/ListHotels"
import { ListRooms } from "../modules/bedrooms/components/ListRooms"
import { ListReservations } from "../modules/reservations/components/ListReservations"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<ListHotels />} />
            <Route path="/rooms" element={<ListRooms />} />
            <Route path="/reservations" element={<ListReservations />} />
            <Route path="/other" element={<OtherComponent />} />
        </Routes>
    </>
  )
}
