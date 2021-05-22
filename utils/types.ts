export type Coordinate = [number, number];    // [longitude, latitude] ([경도, 위도])

export interface UserData {

}

export interface ParkingLotData {
  _id: string,
  name: string,
  longitude: number,
  latitude: number,
  is_free: boolean,
  // TODO: Temporary this is string.
  lots: string,
  priority: string,
  created_at: Date,
}
