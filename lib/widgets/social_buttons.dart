import 'package:flowrhythm_web/dimensions.dart';
import 'package:flowrhythm_web/helpers/colors.dart';
import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

class SocialButtons extends StatelessWidget {
  const SocialButtons({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Center(
      child: SizedBox(
        height: getHeight(50, context),
        width: getWidth(40, context),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            InkWell(
              onTap: () {},
              child: SizedBox(
                height: 20,
                width: 20,
                child: SvgPicture.asset(
                  "twitter.svg",
                  color: mainGreen,
                ),
              ),
            ),
            InkWell(
              onTap: () {},
              child: SizedBox(
                height: 20,
                width: 20,
                child: SvgPicture.asset(
                  "instagram.svg",
                  color: mainGreen,
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
