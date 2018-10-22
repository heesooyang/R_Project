export default function() {
  return [
    {
      "authorId": 1,
      "key": "templateKey123",
      "title": "인증번호",
      "body": "인증번호 문자 입니다. 인증번호는 :keyword: 입니다.",
      "memo": "고객 이벤트 문자입니다.",
      "replacements": [
        {
          "title": "인증번호",
          "maxByte": "최대길이",
          "default": "기본 변환값",
          "isEssential": true,
          "keyword": "auth_number"
        }
      ]
    }, {
      "authorId": 2,
      "key": "templateKey1232",
      "title": "인증번호1",
      "body": "인증번호 문자 입니다. 인증번호는 :keyword: 입니다1.",
      "memo": "고객 이벤트 문자입니다1.",
      "replacements": [
        {
          "title": "인증번호",
          "maxByte": "최대길이",
          "default": "기본 변환값",
          "isEssential": false,
          "keyword": "auth_number"
        }
      ]
    }

  ]
}