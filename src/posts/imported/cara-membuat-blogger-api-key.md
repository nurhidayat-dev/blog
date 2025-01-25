---
title: Cara Membuat Blogger API Key
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T04:06:31.192Z
metadata:
  uuid: 11ty/import::atom::http://localhost:3000/blog/cara-membuat-blogger-api-key
  type: atom
  url: http://localhost:3000/blog/cara-membuat-blogger-api-key
---
**Blogger API Key** digunakan sebagai autentikasi yang mengidentifikasi apakah akses yang dilakukan bukan orang yang tidak bertanggung jawab.

## APA Itu API Key

API Key atau bisa juga disebut token adalah sebuah kode yang digunakan untuk mengidentifikasi pengguna, pengembang, atau program pemanggil ke situs web.

API Key juga digunakan untuk melacak serta mengontrol bagaimana API digunakan, sehingga mencegah terjadinya penyalahgunaan API.

Begitulah yang saya baca dari [rapidapi.com](http://rapidapi.com).

## APA Itu Blogger API Key

Blogger API Key tentunya sama fungsi dengan API Key itu sendiri. Blogger API Key tidak hanya digunakan untuk Blogger jika kamu menggunakannya untuk beberapa API seperti youtube dan firebase, karena API Key yang diambil adalah API Key Google Cloud Console sehingga satu API Key dalam satu project mencakup semua produk Google Cloud. Jika disetting untuk blogger saja maka API Key tersebut hanya dapat digunakan dengan Blogger API.

## Cara Mendapatkan Blogger API Key

Untuk mendapatkanya kamu harus punya akun google yang terhubung dengan blogger, dimana akun blogger tersebut kamu adalah admin.

### **1\. Membuat Project**

Sekarang buka [Google Cloud Console](https://console.cloud.google.com/), jika kamu pertama kali menggunakan Google Cloud Console, akan muncul Popup seperti berikut. 

![Popup Get Started Google Cloud Console](assets/getting-started-popup-MR1m5zLxBfm4.jpg)

Silahkan pilih negara dan centang persyaratan layanan, kamu juga bisa membaca terlebih dahulu persyaratan layan dengan mengklik link yang tersedia. Jika kamu centang Pembaruan Email, nantinya akan ada newsletter, norifikasi, update produk dan promosi dari layanan google cloud dan partner nya ke Email kamu. Silahkan klik setuju dan lanjutkan jika sudah mencentang persyaratan layanan.

Sekarang kamu klik Pilih project dibagian navbar sebelah kiri dari kolom pencarian.

![Pilih Project Google Cloud Console](assets/pilih-project-LCIkzKAanG16.jpg)

Akan muncul popup baru yang berisi project, jika kamu pernah membuat project disana maka akan terdapat beberapa project. Jika kamu masih baru menggunakan silahkan klik Project Baru yang ada disebelah kanan atas popup

![Project Baru Google Cloud Console](assets/popup-buat-project-ZZ9n8ZNu28vA.jpg)

Dan sekarang kamu akan diberi formulir pembuatan project, silahkan isi sesuai keinginan pada nama project dan untuk id project kamu bisa menggunakan default atau disesuaikan.

![Form Project Baru Google Cloud Console](assets/form-project-l6XdmWWEEsgS.jpg)

Silahkan klik buat jika selesai mengisi, jika project berhasil dibuat akan muncul notifikasi seperti berikut.

![Notifikasi Project Berhasil dibuat Google Cloud Console](assets/project-berhasil-dibuat-UO7gO3uKNjgV.jpg)

**2\. Membuat Blogger API Key**

Sekarang kamu klik pada bagian API & Layanan lalu klik lagi bagian Library, atau hanya dengan mengarahkan cursor ke bagian tersebut dan pilih Library.

![API & Layanan > Library Google Cloud Console](assets/api+dan+layanan+library-swU5txYIlGgK.jpg)

Sekarang isi Blogger pada kolom pencarian, sehingga muncul seperti berikut silahkan klik Blogger API v3

![Blogger API v3](assets/blogger-library-GZwpqaIHWQOh.jpg)

Silahkan klik aktifkan, karena saya sudah mengaktifkan Blogger API v3 jadi tombol sudah berubah menjadi kelola.

![Blogger API v3](assets/aktifkan+blogger+api+v3-oroD8M5wfURE.jpg)

Lalu kita bisa buat kredensial mau dari tombol Buat Kredensial supaya google menyarankan API Key sesuai kebutuhan atau ke bagian Kredensial terlebih dahulu. Tapi disini kita langsung ke Kredensial saja supaya tidak lama.

![Blogger API v3](assets/buat-kredensial-blogger-api-EJAq3GHJvgKL.jpg)

Sekarang klik Buat Kredensial dan klik lagian Kunci API

![Blogger API v3 membuat kredensial](assets/buar+kredensial-LBdl8bagR9IW.jpg)

Maka akan muncul popup seperti berikut, bagian yang saya tutupi dengan warna merah adalah API Key yang bisa kamu gunakan nantinya klik batasi kunci untuk membatasi.

![API KEY](assets/kredensial-popup-3drTGz8cboW2.jpg)

Ikuti video di bawah ini untuk lebih jelasnya, sedangkan untuk bagian kolom item harus domain kamu sendiri. Pada bagian layanan kamu bisa memilih Blogger API v3 atau semuanya.

Setelah disimpan, api key bisa digunakan dan tentunya hanya dari domain kamu. Jika blog kamu masih menggunakan subdomain blogspot juga masih bisa cuma ada sedikit resiko, silahkan dicoba.

## Akhir Kata

Pada postingan mendatang saya akan membuat widget related posts dan juga tombol next prev berdasarkan label, kamu bisa berlangganan email untuk mengetahui update terbaru dari saya.

Mungkin kamu juga perlu membaca postingan ini [Mengenal Blogger API v3](https://www.nurhidayat.web.id/2020/10/mengenal-blogger-api-v3.html)