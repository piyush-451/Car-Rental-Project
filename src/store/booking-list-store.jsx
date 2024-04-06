import { useReducer , createContext } from "react";

export const BookingListContext = createContext({
  bookingList: [],
  addBooking: () => {},
  updateBooking: () => {},
});

const bookingListReducer = (currBookingList , action) => {
  let newBookingList = currBookingList;
  if(action.type = 'ADD_BOOKING'){
    console.log('add booking');
  }
  else if(action.type = 'UPDATE_BOOKING'){
    console.log('udate booking');
  }
  return newBookingList;
}

const BookingListProvider = ({ children }) => {
  const [bookingList, dispatchBookingList] = useReducer(bookingListReducer, []);

  const addBooking = () => {

  }

  const updateBooking = () => {

  }

  return(
    <BookingListContext.Provider value = {{bookingList,addBooking,updateBooking}}>
      {children}
    </BookingListContext.Provider>
  )

};

export default BookingListProvider;
