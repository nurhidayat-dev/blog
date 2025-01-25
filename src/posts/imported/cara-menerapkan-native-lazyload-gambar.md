---
title: Cara Menerapkan Native Lazyload Gambar, Sangat Mudah!
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:23:07.247Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-menerapkan-native-lazyload-gambar
  type: atom
  url: http://localhost:3000/blog/cara-menerapkan-native-lazyload-gambar
---
**Lazy Loading** merupakan sebuah teknik yang memuat source seperti gambar dipaling akhir setelah halaman dimuat atau dimuat saat diperlukan saja. Lazy loading juga bisa disebut on-demand loading.

## Apa Itu Native Lazyload Images

Lazyload images atau gambar ialah sebuah fitur yang sudah tertanam pada sebuah browser modern seperti Google Chrome dan Firefox, browser berbasis Chromium seperti Opera, Edge (versi terbaru) dan Brave Browser juga sudah terdapat fitur tersebut. Sedangkan untuk safari saya kurang tahu, dan di blognya [web.dev](http://web.dev) mengatakan "akan segera hadir" yang mungkin masih dalam tahap pengembangan. Native Lazyload tidak memerlukan plugin apapun seperti javascript, karena sudah tertanam di browser pengguna.  
Native Lazyload images akan memuat gambar seperlunya, jika gambar tersebut terbaca dilayar maka gambar tersebut akan dimuat sedangkan jika tidak terbaca dilayar misalkan ada di paling bawah halaman maka gambar tersebut tidak akan dimuat dan akan dimuat ketika pengguna menscroll browser hingga bagian gambar tersebut.

Lihat video berikut, ketika di bagian atas gambar lain tidak ikut dimuat sedangkan ketika di scroll ke bawah hingga bagian gambar lain maka akan memuat gambar lainya.

<video src="https://rr4---sn-xmjxajvh-cqvl.googlevideo.com/videoplayback?expire=1659877541&amp;ei=JEjvYsTxN7Wsn88PsPWu4AM&amp;ip=140.213.22.45&amp;id=011cff53b6dbcd3d&amp;itag=18&amp;source=blogger&amp;mh=9g&amp;mm=31&amp;mn=sn-xmjxajvh-cqvl&amp;ms=au&amp;mv=m&amp;mvi=4&amp;pl=24&amp;susc=bl&amp;eaua=kbVbIRkG24s&amp;mime=video/mp4&amp;vprv=1&amp;dur=16.370&amp;lmt=1600856646647115&amp;mt=1659848461&amp;txp=1319224&amp;sparams=expire,ei,ip,id,itag,source,susc,eaua,mime,vprv,dur,lmt&amp;sig=AOq0QJ8wRQIgOv38MHKJDtgy9nU1e8wAHXrK0URPD130MdE5wuR69boCIQDrGxsVkHqNBUjfhNeRG2WIrYYFVztFgdAPbGHY4sHX1Q%3D%3D&amp;lsparams=mh,mm,mn,ms,mv,mvi,pl&amp;lsig=AG3C_xAwRQIhAL1cAT4XZ7jltACCAq0crXsEpOejybYgWoO1_uA7hVigAiAj4_TAgMV03nhtAoLBKTSiNj_NNkrBG9OmLRzJyIyKbw%3D%3D&amp;cpn=c8PEIbJvisNS53ub&amp;c=WEB_EMBEDDED_PLAYER&amp;cver=1.20220803.01.00" controls="true"></video>

## Keuntungan Native Lazyload

Keuntungan dari menggunakan native lazyload diantaranya adalah sebagai berikut.

1.  Sangat mudah diterapkan
    
2.  Tanpa plugin apapun
    
3.  Membuat memori pengguna lebih enteng
    
4.  Mempercepat loading halaman
    

## Cara Menerapkan Native Lazyload

Untuk menerapkan native lazyload kamu hanya perlu menambahkan atribut `loading="lazy"` saja pada gambar. Contohnya:

```
<img src="/image.jpg" loading="lazy">
```

Namun lebih bagus jika menambahkan atribut `height` dan `width`, supaya ketika gambar belum tampil terdapat white space pada gambar sehingga ketika pengguna menscroll hingga pada bagian gambar maka text tidak akan pindah.

```
<img loading="lazy" width="1000" height="1500" src="./img.jpg" />
```

Dan tambahkan style berikut sehingga gambar tidak ditampilkan keluar dari body halaman.

```
img {
max-width: 100%;
height: auto;}
```

## Akhir kata

Sangat mudah bukan? Bahkan orang yang baru saja tahu bahasa html akan langsung bisa menerapkan native lazyload images tersebut.