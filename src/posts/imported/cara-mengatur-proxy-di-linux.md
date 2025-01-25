---
title: Cara Mengatur Proxy di Linux
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T04:16:57.026Z
metadata:
  uuid: 11ty/import::atom::http://localhost:3000/blog/cara-mengatur-proxy-di-linux
  type: atom
  url: http://localhost:3000/blog/cara-mengatur-proxy-di-linux
---
**Proxy** tidak akan lepas dari sistem operasi Linux. Linux sendiri terkenal menjadi sebuah sistem operasi yang digunakan server. Jika menyangkut sebuah server linux maka mungkin kamu akan mendengar proxy, proxy sendiri menurut Wikipedia adalah sebuah perantara (antara sistem komputer atau aplikasi) yang bertindak sebagai perantara permintaan dari klien mencari sumber daya dari server lain. Klien A terhubung ke server perantara, meminta beberapa layanan, seperti berkas, sambungan, laman, atau sumber daya lainnya, yang tersedia dari server yang berbeda.

## Menggunakan Pengaturan

Untuk mengatur proxy pada sistem operasi linux bisa diatur lewat pengaturan, kamu cukup buka pengaturan dan buka bagian network > setting > proxy.

![Tampilan UI Settings Proxy](assets/setting_ijqja4-jf7MpFWut26u.png)

Kamu bisa memilih proxy mana yang akan kamu gunakan. Pada bagian detect proxy configuration automatically akan mendeteksi pengaturan proxy secara otomatis, hal ini berlaku jika sebuah jaringan menerapkannya sebut saja sebuah perusahaan atau universitas mengatur proxy otomatis, lalu kamu mengatur ke deteksi otomatis maka proxy pun bisa digunakan.

Untuk bagian use proxy configuration url adalah pengaturan otomatis proxy juga namun kamu perlu mengisi dengan url yang menuju dari file pengaturan proxy, biasanya ektensi berupa ".pac".

Pada bagian use system dan manual, saya rasa tidak ada perbedaan. Pada bagian ini kamu harus mengisi proxy sendiri, mungkin pada bagian use system proxy akan terisi otomatis jika system proxy sudah di atur pada linux kamu.

Jika tidak ingin menggunakan proxy maka cukup pilih bagian pada no proxy.

Untuk format proxy sepert ini `http://USERNAME:PASSWORD@PROXYIP:PROXYPORT`

Jika proxy tidak memerlukan authenticasi maka cukup dengan proxy:port.

```
http://PROXYIP:PROXYPORT
```

Contoh dengan autentikasi

```
http://taufik:11jozz@192.168.43.1:8080
```

tanpa autentikasi

```
http://192.168.43.1:8080
```

## Menggunakan Terminal

Proxy sudah diatur lewat pengaturan linux namun saat menggunakan terminal linux, proxy tidak berjalan maka kamu harus mengatur system proxy lewat terminal.

Buka terminal linux bisa lewat shortcut **Ctrl**+**T** dan ketikan perintah berikut.

```
sudo nano /etc/environment
```

Lalu isi text dengan format berikut pada bagian paling akhir.

```
http_proxy="http://USERNAME:PASSWORD@PROXYIP:PROXYPORT"
https_proxy="http://USERNAME:PASSWORD@PROXYIP:PROXYPORT"
ftp_proxy="http://USERNAME:PASSWORD@PROXYIP:PROXYPORT"
no_proxy="localhost,127.0.0.1,::1"
```

![Tampilan Terminal Saat Mengatur Pengaturan Proxy](assets/hasproxy_wdqcfl-Tm6slaQlrJnE.png)

Format proxy juga sama seperti pada bagian pertama yaitu 

```
http://USERNAME:PASSWORD@PROXYIP:PROXYPORT
```

Jika tidak ingin menggunakan proxy namun tetap ingin menyimpan pengaturan tersebut barangkali dimasa mendatang akan digunakan kembali cukup memberikan # pada bagian awal setiap baris.

![Memberikan Komentar Pada File Pengaturan Proxy](assets/2523proxy_e7k0vt-MUfONfoZkGjx.png)

## Akhir Kata

Begitulah cara untuk mengatur proxy di linux. Dengan menggunakan proxy koneksi kamu ke internet juga semakin aman, dan biasanya konten yang diblokir seperti reddit juga akan terbuka.