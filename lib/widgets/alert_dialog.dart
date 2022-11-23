import 'package:auto_size_text/auto_size_text.dart';
import 'package:flowrhythm_web/helpers/colors.dart';
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

import '../dimensions.dart';
import '../helpers/image.dart';

class DialogBox {
  BuildContext context;
  TextEditingController textEditingController;
  DialogBox({
    required this.context,
    required this.textEditingController,
  });

//     // size

  Future dialogBox(BuildContext context) {
    return showDialog(
      context: context,
      builder: (context) => AlertDialog(
        backgroundColor: greyDialog,
        shape: RoundedRectangleBorder(
          borderRadius: BorderRadius.circular(15),
        ),
        // title: Text('Hello'),
        content: Container(
          height: getHeight(280, context),
          width: getWidth(365, context),
          decoration: BoxDecoration(
            color: greyDialog,
            borderRadius: BorderRadius.circular(15),
          ),
          child: Padding(
            padding: EdgeInsets.all(getWidth(5, context)),
            child: Column(
              children: [
                Container(
                  height: getHeight(100, context),
                  width: getWidth(100, context),
                  alignment: Alignment.center,
                  child: Image(image: AssetImage(path("tick.png"))),
                ),
                SizedBox(
                  height: getHeight(30, context),
                ),
                AutoSizeText(
                  "You have successfully joined our waitlist. \n Kindly check your email for our welcome message",
                  maxLines: 3,
                  textAlign: TextAlign.center,
                  style: GoogleFonts.raleway(
                      fontSize: getFont(20, context), color: Colors.white),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
