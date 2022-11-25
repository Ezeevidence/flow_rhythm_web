import 'package:flowrhythm_web/helpers/image.dart';
import 'package:flowrhythm_web/widgets/coming_soon.dart';
import 'package:flowrhythm_web/widgets/copyrights.dart';
import 'package:flowrhythm_web/widgets/countdown.dart';
import 'package:flowrhythm_web/widgets/email_form_field.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import 'widgets/social_buttons.dart';

class LandingPage extends StatefulWidget {
  const LandingPage({Key? key}) : super(key: key);

  @override
  State<LandingPage> createState() => _LandingPageState();
}

class _LandingPageState extends State<LandingPage> {
  @override
  Widget build(BuildContext context) {
    var height = MediaQuery.of(context).size.height;
    var width = MediaQuery.of(context).size.width;

    double getHeight(double convertHeight) {
      final screenHeight = MediaQuery.of(context).size.height;
      const figmaDesignHeight = 1017;
      double newScreenHeight = figmaDesignHeight / convertHeight;
      return screenHeight / newScreenHeight;
    }

    double getWidth(double convertWidth) {
      final screenWidth = MediaQuery.of(context).size.width;
      const figmaDesignWidth = 1440;
      double newScreenWidth = figmaDesignWidth / convertWidth;
      return screenWidth / newScreenWidth;
    }

    return Scaffold(
      body: Container(
        height: height,
        width: width,
        // constraints: const BoxConstraints.expand(),
        decoration: BoxDecoration(
          image: DecorationImage(
              image: AssetImage(path("png_backgrounds.png")),
              fit: BoxFit.cover),
        ),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(0, 0, 0, 0),
          child: SingleChildScrollView(
            child: Stack(
              children: [
                Positioned(
                    top: getHeight(120),
                    left: getWidth(300),
                    child: SizedBox(
                        height: getHeight(33),
                        width: getWidth(26),
                        child: Image.asset(path("music_note.png")))),
                Positioned(
                    top: getHeight(94),
                    right: getWidth(315),
                    child: SizedBox(
                        height: getHeight(33),
                        width: getWidth(26),
                        child: Image.asset(path("headset.png")))),
                Positioned(
                    bottom: getHeight(124),
                    right: getWidth(300),
                    child: SizedBox(
                        height: getHeight(56),
                        width: getWidth(56),
                        child: Image.asset(path("circle.png")))),
                Positioned(
                    bottom: getHeight(154),
                    left: getWidth(315),
                    child: SizedBox(
                        height: getHeight(20),
                        width: getWidth(20),
                        child: Image.asset(path("square.png")))),
                Positioned(
                    bottom: getHeight(472),
                    left: getWidth(189),
                    child: SizedBox(
                        height: getHeight(40),
                        width: getWidth(40),
                        child: Image.asset(path("user_data.png")))),
                Positioned(
                    top: getHeight(94),
                    right: getWidth(315),
                    child: SizedBox(
                        height: getHeight(33),
                        width: getWidth(26),
                        child: Image.asset("headset.png"))),
                Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.center,
                  children: [
                    Center(
                        child: Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      crossAxisAlignment: CrossAxisAlignment.center,
                      children: [
                        SizedBox(
                          height: getWidth(100),
                          width: getWidth(407),
                          child: Image(
                            image: AssetImage(path("logo.png")),
                          ),
                        ),
                      ],
                    )),
                    const CountdownTimer(),
                    SizedBox(
                      height: getHeight(20),
                    ),
                    const ComingSoon(),
                    SizedBox(
                      height: getHeight(25),
                    ),
                    const EmailContainer(),
                    SizedBox(
                      height: getHeight(80),
                    ),
                    const SocialButtons(),
                    SizedBox(
                      height: getHeight(20),
                    ),
                    const CopyRights()
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
