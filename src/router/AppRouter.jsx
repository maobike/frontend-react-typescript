import { Route, Routes } from "react-router-dom"
import { OtherComponent } from "../modules/hotels/components/OtherComponent"
import { ListHotels } from "../modules/hotels/components/ListHotels"
import { ListRooms } from "../modules/bedrooms/components/ListRooms"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={<ListHotels />} />
            <Route path="/rooms" element={<ListRooms />} />
            <Route path="/other" element={<OtherComponent />} />
        </Routes>
    </>
  )
}
