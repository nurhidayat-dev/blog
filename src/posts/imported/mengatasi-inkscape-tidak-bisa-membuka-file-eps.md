---
title: Mengatasi Inkscape Tidak Bisa Membuka file EPS
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:22:45.073Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/mengatasi-inkscape-tidak-bisa-membuka-file-eps
  type: atom
  url: http://localhost:3000/blog/mengatasi-inkscape-tidak-bisa-membuka-file-eps
---
Bagi pengguna distro linux KDE Neon permasalahan error saat membuka file eps ini sudah muncul sejak Inkscape versi 0.9.x, dan saya pun kebingungan mencari solusi karena yang saya temukan hanya jawaban dengan bahasa inggris dan itupun berbelit-belit.

Dan masalah error ini kembali muncul sejak update 1.x, bagi yang mengalami masalah error saat membuka Inkscape ini dikarenakan Libpoppler yang tidak cocok. Kemarin saja saat saya update library linux karena saya mau upgrade KDE Neon ke versi 20.04 namun sayangnya ukuran yang cukup lumayan besar saya tidak jadi untuk upgrade versi KDE Neon ke versi terbaru, maklum masih menggunakan simcard untuk internetan dan permasalahan timbul karena saya juga ikut mengupdate library libpoppler ke versi terbaru dan Inkscape saya pun error saat membuka file EPS.

Dikarenakan saya lupa lagi cara untuk mengatasi error saat membuka file EPS di Inkscape tersebut maka saya buka lagi mbah google dan untungnya saya menemukannya secara instan sebab sudah ada di blog @raniaamina.

Begini perintah terminal yang saya gunakan untuk mengatasi error saat membuka file eps di inkscape.

```
sudo apt install libpoppler-glib8=0.62.0-2ubuntu2.10
```

Dan inkscape pun lancar saat membuka file eps. Namun akan error kembali terjadi jika kita mengupdate library karena libpoppler ikut terupdate. Untuk menahan agar libpoppler tidak ikut terupdate saya menggunakan perintah berikut.

```
sudo apt-mark hold libpoppler-glib8=0.62.0-2ubuntu2.10
```

Jika suatu hari kamu ingin mengupdate libpoppler maka kamu harus menggunakan perintah berikut sebelum mengupdate.

```
sudo apt-mark hold libpoppler-glib8=0.62.0-2ubuntu2.10
```

Maaf jika tutorial dari mengatasi inkscape tidak bisa membuka file eps kepanjangan + disertai curhatan. Hal tersebut hanya untuk memperpanjang artikel yang saya buat dan menanamkan keyword.