---
title: Cara Mirroring Layar Android ke Linux, Windows dan Macos
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:16:31.877Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-mirroring-layar-android-ke-komputer
  type: atom
  url: http://localhost:3000/blog/cara-mirroring-layar-android-ke-komputer
---
Mirroring screen atau menduplikat tampilan dari android ke PC bukan suatu hal yang tak asing ditelinga dan mata, bahkan sudah lumrah dengan adanya chromecast. Mirroring sendiri tentu banyak tujuan seperti untuk melakukan streaming, persentasi ataupun hanya sekedar mencoba saja.

Untuk melakukan mirroring dari android ke PC sudah banyak tutorial bertebaran diluar sana, seperti menggunakan ApowerMirror, Mobizen Mirroring ataupun Vsyor dan sebagainya. Karena aplikasi tersebut tidak mendukung mirroring layar dengan sistem operasi Linux maka tutorial yang saya bagikan akan sedikit berbeda dari yang lain. Jika aplikasi lain kita mengharuskan kedua perangkat memiliki aplikasi khusus namun dengan aplikasi ini kita tidak mengharuskan keduanya memiliki aplikasi yang sama, cukup pada perangkat PC saja. Nama aplikasi atau software tersebut adalah scrcpy, scrcpy memungkinkan kita untuk melakukan mirroring layar android ke PC dengan sistem operasi Linux, Windows dan MacOS dengan mengambil langsung dari server android sehingga tidak menimbulkan delay saat melakukan mirroring tersebut.

## **Alat yang diperlukan:**

1\. Smartphone Android dengan os versi 5.0 keatas.  
2\. PC/Laptop dengan sistem operasi Linux, Windows atau MacOS**.**  
3\. Kabel USB.

## Langkah-langkah:

  
1\. Buka link [https://github.com/Genymobile/scrcpy](https://github.com/Genymobile/scrcpy) dan silahkan ikuti petunjuk penginstallan. Jika kurang paham anda bisa mengikuti langkah berikut:  

-   Untuk Windows download dengan menggunakan link diatas.
    
-   Untuk MacOS dengan perintah berikut   
    
    ```
    brew install scrcpy
    ```
    
    dan  
    
    ```
    brew cask install android-platform-tools
    ```
    
-   Untuk linux bisa menggunakan snap dengan perintah  
    
    ```
    snap install scrcpy
    ```
    

  
2\. Pastikan smartphone anda telah [mengaktifkan mode pengembang](https://developer.android.com/studio/debug/dev-options) dan usb debug. Sambungkan smartphone dengan PC menggunakan kabel USB, kabel usb berfungsi sebagai penghubung data dari layar android ke pc saat melakukan mirroring.  
  
3\. Untuk windows cukup ekstrak file download tadi dan double klik scrcpy dalam folder yang telah diekstrak, sedangkan untuk MacOS dan Linux cukup buka terminal dan ketikan perintah "scrcpy" lalu enter.  
  
4\. Akan muncul otoritasi pada smartphone, lalu tinggal anda terima saja. Maka akan muncul sebuah jendela pada PC anda dimana jendela tersebut sama dengan tampilan pada smartphone android kamu dan bisa disebut mirroring.

![](assets/Screenshot_20191111_184549-min-ZXUJLbBNejqh.png)

## **Kelebihan:**

-   Tanpa delay dan ringan.
    
-   Bisa mengontrol langsung android.
    
-   Tidak perlu aplikasi pada android, sehingga android menjadi ringan.
    
-   Open Source.
    
-   Gratis, tanpa biaya terpisah.
    
-   Berjalan di android dengan spesifikasi yang minim.
    
-   Multi Platform (Linux, Windows dan MacOS)
    

## **Kekurangan:**

-    Tidak ada audio yang ikut saat mirroring, adapun cara lain dengan menggunakan usbaudio dan itupun hanya berjalan pada linux.
    

## Akhir Kata

Ya begitulah [cara melakukan Mirroring dari android ke windows, macos dan linux.](http://0.0.7.227/11/cara-miroring-layar-android-ke-pc.html) Semoga tutorial yang saya bagikan bermanfaat bagi sobat yang ingin melakukan mirroring layar android ke pc.