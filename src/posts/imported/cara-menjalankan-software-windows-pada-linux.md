---
title: Cara Menjalankan Aplikasi dan Game Windows pada Linux
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:13:43.116Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-menjalankan-software-windows-pada-linux
  type: atom
  url: http://localhost:3000/blog/cara-menjalankan-software-windows-pada-linux
---
Terkadang pada linux tidak ditemukan aplikasi dan game yang tersedia pada windows. Di linux sendiri terdapat banyak aplikasi namun tidak untuk game. Di linux game yang tersedia terkadang membosankan, tidak seperti game yang ada pada windows. Ataupun anda tidak dapat menemukan aplikasi yang tersedia pada windows di linux, seperti Microsoft Office, Photoshop dan sebagainya. Namun anda tidak perlu khawatir dengan hal tersebut, karena terdapat cara untuk menjalankan aplikasi maupun game windows pada Linux.

## Cara Menjalankan Software Windows DI Linux

### **Install WineHQ**

Untuk menjalankan aplikasi maupun game windows di linux anda harus menginstall wine terlebih dahulu. Gunakan perintah berikut untuk linux debian, ubuntu, atau linux mint.

```
sudo apt install wine-stable
```

  
Jika cara diatas tidak bisa maka gunakan wine saja jangan ditambah stable jadi perintahnya adalah

```
sudo apt install wine
```

  
Untuk pengguna Arch gunakan perintah berikut:  

```
sudo pacman -S wine
```

### **Menginstall Aplikasi dan Game**

Setelah terinstall silahkan mendownload game windows dan gunakan perintah berikut untuk menginstall.

```
wine namaprogram.exe
```

### **Menghapus Aplikasi dan Game**

Lalu bagaimana jika ingin mengunisntal aplikasi dan game windows di linux pada wine? Berikut caranya.

```
wine uninstaller
```

## Akhir Kata

Untuk menjalankan aplikasi dan game windows di linux sangatlah mudah, namun tidak semua aplikasi ataupun game Windows berjalan pada Linux. Untuk mengetahui apakah aplikasi dan game windows yang akan kamu gunakan bisa berjalan pada Wine maka buka website [winehq.org](http://winehq.org) dan cari apakah yang akan anda install tersebut bisa berjalan dengan baik?