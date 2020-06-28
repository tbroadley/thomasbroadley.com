var termStartDates = {
  "1139": moment("2013-09-09"),
  "1141": moment("2014-01-06"),
  "1145": moment("2014-05-05"),
  "1149": moment("2014-09-08"),
  "1151": moment("2015-01-05"),
  "1155": moment("2015-05-04"),
  "1159": moment("2015-09-14"),
  "1161": moment("2016-01-04"),
  "1165": moment("2016-05-02"),
  "1169": moment("2016-09-08"),
  "1171": moment("2017-01-03"),
  "1175": moment("2017-05-01"),
  "1179": moment("2017-09-07"),
  "1181": moment("2018-01-03"),
  "1185": moment("2018-05-01"),
  "1189": moment("2018-09-06"),
  "1191": moment("2019-01-07"),
  "1195": moment("2019-05-06"),
};

function toWarriorsBandDate(jsDate) {
  var date = moment(jsDate);

  var term = _.findLastKey(termStartDates, function (startDate) {
    return startDate <= date;
  });
  var dayOfTerm = date.diff(termStartDates[term], "days") + 1;

  if (_.isUndefined(term)) {
    throw "This date is in an academic term for which the start date is unknown.";
  }

  return term + "-" + dayOfTerm;
}

function fromWarriorsBandDate(dateString) {
  var textParts = _.split(dateString, "-");

  if (_.size(textParts) !== 2) {
    throw "Warriors Band dates must contain exactly one dash.";
  }

  var term = textParts[0];
  var dayOfTerm = textParts[1];

  if (_.toInteger(dayOfTerm) === 0 || !isFinite(dayOfTerm)) {
    throw "Warriors Band dates must have a positive number after the dash.";
  }

  if (!_.has(termStartDates, term)) {
    throw "The start date of the " + term + " term is unknown.";
  }

  var date = moment(termStartDates[term]).add(
    _.toInteger(dayOfTerm) - 1,
    "days"
  );
  var correctTerm = _.findLastKey(termStartDates, function (startDate) {
    return startDate <= date;
  });

  if (term !== correctTerm) {
    var correctDateString =
      correctTerm + "-" + (date.diff(termStartDates[correctTerm], "days") + 1);
    throw (
      "The Warriors Band date " +
      dateString +
      " should be written as " +
      correctDateString +
      "."
    );
  }

  return date.toDate();
}
