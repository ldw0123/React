// app 폴더는 pages 폴더 내에 있어야 한다
// URL: /api/new-meetup
// POST /api/new-meetup

import { MongoClient } from 'mongodb';

export default function handler(req, res) {
  // POST 요청일 때만 함수를 작동시킴
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;

    // MongoDB cluster 연결
    MongoClient.connect(
      'mongodb+srv://ldw0123:<password>@cluster0.fc5z6ma.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0'
    );
  }
}
