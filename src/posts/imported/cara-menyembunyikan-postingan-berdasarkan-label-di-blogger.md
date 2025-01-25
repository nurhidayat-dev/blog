---
title: Cara Menyembunyikan Postingan Berdasarkan Label di Blogger
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:17:38.440Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-menyembunyikan-postingan-berdasarkan-label-di-blogger
  type: atom
  url: >-
    http://localhost:3000/blog/cara-menyembunyikan-postingan-berdasarkan-label-di-blogger
---
Postingan di halaman Index atau Homepage Blogger ternyata bisa disembunyikan berdasarkan label yang tidak ingan anda tampilkan di halaman index atau homepage.

Untuk menyembunyikanya Anda harus mengedit template blogger. Untuk mengeditnya anda harus masuk tab Tema dan klik 3 titik yang ada di samping dan pilih edit HTML. Sekarang cari kode berikut, bisa anda gunakan shortcut **Ctrl+F**.

```
<b:loop values='data:posts' var='post'>
```

Lalu ganti semua kode tersebut dengan kode berikut.

```
<b:loop values='data:view.isHomepage ? data:posts where (p => p.labels none (l => l.name == "LABEL HERE")) : data:posts' var='post'>
```

Untuk LABEL HERE ganti dengan label yang tidak ingin anda tampilkan di halaman Homepage atau Index anda. Silahkan cek homepage/index atau halaman Depan blog anda maka postingan dengan label yang tidak ingin anda tampilkan tidak akan muncul di halaman depan.