### json-server 실행 순서
- db.json 파일 생성
- `npx json-server --port 9999 --watch db.json` 실행
- 필요한 스키마대로 데이터 작성
```
{
  "items": [
    {
      "id": "c9ed",
      "userid": "123",
      "password": "456"
    },
    {
      "id": "1ac2",
      "userid": "qwewq",
      "password": "trytr"
    }
  ]
}
```

- 엔드포인트에 맞게 api url 설정 (`http://localhost:9999/items`)