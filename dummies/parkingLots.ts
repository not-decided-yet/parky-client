import { ParkingLotData } from "../utils/types";

const dummyParkingLots: ParkingLotData[] = [
  {
    _id: "1",
    name: "Union Square Parking",
    longitude: -122.407691,
    latitude: 37.787746,
    is_free: false,
    lots: "",
    priority: "",
    created_at: new Date(),
    leftSeat: 7,
    distance: "0.7km",
    capacity: 48,
  },
  {
    _id: "2",
    name: "Impark Parking",
    longitude: -122.404912,
    latitude: 37.783651,
    is_free: true,
    lots: "",
    priority: "",
    created_at: new Date(),
    leftSeat: 2,
    distance: "1.4km",
    capacity: 32,
  },
  {
    _id: "3",
    name: "Hearst Parking Center",
    longitude: -122.402391,
    latitude: 37.787178,
    is_free: true,
    lots: "",
    priority: "",
    created_at: new Date(),
    leftSeat: 0,
    distance: "1.8km",
    capacity: 90,
  },
];

export default dummyParkingLots;
