import 'package:flowrhythm_web/dimensions.dart';
import 'package:flowrhythm_web/helpers/colors.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

class CopyRights extends StatelessWidget {
  const CopyRights({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: Center(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const Icon(Icons.copyright),
            SizedBox(
              width: getWidth(10, context),
            ),
            Text(
              "Copyrights FlowRhythm | All Rights Reserved",
              textAlign: TextAlign.center,
              style: GoogleFonts.poppins(
                color: textGrey,
              ),
            )
          ],
        ),
      ),
    );
  }
}
