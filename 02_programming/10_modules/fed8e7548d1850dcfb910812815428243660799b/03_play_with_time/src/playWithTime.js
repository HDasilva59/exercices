import moment from "moment";
moment().format();

export function formatDate(date){
  return moment(date).format("dddd Do MMMM YYYY");
}


export function yearsSinceDate(date){;
  return moment([2022, 1]).diff(date, "years");
}

export function daysSinceDate(date){;
  return moment([2022, 0, 25]).diff(date, "days");
}

export function getDayFromDate(date){
  return moment(date).format("dddd");
};
