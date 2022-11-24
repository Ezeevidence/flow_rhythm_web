import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../helpers/countdown/date_countdown.dart';

class CountdownTimer extends StatelessWidget {
  const CountdownTimer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: MediaQuery.of(context).size.width,
      child: Align(
        alignment: Alignment.center,
        child: CountDownText(
          due: DateTime.parse("2023-01-15"),
          finishedText: "Done",
          showLabel: true,
          longDateName: false,
          labelStyle: GoogleFonts.poppins(
            fontSize: 20,
            foreground: Paint()
              ..style = PaintingStyle.stroke
              ..strokeWidth = 1
              ..color = Colors.grey,
            fontWeight: FontWeight.w700,
          ),
          style: GoogleFonts.poppins(
            fontSize: 80,
            foreground: Paint()
              ..style = PaintingStyle.stroke
              ..strokeWidth = 3
              ..color = Colors.grey,
            fontWeight: FontWeight.w700,
          ),
        ),
      ),
    );

    // TimerCountdown(
    //   format: CountDownTimerFormat.daysHoursMinutes,
    //   endTime: DateTime.parse("2023-01-15"),
    //   onEnd: () {},
    //   timeTextStyle: GoogleFonts.poppins(
    //     fontSize: getFont(180, context),
    //     foreground: Paint()
    //       ..style = PaintingStyle.stroke
    //       ..strokeWidth = 3
    //       ..color = Colors.grey,
    //     fontWeight: FontWeight.w700,
    //   ),
    //   spacerWidth: getWidth(10, context),
    //   enableDescriptions: true,
    //   descriptionTextStyle: GoogleFonts.poppins(
    //     fontSize: getFont(40, context),
    //     foreground: Paint()
    //       ..style = PaintingStyle.stroke
    //       ..strokeWidth = 0.5
    //       ..color = Colors.grey,
    //     fontWeight: FontWeight.w500,
    //   ),
  }
}
