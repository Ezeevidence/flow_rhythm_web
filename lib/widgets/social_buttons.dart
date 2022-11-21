import 'package:flowrhythm_web/dimensions.dart';
import 'package:flowrhythm_web/helpers/colors.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class SocialButtons extends StatelessWidget {
  const SocialButtons({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Container(
      alignment: Alignment.center,
      child: Row(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: [
          IconButton(
              onPressed: () {},
              icon: Icon(
                FontAwesomeIcons.twitter,
                color: mainGreen,
                size: getHeight(24, context),
              )),
          IconButton(
              onPressed: () {},
              icon: Icon(
                FontAwesomeIcons.instagram,
                color: mainGreen,
                size: getHeight(24, context),
              ))
        ],
      ),
    );
  }
}
