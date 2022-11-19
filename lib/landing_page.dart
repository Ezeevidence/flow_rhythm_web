import 'package:flowrhythm_web/widgets/coming_soon.dart';
import 'package:flowrhythm_web/widgets/copyrights.dart';
import 'package:flowrhythm_web/widgets/countdown.dart';
import 'package:flowrhythm_web/widgets/email_form_field.dart';
import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter_svg/flutter_svg.dart';

import 'widgets/social_buttons.dart';

class LandingPage extends StatefulWidget {
  const LandingPage({Key? key}) : super(key: key);

  @override
  State<LandingPage> createState() => _LandingPageState();
}

class _LandingPageState extends State<LandingPage> {
  @override
  Widget build(BuildContext context) {
    ScrollController controller = ScrollController();
    ScrollController scrollController = ScrollController();
    var height = MediaQuery.of(context).size.height;
    var width = MediaQuery.of(context).size.width;

    double getHeight(double convertHeight) {
      final screenHeight = MediaQuery.of(context).size.height;
      const figmaDesignHeight = 1440;
      double newScreenHeight = figmaDesignHeight / convertHeight;
      return screenHeight / newScreenHeight;
    }

    double getWidth(double convertWidth) {
      final screenWidth = MediaQuery.of(context).size.width;
      const figmaDesignWidth = 1024;
      double newScreenWidth = figmaDesignWidth / convertWidth;
      return screenWidth / newScreenWidth;
    }

    return Scaffold(
      body: Container(
        height: height,
        width: width,
        // constraints: const BoxConstraints.expand(),
        decoration: const BoxDecoration(
          image: DecorationImage(
              image: AssetImage("assets/background.png"), fit: BoxFit.cover),
        ),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(50, 15, 0, 100),
          child: SingleChildScrollView(
            controller: scrollController,
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              crossAxisAlignment: CrossAxisAlignment.center,
              children: [
                Center(
                  child: SvgPicture.asset("logos.svg"),
                ),
                SizedBox(
                  height: getHeight(33),
                ),
                const CountdownTimer(),
                SizedBox(
                  height: getHeight(66),
                ),
                const ComingSoon(),
                SizedBox(
                  height: getHeight(42),
                ),
                const EmailContainer(),
                SizedBox(
                  height: getHeight(124),
                ),
                const SocialButtons(),
                SizedBox(
                  height: getHeight(40),
                ),
                const CopyRights()
              ],
            ),
          ),
        ),
      ),
    );
  }
}
