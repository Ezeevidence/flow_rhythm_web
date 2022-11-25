import 'dart:convert';
import 'dart:io';

import 'package:http/http.dart' as http;

class Api {
  final String url = 'https://flowrhythm.studio/api/v1/waitlist';

  postData(var data) async {
    var res = await http.post(Uri.parse(url),
        body: jsonEncode(data), headers: await _setHeaders());
    return _processResponse(res);
  }

  Future<Map<String, String>> _setHeaders() async => {
        'Content-type': 'application/json',
        'Accept': 'application/json',
        'Accept-Encoding': 'gzip, deflate, br',
        "Access-Control-Allow-Origin": "*",
      };

  dynamic _processResponse(dynamic response) {
    switch (response.statusCode) {
      case 200:
        var resJson = jsonDecode(response.body);
        print(resJson);
        return resJson;
      case 400:
        throw SocketException(
            // utf8.decode(response.bodyBytes),
            response.request!.url.toString());
      case 401:
      case 402:
      case 403:
      case 404:
        throw Exception(
            // utf8.decode(response.bodyBytes),
            response.request!.url.toString());
      case 500:
      default:
        throw Exception(
            // utf8.decode(response.bodyBytes),
            response.request!.url.toString());
    }
  }
}
