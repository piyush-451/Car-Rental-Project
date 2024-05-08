import { useReducer, createContext } from "react";

export const BookingListContext = createContext({
  bookingList: [],
  addBooking: () => {},
  updateBooking: () => {},
  deleteBooking: () => {},
});

const bookingListReducer = (currBookingList, action) => {
  let newBookingList = currBookingList;
  if ((action.type === "ADD_BOOKING")) {
    newBookingList = [action.payload , ...currBookingList]
    console.log(newBookingList)
  } else if ((action.type === "UPDATE_BOOKING")) {
    console.log("udate booking");
  }
  else if(action.type === "DELETE_BOOKING"){
    newBookingList = currBookingList.filter((item) => item.id!==action.payload.id);
  }
  return newBookingList;
};

const BookingListProvider = ({ children }) => {
  const [bookingList, dispatchBookingList] = useReducer(bookingListReducer, [{id : 1,
    userId : 1,
    carName : 'Tesla',
    pickUpLocation : 'Bhopal',
    dropOffLocation : 'Khajuraho',
    pickUpDateTime : '2024-03-15 00:00',
    // pickUpTime,
    dropOffDateTime : '2024-03-15 23:59',
},{id : 2,
  userId : 1,
  carName : 'bmw',
  pickUpLocation : 'Bhopal',
  dropOffLocation : 'Khajuraho',
  pickUpDateTime : '2024-03-15 00:00',
  // pickUpTime,
  dropOffDateTime : '2024-03-15 23:59',
}]);

  const addBooking = (
    userId,
    carName,
    pickUpLocation,
    dropOffLocation,
    pickUpDateTime,
    dropOffDateTime
  ) => {
    
    // pickUpDateTime = pickUpDateTime.replace("T" , " ");
    // dropOffDateTime = dropOffDateTime.replace("T" , " ");

    dispatchBookingList({
      type : 'ADD_BOOKING',
      payload :{
        id : Date.now(),
        userId,
        carName,
        pickUpLocation,
        dropOffLocation,
        pickUpDateTime,
        dropOffDateTime,
      }
    })
  };

  const updateBooking = () => {};

  const deleteBooking = (id) => {
    console.log(id)
    dispatchBookingList({
      type : "DELETE_BOOKING",
      payload : {
        id
      }
    })
  };

  return (
    <BookingListContext.Provider
      value={{ bookingList, addBooking, updateBooking ,deleteBooking}}
    >
      {children}
    </BookingListContext.Provider>
  );
};

export default BookingListProvider;
