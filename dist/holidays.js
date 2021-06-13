const holidays = {
  New_Year: {
    date: moment("01-01-2021", "DD-MM-YYYY"),
    greeting: "it's new year,Hurray, Happy New Year!!!",
  },
  Valentine: {
    date: moment("14-02", "DD-MM"),
    greeting: "Happy Valentine's Day",
  },
  Easter: {
    date: moment("13-04", "DD-MM"),
    greeting: "Happy easter!!!",
  },
  Eid_Al_Fitr: {
    date: moment("23-05", "DD-MM"),
    greeting: "Eid Mubarak",
  },
  Children_Day: {
    date: moment("27-05", "DD-MM"),
    greeting: "Happy Children's Day Kids",
  },
  Democracy_Day: {
    date: moment("12-06", "DD-MM"),
    greeting: "Happy Democracy Day Nigerians",
  },
  Eid_Al_Adha: {
    date: moment("01-08", "DD-MM"),
    greeting: "Eid Mubarak",
  },
  Independence_Day: {
    date: moment("01-10", "DD-MM"),
    greeting: "Happy Independence Nigerians",
  },
  Christmas_Day: {
    date: moment("25-12", "DD-MM"),
    greeting: "Merry Christmas",
  },
  Boxing_Day: {
    date: moment("26-12", "DD-MM"),
    greeting: "Happy Boxing Day",
  },
};

export default holidays;
