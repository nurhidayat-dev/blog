---
title: Cara Mengatasi mps-yt Error
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:20:30.411Z
metadata:
  uuid: 11ty/import::atom::http://localhost:3000/blog/cara-mengatasi-mps-yt-error
  type: atom
  url: http://localhost:3000/blog/cara-mengatasi-mps-yt-error
---
Mps-youtube merupakan sebuah software open source yang memungkinkan kamu memutar musik, namun baru-baru ini terjadi permasalahan dengan software ini. Seperti error quota limit dan daily limit atau error fetching data. Berikut cara untuk memperbaiki error dari mps-youtube tersebut.

## Error Quota Limit

Untuk yang satu ini cukup ganti api\_key dari mps-youtube, kamu bisa menggunakan perintah berikut.

```
set api_key AIzaSyDUW0EydFaaXbfPgRPOgHFmmSeYAFi9xbY
```

## Error Fetching Data

Jika sudah mengubah api\_key namun masih belum bisa memutar musik kamu bisa mengupdate mps-youtube ke versi development, karena akhir-akhir ini mpv sudah diperbarui dan terjadi komplikasi dari sana. Gunakan perintah berikut.

```
pip3 install --user -U git+https://github.com/mps-youtube/mps-youtube.git
```

## Youtube said: invalid parameters

Ternyata hal ini berkaitan dengan youtube-dl, silahkan upgrade youtube-dl ke versi terbaru dengan menggunakan perintah berikut.

```
pip3 install --user youtube-dl && pip3 install --user youtube-dl
  --upgrade
```

## Akhir Kata

Silahkan bertanya dikolom komentar jika terjadi error lainya dengan mps-youtube.

> Untuk saat ini mps-youtube sudah tidak di update lagi!