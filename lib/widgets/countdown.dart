import 'package:flutter/material.dart';
import 'package:flutter_timer_countdown/flutter_timer_countdown.dart';
import 'package:google_fonts/google_fonts.dart';

class CountdownTimer extends StatelessWidget {
  const CountdownTimer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: <Widget>[
          TimerCountdown(
            format: CountDownTimerFormat.daysHoursMinutes,
            endTime: DateTime.parse("2022-12-25"),
            onEnd: () {},
            timeTextStyle: GoogleFonts.poppins(
              fontSize: 150,
              foreground: Paint()
                ..style = PaintingStyle.stroke
                ..strokeWidth = 3
                ..color = Colors.grey,
              fontWeight: FontWeight.w700,
            ),
            spacerWidth: 50,
            enableDescriptions: true,
            descriptionTextStyle: GoogleFonts.poppins(
              fontSize: 50,
              foreground: Paint()
                ..style = PaintingStyle.stroke
                ..strokeWidth = 0.5
                ..color = Colors.grey,
              fontWeight: FontWeight.w700,
            ),
          ),
        ],
      ),
    );
  }
}
