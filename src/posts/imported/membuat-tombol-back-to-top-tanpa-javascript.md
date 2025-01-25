---
title: Cara Membuat Tombol Back to Top tanpa Javascript
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T04:35:32.809Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/membuat-tombol-back-to-top-tanpa-javascript
  type: atom
  url: http://localhost:3000/blog/membuat-tombol-back-to-top-tanpa-javascript
---
Pada sebuah blog atau website biasanya terdapat tombol kembali ke atas dengan ikon panah ke atas. Untuk membuatnya tidaklah susah, hanya perlu menanamkan link tagar yang menuju element paling atas halaman. Apakah perlu javascript? Tidak! Javascript hanya pemanis saja supaya ketika halaman di scroll ke bawah maka tombol muncul sedangkan ketika halaman sedang paling atas maka tombol tidak muncul.

## Tambahkan Tombol ke Halaman

Misalkan anda punya html seperti dibawah

```
<!DOCTYPE html>
<html>
  <head>
    <title>Membuat Tombol Back to Top</title>
  </head>
  <body>
    <header id="header"><h1>Membuat Tombol Back to Top</h1></header>
    <main style="height:1140px">Disini kita akan belajar membuat tombol back to top tanpa javascript!</main>
  </body>
</html>
```

Kita tambahkan tombol tepat diatas kode `</body>` seperti berikut

```
<div id="top"><a href="#header">TOP</a></div>
```

#header adalah id dari `<header>`, karena #header adalah id paling atas maka tombol akan mengarahkan halaman ke atas, tampilan akhir seperti ini

```
<!DOCTYPE html>
<html>
<head>
<title>Membuat Tombol Back to Top</title>
</head>
<body>
<header id="header"><h1>Membuat Tombol Back to Top</h1></header>
<main style="height:1140px">Disini kita akan belajar membuat tombol back to top tanpa javascript!</main>
<div id="top"><a href="#header">TOP</a></div>
</body>
</html>
```

## Tambahkan Style

Tombol tadi berfungsi secara baik namun tombol akan muncul dibawah halaman, supaya tombol tetap terlihat maka kita perlu menambahkan css. Tempatkan css berikut di bagian head.

```
<style>
#top a {
padding: 1rem;
background-color: red;
color: black;
position: fixed;
right: 1rem;
bottom: 1rem;
}
</style>
```

Css tersebut membuat tombol melayang dan menempati sudut dari bawah kanan dan merubah lebar serta warna tombol. Hasil akhir seperti berikut.

```
<!DOCTYPE html>
<html>
<head>
<title>Membuat Tombol Back to Top</title>
<style>
#top a {
padding: 1rem;
background-color: red;
color: black;
position: fixed;
right: 1rem;
bottom: 1rem;
}
</style>
</head>
<body>
<header id="header"><h1>Membuat Tombol Back to Top</h1></header>
<main "height:1140px">Disini kita akan belajar membuat tombol back to top tanpa javascript!</main>
<div id="top"><a href="#header">TOP</a></div>
</body>
</html>
```

## Tambahkan scroll-behavior

Tombol akan berfungsi namun tidak bergulir atau scrolling dan malah langsung ke atas. Supaya halaman bergulir secara smooth bisa tambahkan kode css berikut

```
html {
scroll-behavior: smooth;}
```

hasil akhir seperti ini

```
<!DOCTYPE html>
<html>
<head>
<title>Membuat Tombol Back to Top</title>
<style>
html {
scroll-behavior: smooth;}
#top a {
padding: 1rem;
background-color: red;
color: black;
position: fixed;
right: 1rem;
bottom: 1rem;
}
</style>
</head>
<body>
<header id="header"><h1>Membuat Tombol Back to Top</h1></header>
<main style="height:1140px">Disini kita akan belajar membuat tombol back to top tanpa javascript!</main>
<div id="top"><a href="#header">TOP</a></div>
</body>
</html>
```

Hasilnya ketika tombol diklik maka halaman akan bergulir ke atas secara lambat.

## Merubah Text dan Warna

Supaya tampilannya lebih bagus kita rubah tombol tadi dengan icon dari bootstrap

```
<div id="top"><a href="#header">
  <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-up-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 8.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"/>
</svg>
</a></div>
```

dan ubah warna dalam css

```
#top a {
padding: 1rem;
color: #007bff;
position: fixed;
right: 1rem;
bottom: 1rem;
}
#top a:hover {
color: #085eb9;
}
```

kita hilangkan background karena icon sudah terdapat background dan tambahkan hover supaya ketika tombol terkena cursor akan berubah warna, hasil akhir.

```
<!DOCTYPE html>
<html>
<head>
<title>Membuat Tombol Back to Top</title>
<style>
html {
scroll-behavior: smooth;}
#top a {
padding: 1rem;
color: #007bff;
position: fixed;
right: 1rem;
bottom: 1rem;
}
#top a:hover {
color: #085eb9;
}
</style>
</head>
<body>
<header id="header"><h1>Membuat Tombol Back to Top</h1></header>
<main style="height:1140px">Disini kita akan belajar membuat tombol back to top tanpa javascript!</main>
<div id="top"><a href="#header">
  <svg width="2em" height="2em" viewBox="0 0 16 16" class="bi bi-arrow-up-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 8.354a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 6.207V11a.5.5 0 0 1-1 0V6.207L5.354 8.354z"/>
</svg>
</a></div>
</body>
</html>
```