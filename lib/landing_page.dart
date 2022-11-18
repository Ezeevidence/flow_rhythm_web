import 'package:flowrhythm_web/widgets/countdown.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

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
      const figmaDesignHeight = 812;
      double newScreenHeight = figmaDesignHeight / convertHeight;
      return screenHeight / newScreenHeight;
    }

    double getWidth(double convertWidth) {
      final screenWidth = MediaQuery.of(context).size.width;
      const figmaDesignWidth = 375;
      double newScreenWidth = figmaDesignWidth / convertWidth;
      return screenWidth / newScreenWidth;
    }

    return Scaffold(
        body: SingleChildScrollView(
      child: Container(
        height: height,
        width: width,
        // constraints: const BoxConstraints.expand(),
        decoration: const BoxDecoration(
          image: DecorationImage(
              image: AssetImage("assets/background.png"), fit: BoxFit.cover),
        ),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(0, 15, 0, 10),
          child: Column(
            children: [
              Center(
                child: SvgPicture.asset("logos.svg"),
              ),
              const SizedBox(
                height: 50,
              ),
              const CountdownTimer()
            ],
          ),
        ),
      ),
    ));
  }
}
