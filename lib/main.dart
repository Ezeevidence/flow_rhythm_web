import 'package:flutter/material.dart';

import 'landing_page.dart';

void main() {
  runApp(MaterialApp(
    scrollBehavior: const MaterialScrollBehavior(),
    debugShowCheckedModeBanner: false,
    theme: ThemeData(
      visualDensity: VisualDensity.adaptivePlatformDensity,
    ),
    home: const LandingPage(),
  ));
}
