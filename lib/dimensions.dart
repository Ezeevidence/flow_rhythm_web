import 'package:flutter/widgets.dart';

double getHeight(double convertHeight, BuildContext context) {
  final screenHeight = MediaQuery.of(context).size.height;
  const figmaDesignHeight = 1024;
  double newScreenHeight = figmaDesignHeight / convertHeight;
  return screenHeight / newScreenHeight;
}

double getWidth(double convertWidth, BuildContext context) {
  final screenWidth = MediaQuery.of(context).size.width;
  const figmaDesignWidth = 1440;
  double newScreenWidth = figmaDesignWidth / convertWidth;
  return screenWidth / newScreenWidth;
}

double getFont(convertFont, BuildContext context) {
  final width = MediaQuery.of(context).size.width;
  const figmaDesignWidth = 1440;
  return (width / figmaDesignWidth) * convertFont;
}

extension getAppHeight on num {
  // convert height
  double appHeight(BuildContext context) {
    final screenHeight = MediaQuery.of(context).size.height;
    const figmaDesignHeight = 1024;
    double newScreenHeight = figmaDesignHeight / toDouble();
    return screenHeight / newScreenHeight;
  }

  //  convert width
  double appWidth(BuildContext context) {
    final screenWidth = MediaQuery.of(context).size.width;
    const figmaDesignWidth = 1440;
    double newScreenWidth = figmaDesignWidth / toDouble();
    return screenWidth / newScreenWidth;
  }
}
