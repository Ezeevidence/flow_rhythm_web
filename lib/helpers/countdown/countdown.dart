class CountDown {
  String daysLeft(DateTime due) {
    String retDays = "";
    String retHours = "";
    String retMins = "";

    Duration _timeUntilDue = due.difference(DateTime.now());

    int _daysUntil = _timeUntilDue.inDays;
    int _hoursUntil = _timeUntilDue.inHours - (_daysUntil * 24);
    int _minUntil =
        _timeUntilDue.inMinutes - (_daysUntil * 24 * 60) - (_hoursUntil * 60);
    // String s = _secUntil.toString().substring(_secUntil.toString().length - 2);
    // //Fixed Invalid Range Value

    //Check whether to return longDateName date name or not
    if (_daysUntil > 0) {
      retDays += _daysUntil.toString();
    }
    if (_hoursUntil > 0) {
      retHours += _hoursUntil.toString();
    }
    if (_minUntil > 0) {
      retMins += _minUntil.toString();
    }

    return retDays;
  }

  String hoursLeft(DateTime due) {
    String retDays = "";
    String retHours = "";
    String retMins = "";

    Duration _timeUntilDue = due.difference(DateTime.now());

    int _daysUntil = _timeUntilDue.inDays;
    int _hoursUntil = _timeUntilDue.inHours - (_daysUntil * 24);
    int _minUntil =
        _timeUntilDue.inMinutes - (_daysUntil * 24 * 60) - (_hoursUntil * 60);
    // String s = _secUntil.toString().substring(_secUntil.toString().length - 2);
    // //Fixed Invalid Range Value

    //Check whether to return longDateName date name or not
    if (_daysUntil > 0) {
      retDays += _daysUntil.toString();
    }
    if (_hoursUntil > 0) {
      retHours += _hoursUntil.toString();
    }
    if (_minUntil > 0) {
      retMins += _minUntil.toString();
    }

    return retHours;
  }

  String minsLeft(DateTime due) {
    String retDays = "";
    String retHours = "";
    String retMins = "";

    Duration _timeUntilDue = due.difference(DateTime.now());

    int _daysUntil = _timeUntilDue.inDays;
    int _hoursUntil = _timeUntilDue.inHours - (_daysUntil * 24);
    int _minUntil =
        _timeUntilDue.inMinutes - (_daysUntil * 24 * 60) - (_hoursUntil * 60);
    // String s = _secUntil.toString().substring(_secUntil.toString().length - 2);
    // //Fixed Invalid Range Value

    //Check whether to return longDateName date name or not
    if (_daysUntil > 0) {
      retDays += _daysUntil.toString();
    }
    if (_hoursUntil > 0) {
      retHours += _hoursUntil.toString();
    }
    if (_minUntil > 0) {
      retMins += _minUntil.toString();
    }

    return retMins;
  }
}
