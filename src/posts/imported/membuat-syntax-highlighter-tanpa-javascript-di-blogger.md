---
title: Membuat Syntax Highlighter Tanpa Javascript di Blogger
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:18:06.549Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/membuat-syntax-highlighter-tanpa-javascript-di-blogger
  type: atom
  url: >-
    http://localhost:3000/blog/membuat-syntax-highlighter-tanpa-javascript-di-blogger
---
Syntax Highlighter merupakan sebuah fitur yang digunakan dalam bahasa pemrograman dengan menggunakan beberapa warna berbeda pada setiap kata. Syntax Highlighter bertujuan supaya kode pemrograman mudah dibaca Manusia atau seorang programmer yang menulis kode pemrograman tersebut. 

Jika anda menulis kode pemrograman HTML dalam Notepad dimana notepad tidak punya fitur syntax highlighter lalu kode pemrograman anda sangat panjang dan anda ingin mencari komentar yang pernah anda buat, maka anda tidak akan bisa dengan mudah membacanya secara satu persatu, mungkin masih bisa diakali dengan fitur pencarian. Hal tersebut dikarenakan warna yang sama antara komentar di HTML , kode tag HTML, maupun teks biasa.

Dalam sebuah website yang menjabarkan tutorial bahasa pemrograman tidak sedikit yang menggunakan syntax highlighter supaya tampilan lebih menarik dan mudah dibaca. Untuk menerapkan syntax highlighter bisa dengan memasang highlight js namun ternyata highlight js **sangat berat untuk loading blog**, solusinya adalah dengan menerapkan css pada tag pre dan code. Tapi ternyata dengan menerapkan css saja highlighting nya tidak jauh berbeda dengan yang ada pada notepad hanya background dan text nya saja yang berubah.

Jadi bagaimana cara supaya syntax highlighter terlihat berwarna namun tidak memperlambat loading blog? Pertama anda harus install yang namanya [Visual Studio Code](https://code.visualstudio.com/). Selanjutnya ialah membuka dan membuat file baru dengan format file disesuaikan dengan bahasa pemrograman, misalkan kalau javascript format file harus NAMA-FILE.js begitupun html atau xml.

![Membuat Syntax Highlighter Ringan Tanpa Javascript di Blogger](assets/Screenshot_20200804_051707-sQXoOpOhWiPP.png)

Atau bisa juga dengan mengubahnya dikiri bawah, lihat pilihan yang HTML ubah dari sana tinggal cari nama bahasa pemrograman yang kamu pakai.

![Membuat Syntax Highlighter Ringan Tanpa Javascript di Blogger](assets/Screenshot_20200804_051737-9G2IoeSEZgBY.png)

Sekarang tinggal anda ketikan kode pemrograman dan copy semua kode yang diperlukan.

![Membuat Syntax Highlighter Ringan Tanpa Javascript di Blogger](assets/Screenshot_20200804_052421-3ukSSzYpkkIH.png)

Buka blogger dan paste kode tersebut di postingan dalam tampilan menulis, tampilan highlighter akan seperti berikut. 

![Membuat Syntax Highlighter Ringan Tanpa Javascript di Blogger](assets/afsd-UiR2HegV2e9I.png)

Lalu buka dalam tampilan html dan hapus background dari code yang di paste tadi

![Membuat Syntax Highlighter Ringan Tanpa Javascript di Blogger](assets/Screenshot_20200804_052901-iHNOw9PcQO4T.png)

Dan tambahkan kode \<pre>\<code>

![Membuat Syntax Highlighter Ringan Tanpa Javascript di Blogger](assets/222-P24Jc5yo5Ew7.png)

Sekarang highlighter tidak akan memiliki background, seperti berikut.

![Membuat Syntax Highlighter Ringan Tanpa Javascript di Blogger](assets/dad-i6ZEGgCF1oax.png)

  
Syntax highlighter ringan ini berhasil saya praktikan dengan menggunakan Linux distro KDE Neon, silahkan dicoba di Windows, Mac OS X ataupun sistem operasi lainya. Mungkin dengan software lain seperti atom ataupun sublime.  Warna bisa disesuaikan dengan tema yang ada pada Visual Studio Code, jangan lupa tambahkan css background untuk pre dan kode jika background ingin terlihat hitam.