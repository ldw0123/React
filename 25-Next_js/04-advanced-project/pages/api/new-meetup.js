// app 폴더는 pages 폴더 내에 있어야 한다
// URL: /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  // POST 요청일 때만 함수를 작동시킴
  if (req.method === 'POST') {
    const data = req.body;

    // MongoDB cluster   연결
    const client = await MongoClient.connect(
      'mongodb+srv://ldw0123:<password>@cluster0.fc5z6ma.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
    );

    const db = client.db(); // meetups에 연결 중인 데이터베이스를 확보

    const meetupsCollection = db.collection('meetups'); // collection: SQL DB에 있는, 여러 문서를 보관하고 있는 테이블

    const result = await meetupsCollection.insertOne(data); // collection에 새 문서를 삽입

    console.log(result);

    client.close();

    // 201 상태 코드(성공) + JSON 데이터 추가
    res.status(201).json({ massage: 'Meetup 삽입됨!' });
  }
}
