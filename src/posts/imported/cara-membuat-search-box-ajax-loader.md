---
title: Cara Membuat Search Box Ajax Loader Mirip Arlinacode
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:20:45.079Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-membuat-search-box-ajax-loader
  type: atom
  url: http://localhost:3000/blog/cara-membuat-search-box-ajax-loader
---
Pernah melihat search box arilnacode? Ternyata blog tersebut menggunakan ajax loader untuk search boxnya.

## Cara Kerja dari Ajax Loader

Ketika diketik query dalam search box maka otomatis muncul hasil dari pencarian tersebut akan langsung muncul, lihat video di bawah untuk contoh search box dengan ajax loader.

<video src="assets/videoplayback_sg9cde-1Na7d8kIKsjX.mp4" controls="true"></video>

## Cara Menerapkan Search Box Mirip Arlinacode

Untuk menerapkanya sobat bisa menggunakan javascript berikut di atas kode `</body>`.

```
<script src='//fiik346.github.io/js/search.js?live=true'/>
```

Ketika kode tersebut dipasang maka akan mencari tag input dengan name q, jika terdapat lebih dari dua form pencarian maka pencarian pertama yang akan berfungsi sebagai ajax loader search box.

Untuk menampilkan gambar bisa dengan menambahkan image=true atau disertai value dari ukuran parameter pengubah gambar dari Google image seperti `w200-c` atau `w200-h100-p-k-no-nu` contoh.

```
<script src='//fiik346.github.io/js/search.js?live=true&amp;image=true'/>
```

Atau menggunakan seperti berikut.

```
<script src='//fiik346.github.io/js/search.js?live=true&amp;image=w64-c'/>
```

Lihat dokumentasi selengkapnya dari [dte.web.id](http://dte.web.id) yang bisa sobat lihat di [Menambahkan Fitur AJAX Penelusuran di Blog](https://dte.web.id/teknis/widget-ajax-penelusuran-blogger)

Supaya search box tersebut lebih menarik sobat bisa menambahkan css style sendiri.

## Akhir kata

Begitulah cara membuat search box ajax loader yang mirip dengan blog arlinacode, dan sangatlah mudah untuk menerapkanya. Berterimakasihlah kepada Taufik Nurrohman sang pembuat search box ajax loader ini.