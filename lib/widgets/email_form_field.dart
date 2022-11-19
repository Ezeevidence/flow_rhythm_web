import 'package:flutter/material.dart';

class EmailContainer extends StatelessWidget {
  const EmailContainer({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(50, 0, 50, 0),
      child: Stack(
        children: [
          Container(
            decoration: BoxDecoration(
                border: Border.all(
                  color: Colors.white,
                ),
                borderRadius: const BorderRadius.all(Radius.circular(20))),
            child: TextFormField(),
          ),
          Positioned(
              child: ElevatedButton(
            onPressed: () {},
            child: const Text("Join Wait list"),
          ))
        ],
      ),
    );
  }
}
