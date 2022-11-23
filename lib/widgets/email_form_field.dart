import 'package:flowrhythm_web/dimensions.dart';
import 'package:flowrhythm_web/helpers/colors.dart';
import 'package:flutter/material.dart';

import 'alert_dialog.dart';

TextEditingController emailController = TextEditingController();

class EmailContainer extends StatelessWidget {
  const EmailContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        Container(
          height: getHeight(60, context),
          width: getWidth(600, context),
          decoration: BoxDecoration(
              border: Border.all(
                color: Colors.white,
              ),
              borderRadius: const BorderRadius.all(Radius.circular(20))),
          child: TextFormField(
            controller: emailController,
            cursorColor: Colors.white,
            style:
                TextStyle(color: Colors.white, fontSize: getFont(20, context)),
            decoration: InputDecoration(
              border: InputBorder.none,
              contentPadding:
                  const EdgeInsets.only(left: 20, bottom: 5, top: 5, right: 20),
              hintText: "Enter your email",
              hintStyle: TextStyle(
                  color: Colors.white, fontSize: getFont(20, context)),
            ),
          ),
        ),
        Positioned(
            right: 0,
            child: SizedBox(
              height: getHeight(60, context),
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: mainGreen,
                ),
                onPressed: () async {
                  // await Api().postData({"email": emailController.text});
                  DialogBox(
                    context: context,
                    textEditingController: emailController,
                  ).dialogBox(context);
                },
                child: const Text("Join Wait list"),
              ),
            ))
      ],
    );
  }
}
