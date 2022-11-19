import 'package:flowrhythm_web/helpers/colors.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ComingSoon extends StatelessWidget {
  const ComingSoon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Center(
            child: SizedBox(
              child: Text(
                "We are \n Coming Soon",
                style: GoogleFonts.raleway(
                    letterSpacing: 1.0,
                    height: 1.0,
                    color: mainGreen,
                    fontSize: 60,
                    fontWeight: FontWeight.bold),
                textAlign: TextAlign.center,
              ),
            ),
          ),
          const SizedBox(height: 100),
          Center(
            child: SizedBox(
              child: Text(
                'Be the first to find out when we go live',
                style: GoogleFonts.raleway(
                  letterSpacing: 1.0,
                  height: 1.0,
                  color: Colors.white,
                  fontSize: 20,
                ),
                textAlign: TextAlign.center,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
