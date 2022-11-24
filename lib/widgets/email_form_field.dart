import 'package:flowrhythm_web/dimensions.dart';
import 'package:flowrhythm_web/helpers/colors.dart';
import 'package:flutter/material.dart';

import '../helpers/api.dart';
import 'alert_dialog.dart';

TextEditingController emailController = TextEditingController();

class EmailContainer extends StatelessWidget {
  const EmailContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        SizedBox(
          height: getHeight(72, context),
          width: getWidth(545, context),
          // decoration: BoxDecoration(
          //     border: Border.all(
          //       color: Colors.white,
          //     ),
          //     borderRadius: const BorderRadius.all(Radius.circular(20))),
          child: TextFormField(
            controller: emailController,
            cursorColor: Colors.white,
            style:
                TextStyle(color: Colors.white, fontSize: getFont(20, context)),
            decoration: InputDecoration(
              filled: true,
              fillColor: Colors.white.withOpacity(0.26),
              border: const OutlineInputBorder(
                  borderRadius: BorderRadius.all(Radius.circular(20))),
              contentPadding:
                  const EdgeInsets.only(left: 20, bottom: 5, top: 5, right: 20),
              hintText: "Enter email address",
              hintStyle: TextStyle(
                  color: Colors.white, fontSize: getFont(20, context)),
            ),
          ),
        ),
        Positioned(
            right: 0,
            child: SizedBox(
              height: getHeight(70, context),
              width: getWidth(170, context),
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: mainGreen,
                ),
                onPressed: () async {
                  uploadEmail();
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

  Future<void> uploadEmail() async {
    await Api().postData({"email": emailController.text});
  }
}
