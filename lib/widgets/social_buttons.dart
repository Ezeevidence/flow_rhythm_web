import 'package:flowrhythm_web/dimensions.dart';
import 'package:flowrhythm_web/helpers/colors.dart';
import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher_string.dart';

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
              onPressed: () async {
                const url = "https://twitter.com/FlowRythmn";
                if (await canLaunchUrlString(url)) {
                  launchUrlString(url);
                } else {
                  throw "Could not launch twitter";
                }
              },
              icon: Icon(
                FontAwesomeIcons.twitter,
                color: mainGreen,
                size: getHeight(24, context),
              )),
          IconButton(
              onPressed: () async {
                const url = "https://instagram.com";
                if (await canLaunchUrlString(url)) {
                  launchUrlString(url);
                } else {
                  throw "Could not launch twitter";
                }
              },
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
