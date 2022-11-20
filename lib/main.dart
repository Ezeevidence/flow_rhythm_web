import 'package:flutter/material.dart';
import 'package:responsive_framework/responsive_framework.dart';

import 'landing_page.dart';

void main() {
  runApp(MaterialApp(
    builder: (context, child) => ResponsiveWrapper.builder(
      BouncingScrollWrapper.builder(context, child!),
      maxWidth: 2460,
      minWidth: 450,
      defaultScale: true,
      breakpoints: [
        const ResponsiveBreakpoint.resize(450, name: MOBILE),
        const ResponsiveBreakpoint.autoScale(800, name: TABLET),
        const ResponsiveBreakpoint.autoScale(1000, name: TABLET),
        const ResponsiveBreakpoint.resize(1440, name: DESKTOP),
        const ResponsiveBreakpoint.autoScale(2460, name: "4K"),
      ],
    ),
    scrollBehavior: const MaterialScrollBehavior(),
    debugShowCheckedModeBanner: false,
    theme: ThemeData(
      visualDensity: VisualDensity.adaptivePlatformDensity,
    ),
    home: const LandingPage(),
  ));
}
