library count_down_timer;

import 'dart:async';

import 'package:flowrhythm_web/dimensions.dart';
import 'package:flutter/material.dart';

import 'countdown.dart';

///CountDownText : A simple text widget that display the countdown timer
///based on the dateTime given e.g DateTime.utc(2050)
class CountDownText extends StatefulWidget {
  CountDownText({
    Key? key,
    required this.due,
    required this.finishedText,
    this.longDateName = false,
    this.style,
    this.labelStyle,
    this.showLabel = false,
    this.daysTextShort = "d      ",
    this.hoursTextShort = "h     ",
    this.minutesTextShort = "m     ",
    this.secondsTextShort = "s     ",
  }) : super(key: key);

  final DateTime? due;
  final String? finishedText;
  final bool? longDateName;
  final bool? showLabel;
  final TextStyle? style;
  final TextStyle? labelStyle;
  final String daysTextShort;
  final String hoursTextShort;
  final String minutesTextShort;
  final String secondsTextShort;

  @override
  _CountDownTextState createState() => _CountDownTextState();
}

class _CountDownTextState extends State<CountDownText> {
  Timer? timer;

  @override
  void initState() {
    timer = Timer.periodic(const Duration(seconds: 1), (timer) {
      setState(() {});
    });
    super.initState();
  }

  @override
  void dispose() {
    timer!.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return FittedBox(
      fit: BoxFit.fitWidth,
      child: RichText(
          text: TextSpan(
        children: [
          TextSpan(
              text: CountDown().daysLeft(widget.due!), style: widget.style),
          TextSpan(text: "d", style: widget.labelStyle),
          WidgetSpan(
            child: SizedBox(width: getWidth(200, context)),
          ),
          TextSpan(
              text: CountDown().hoursLeft(widget.due!), style: widget.style),
          TextSpan(text: "h", style: widget.labelStyle),
          WidgetSpan(
            child: SizedBox(width: getWidth(200, context)),
          ),
          TextSpan(
              text: CountDown().minsLeft(widget.due!), style: widget.style),
          TextSpan(text: "m", style: widget.labelStyle),
        ],
        style: widget.style,
      )),
    );
  }
}
