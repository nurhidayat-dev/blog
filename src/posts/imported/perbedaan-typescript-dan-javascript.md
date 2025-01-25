---
title: Serupa Tapi Tak Sama! Inilah Perbedaan TypeScript dan JavaScript
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T04:34:18.742Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/perbedaan-typescript-dan-javascript
  type: atom
  url: http://localhost:3000/blog/perbedaan-typescript-dan-javascript
---
TypeScript dan JavaScript sama-sama bahasa pemrograman yang populer saat ini. Meski kedua bahasa pemrograman ini saling berkaitan, namun terdapat perbedaan yang sangat besar saat kita menggunakannya. Dengan adanya artikel ini, kita akan mengetahui apa saja perbedaan dari TypeScript dan JavaScript.

## Apa itu JavaScript

JavaScript adalah bahasa pemrograman paling populer saat ini, yang dibuat oleh Brendan Erich pada tahun 1995 yang lalu. Bahasa ini dibuat untuk perusahaan Netscape, sebagai bagian dari browser yang baru berkembang saat itu.

Pada saat ini, JavaScript telah berkembang dan digunakan di berbagai program. Diantaranya adalah Website, Game, Aplikasi Mobile, Software Desktop juga server yang berjalan dengan NodeJS.

### Fitur JavaScript

#### 1\. Berjalan Disisi Klien

JavaScript merupakan bahasa front-end yang dapat melakukan kalkulasi tanpa harus menghubungi server setiap saat. Sehingga dapat membuat sebuah website lebih interaktif serta menghemat waktu dan meningkatkan efisiensi.

#### 2\. Validasi Input

JavaScript dapat mengetahui kesalahan input sebelum dikirim ke server, seperti input yang kosong atau tidak sesuai.

#### 3\. Platorm Independen

Karena JavaScript adalah bahasa pemrograman yang berjalan disisi klien, penting untuk menjadi independen. Sehingga kompatibel untuk dijalankan di berbagai macan sistem operasi.

## Apa itu TypeScript

TypeScript adalah bahasa pemrograman _open-source_ yang dibuat oleh Microsoft pada tahun 2012. Bahasa pemrograman ini dibuat diatas JavaScript, dengan menambahkan berbagai fitur yang mempermudah proses pengembangan.

Semua kode TypeScript akan di _compile_ menjadi bahasa JavaScript sebelum di eksekusi. Jadi apa yang bisa dilakukan dengan JavaScript, bisa juga dilakukan dengan TypeScript. Namun, perlu diperhatikan bahwa TypeScript lebih ketat sehingga ada beberapa hal yang tidak bisa dilakukan. Contohnya seperti berikut:

```
let count: number = 1
count = "satu"
console.log(count)

// error TS2322: Type 'string' is not assignable to type 'number'
```

### Fitur TypeScript

#### 1.Pengetikan Statis

Berbeda dengan JavaScript yang diketik secara dinamis, TypeScript adalah bahasa pemrograman yang diketik secara statis. Artinya, setiap variable yang akan ditulis harus ditentukan jenisnya terlebih dahulu.

Dengan adanya fitur ini, memberikan keuntungan bagi pengguna untuk mendeteksi kesalahan lebih awal dan menyelesaikannya dengan lebih cepat.

#### 2\. Kompatibilitas

Bahasa pemrograman TypeScript akan disusun ulang menjadi bahasa JavaScript. Sehingga, sangat penting untuk kompatibel dengan JavaScript versi lama maupun baru.

#### 3\. Fitur-fitur Tambahan

TypeScript merupakan bahasa pemrograman JavaScript dengan tambahan berbagai fitur pengembangan yang lebih luas. Diantaranya mendukung konsep _oop_ seperti _interfaces_, _class_, bahkan medukung integrasi dengan text editor seperti VS Code.

## Kenapa TypeScript Dibuat Jika Sudah Ada JavaScript

Seiring popularitas JavaScript yang meningkat, membuat bahasa pemrograman ini bisa digunakan selain pada website. Contohnya dengan menggunakan NodeJS, kita dapat menggunakan JavaScript di sisi server.

Namun, masalah muncul karena semakin besar program yang dibuat, maka semakin kompleks pula kode yang ditulis. Sehingga, kesalahan-kesalahan pada kode lebih sulit dipecahakan.

Untuk mengatasi hal tersebut, Microsoft mengembangkan TypeScript yang merupakan bahasa JavaScript dengan berbagai tambahan fitur.

## Perbedaan TypeScript dan JavaScript

### Kurva Pembelajaran

Meski bahasa pemrograman TypeScript dibuat untuk mempermudah pengembangan, namun diperlukan waktu untuk mempelajarinya. Berbeda dengan JavaScript yang sangat mudah dipelajari.

Bahkan sebelum mempelajari TypeScript, kita disarankan memiliki pengetahuan JavaScript terlebih dahulu.

### Perbedaan Fitur

Seperti yang disebutkan sebelumnya, TypeScript adalah JavaScript dengan berbagai tambahan fitur. Dengan demikian fitur-fitur TypeScript lebih banyak dibandingkan dengan JavaScript.

Dengan adanya fitur-fitur tambahan tersebut, mempermudah pengembang untuk mengembangkan dan memelihara program mereka.

### Pengetikan

TypeScript ditulis secara statis dan mendukung konsep OOP (_Object Oriented Programming_).

Sebaliknya, JavaScript hanya mendukung pengetikan secara dinamis dan tidak mendukung konsep OOP.

### Komunitas Pengembang

TypeScript merupakan bahasa pemrograman yang lebih baru dibandingkan JavaScript. Selain itu, JavaScript juga lebih banyak digunakan daripada TypeScript. Secara teori komunitas JavaScript lebih besar dibandingkan dengan TypeScript.

Bukan hanya itu, pengembang yang menguasai TypeScript juga pasti menguasai JavaScript. Sehingga menguatkan teori kami bahwa komunitas JavaScript lebih besar dibandingkan TypeScript.

### Kompilasi

Sebelum kode dieksekusi, TypeScript akan di kompilasi terlebih dahulu ke JavaScript. Sebaliknya, pada JavaScript kode akan langsung dieksekusi alih-alih dikompilasi terlebih dahulu.

## TypeScript vs JavaScript: Mana yang Terbaik?

Mana yang terbaik antara TypeScript dan JavaScript? Jika dilihat dari sisi pengembangan, pemeliharaan dan fitur yang ditawarkan maka TypeScript adalah yang terbaik.

Namun, jika dilihat dari kemudahan mempelajari bahasa pemrograman, maka JavaScript adalah yang terbaik dibanding TypeScript.

## Kapan Menggunakan TypeScript

Jika kamu membuat proyek yang besar, melibatkan banyak programmer, dan mementingkan skalabilitas, maka gunakanlah TypeScript.

Sedangkan untuk proyek yang lebih kecil dan membutuhkan waktu cepat untuk selesai. Kamu bisa mempertimbangkan JavaScript sebagai bahasa pemrograman yang akan digunakan.

## Kesimpulan

Setelah kita mengetahui perbedaan antara TypeScript dengan JavaScript, maka kesimpulannya ialah TypeScript merupakan JavaScript dengan berbagai fitur tambahan.Dengan adanya fitur ini, mempermudah programmer untuk mengembangkan proyek mereka.

Dengan perbedaan tersebut, kita lebih peduli untuk memilih bahasa mana yang harus digunakan.