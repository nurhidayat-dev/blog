---
title: Cara Menjadikan Android sebagai Gamepad pada Linux
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T04:30:06.242Z
metadata:
  uuid: 11ty/import::atom::http://localhost:3000/blog/android-sebagai-gamepad-linux
  type: atom
  url: http://localhost:3000/blog/android-sebagai-gamepad-linux
---
Menjadikan smartphone android sebagai mouse dan gamepad pada Windows adalah hal yang mudah dilakukan, namun bagaimana dengan linux? Tentu saja hal ini bisa dilakukan dan caranya pun cukup mudah.

Pada awalnya saya mau memainkan game pada PC Linux, namun saya tidak memiliki gamepad. Dahulu saya juga pernah mengalami kasus serupa pada PC Windows, namun untuk Windows banyak software yang mendukung untuk menjadikan Android sebagai gamepad.

Pada sistem operasi linux pun juga sama namun cukup sulit untuk menemukan software nya, ketika browsing pun saya menemukan software yang telah usang dan tidak dapat di install. Dan akhirnya saya menemukan dua software yang bisa menjadikan smartphone android sebagai gamepad pada linux yaitu droidmote dan controlloid.

## **Menggunakan Droidmote Sebagai Mouse, Keyboard dan Gamepad**

Untuk droidmote kita bisa menjadikan smartphone android sebagai mouse, keyboard, gamepad dan bahkan remote. Kita bisa memilih sesuai kebutuhan, namun sayangnya tidak bisa kita kustom sendiri layout dari gamepad sehingga kurang cocok untuk digunakan. Meski begitu untuk mouse dan keyboard-nya sudah sangat bagus dan mudah digunakan.

Ikuti langkah-langkah berikut untuk menggunakan droidmote pada distro linux kamu:

-   Langkah pertama install droidmote server dengan perintah berikut untuk sistem operasi berbasis debian.
    

```
curl -Ls https://www.videomap.it/script/install_droidmote_ubuntu.sh | sudo sh
```

-   Sekarang install droidmote client dari smartphone android kalian lewat play store atau dari [Halaman Download Droidmote](https://www.videomap.it/download.htm).
    
-   Pastikan pc dan smartphone berada pada satu jaringan yang sama, lalu jalankan server droidmote pada distro linux dengan menyertakan `ip:port password`. Jika droidmote tidak bisa dijalankan maka akses sebagai super user.
    
    ```
    droidmote 192.168.0.102:1111 pw
    ## atau
    sudo droidmote 192.168.0.102:1111 pw
    ```
    

-   Buka droidmote client, lalu klik titik tiga di bagian kanan atas dan klik connect yang biasanya akan secara otomatis menampilkan ip dari pc kalian sehingga kalian tinggal koneksikan ke alamat tersebut. Jika tidak muncul maka masukan alamat ip secara manual.
    
-   Sekarang smartphone android kamu bisa mengontrol pc linux sebagai mouse, keyboard ataupun gamepad.
    

Menggunakan Controlloid Sebagai Gamepad

Jika kamu menggunakan Droidmote sebagai gamepad, ada sebuah kendala yaitu tidak bisa melakukan kustom layout pada gamepad. Maka kamu bisa menggunakan controlloid sebagai alternatif, namun controlloid hanya berfungsi sebagai gamepad saja tidak bisa menjadi mouse maupun keyboard.

Sebelumnya kita harus mempunyai controlloid server pada linux dan controlloid client pada android. Untuk server bisa kamu dapatkan pada [halaman github controlloid](https://github.com/experiment322/controlloid-server). Atau dengan meng-klon repository tersebut.

```
git clone https://github.com/experiment322/controlloid-server
```

Masuk ke folder `controlloid-server/dist/linux` dari terminal dan jalankan server.

```
cd controlloid-server/dist/linux && ./start.sh
```

Install aplikasi controlloid pada android lewat play store, dan buka aplikasinya. Silahkan masuk bagian layout dan tambahkan layout sesuai yang kalian mau. Pastikan linux dan android kalian berada pada jaringan yang sama, lalu masuk pada bagian controller dan masukan alamat ip dari yang tertera pada linux contoh `http://192.168.0.101:31415/` lau klik connect.

Sekarang kamu bisa menggunakan smartphone android sebagai gamepad pada linux.

## Kelebihan dan Kekurangan

Sejauh ini ada beberapa kelebihan dan kekurangan yang saya rasakan dengan menggunakan android sebagai gamepad, untuk kelebihannya sendiri yaitu murah karena tidak perlu membeli gamepad. Meski begitu kekurangan android sebagai gamepad lebih banyak dibandingkan dengan kelebihannya, diantaranya:

1\. **Ribet**: Untuk proses pemasangan hingga proses koneksi lumayan menguras waktu, belum lagi terjadi error.

2\. **Delay**: Saya juga menemukan delay yang lumayan saat bermain game, sehingga proses bermain tidak akurat.

3\. **Susah Digunakan**: Berbeda dengan gamepad yang memiliki tombol fisik, android hanya memiliki layar yang rata sehingga saat kita menekan tombol seringkali salah pencet bahkan tidak kena. Hasilnya permainan pun malah terasa lebih sulit.

## Akhir Kata

Meski android bisa dijadikan alternatif gamepad namun tetap rasanya jauh berbeda dengan menggunakan gamepad asli. Saran saya lebih baik menggunakan gamepad saja, di harga 100 ribu-an pun kamu bisa mendapatkan yang sudah bagus untuk bermain game santai.