import 'package:flowrhythm_web/helpers/colors.dart';
import 'package:flutter/material.dart';

class EmailContainer extends StatelessWidget {
  const EmailContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(200, 0, 200, 0),
      child: Stack(
        children: [
          Container(
            decoration: BoxDecoration(
                border: Border.all(
                  color: Colors.white,
                ),
                borderRadius: const BorderRadius.all(Radius.circular(20))),
            child: TextFormField(
              cursorColor: Colors.white,
              style: const TextStyle(color: Colors.white),
              decoration: const InputDecoration(
                border: InputBorder.none,
                focusedBorder: InputBorder.none,
                enabledBorder: InputBorder.none,
                errorBorder: InputBorder.none,
                disabledBorder: InputBorder.none,
                contentPadding:
                    EdgeInsets.only(left: 15, bottom: 11, top: 11, right: 15),
                hintText: "Enter your email",
                hintStyle: TextStyle(
                  color: Colors.white,
                ),
              ),
            ),
          ),
          Positioned(
              right: 0,
              child: SizedBox(
                child: ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: mainGreen,
                  ),
                  onPressed: () {},
                  child: const Text("Join Wait list"),
                ),
              ))
        ],
      ),
    );
  }
}
