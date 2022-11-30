import 'package:auto_size_text/auto_size_text.dart';
import 'package:flowrhythm_web/dimensions.dart';
import 'package:flowrhythm_web/helpers/colors.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class ComingSoon extends StatelessWidget {
  const ComingSoon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        SizedBox(
          height: getHeight(164, context),
          child: AutoSizeText(
            "We are \n Coming Soon",
            style: GoogleFonts.raleway(
                letterSpacing: 1.0,
                height: 1.2,
                color: mainGreen,
                fontSize: 32,
                fontWeight: FontWeight.bold),
            textScaleFactor: getScaleFactor(context),
            maxLines: 2,
            textAlign: TextAlign.center,
          ),
        ),
        SizedBox(height: getHeight(32, context)),
        SizedBox(
          height: getHeight(30, context),
          child: Text(
            'Be the first to find out when we go live',
            style: GoogleFonts.raleway(
              letterSpacing: 1.0,
              color: textGrey,
            ),
            textAlign: TextAlign.center,
          ),
        ),
      ],
    );
  }
}
