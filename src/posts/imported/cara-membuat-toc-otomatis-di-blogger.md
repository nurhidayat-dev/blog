---
title: Cara Membuat TOC Otomatis di Blogger
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:17:24.796Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-membuat-toc-otomatis-di-blogger
  type: atom
  url: http://localhost:3000/blog/cara-membuat-toc-otomatis-di-blogger
---
Pernahkah Anda melihat artikel seseorang dan dalam artikel tersebut terdapat Table Of Contents (TOC) atau Daftar Isi? Dalam Daftar Isi yang anda lihat memiliki sebuah link yang mengarahkan Anda langsung menuju point inti permasalahan yang ada dalam daftar isi atau TOC tersebut. Mungkin sebagian dari kalian juga sudah menerapkannya dalam artikel kalian. Tapi pernah terpikir nggak untuk membuat Daftar Isi secara otomatis dalam artikel di Blogger?

## Pengertian Table Of Contents (TOC)

Table Of Contents (TOC) atau daftar isi merupakan point-point yang menunjukan apa yang sedang dibahas dalam sebuah artikel maupun buku. Fungsinya sebagai pintasan untuk menuju point yang sedang pembaca cari. Dalam sebuah web Daftar Isi berupa link yang menuju langsung kepada header dari point konten. Dalam buku anda bisa melihat nomor halaman dari header tersebut.

## Pengantar Plugin TOC

Plugin TOC ini dibuat oleh MyBloggerTrick pada tahun 2017, plugin ini berfungsi untuk membuat Daftar Isi secara otomatis tanpa pengetikan manual. Plugin TOC ini menggunakan Javascript murni sehingga loadingnya cepat dan mudah dirayap oleh mesin pencari.

## Kenapa Harus Menggunakan TOC

Untuk webmaster dan blogger yang menulis artikel panjang dan membagi artikel dalam beberapa bagian, pembaca mungkin kesulitan membaca postingan panjang seperti itu tanpa adanya navigasi dari point penting. Solusi untuk membuat pembaca nyaman adalah dengan disertakanya daftar isi dalam artikel tersebut.

## Pengaruh TOC Terhadap SEO

TOC memberikan ringkasan dasar pada mesin pencari terhadap semua artikel Anda. Tautan pagar '#' di dalam TOC menawarkan manfaat tambahan untuk upaya SEO Anda. Google menyukai tautan pagar dan terutama ketika tautan ini bermakna dan memberikan navigasi dan pemahaman yang lebih baik tentang konten blog Anda.

## Fitur Plugin TOC

-   Dikodekan dalam JavaScript murni - hanya 10 baris kode! 
    
-   Ringan dan cepat. 
    
-   SEO Friendly 
    
-   Menambahkan ID unik ke setiap bagian secara otomatis. 
    
-   Membuat daftar dipesan atau tidak terurut 
    
-   Berisi tombol Toggle 
    
-   Tunjukkan di lokasi mana pun yang Anda pilih 
    
-   Mudah Disesuaikan 
    
-   Mobile responsif 
    
-   Scritp hanya berjalan ketika dipanggil!
    

## Cara Memasang Plugin TOC

Untuk memasang plugin TOC otomatis ini silahkan ikuti langkah berikut. 

-   Masuk ke Blogger>Template 
    
-   Backup terlebih dahulu template anda bilamana terjadi kesalahan bisa dipulihkan. 
    
-   Klik pada 3 titik disebelah tema saya dan pilih Edit HTML 
    
-   Cari kode \</head> dan copy paste kode berikut di atasnya.
    

```
<link href='http://fortawesome.github.io/Font-Awesome/assets/font-awesome/css/font-awesome.css' rel='stylesheet'/>           
<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'/>

        
<script type='text/javascript'>              
//<![CDATA[           
//*************TOC plugin by MyBloggerTricks.com           
function mbtTOC() {var mbtTOC=i=headlength=gethead=0;           
headlength = document.getElementById("post-toc").getElementsByTagName("h2").length;for (i = 0; i < headlength; i++)           
{gethead = document.getElementById("post-toc").getElementsByTagName("h2")[i].textContent;document.getElementById("post-toc").getElementsByTagName("h2")[i].setAttribute("id", "point"+i);mbtTOC = "<li><a href='#point"+i+"'>"+gethead+"</a></li>";document.getElementById("mbtTOC").innerHTML += mbtTOC;}}function mbtToggle() {var mbt = document.getElementById('mbtTOC');if (mbt .style.display === 'none') {mbt .style.display = 'block';} else {mbt .style.display = 'none';}}           
//]]>              
</script>
```

-   Sekarang cari kode \]\]></b:skin> dan pastekan kode berikut diatasnya
    

```
/*####Automatic TOC Plugin by MyBloggerTricks####*/          
.mbtTOC{border:5px solid #f7f0b8;box-shadow:1px 1px 0 #EDE396;background-color:#FFFFE0;color:#707037;line-height:1.4em;margin:30px auto;padding:20px 30px 20px 10px; font-family:oswald, arial;display: block;width: 70%;}           
.mbtTOC ol,.mbtTOC ul {margin:0;padding:0;}           
.mbtTOC ul {list-style:none;}           
.mbtTOC ol li,.mbtTOC ul li {padding:15px 0 0; margin:0 0 0 30px;font-size:15px;}           
.mbtTOC a{color:#0080ff;text-decoration:none;}           
.mbtTOC a:hover{text-decoration:underline; }

        
.mbtTOC button{background:#FFFFE0; font-family:oswald, arial; font-size:20px;position:relative; outline:none;cursor:pointer; border:none; color:#707037;padding:0 0 0 15px;}           
.mbtTOC button:after{content: "\f0dc"; font-family:FontAwesome; position:relative; left:10px; font-size:20px;}
```

-   Untuk Selanjutnya ialah mengubah kode <data:post.body> dengan kode berikut
    

```
<div id="post-toc"><data:post.body/></div>
```

## Cara Menerapkan Plugin TOC Pada Postingan

  
Untuk menampilkan Daftar Isi otomatis pada postingan bloggermu perlu melakukan pemanggilan dengan cara berikut

-   Dalam setiap postingan tambahkan kode berikut dengan cara klik pada tampilkan html atau tombol **<>** disamping judul postingan ,biasanya setelah paragraph pertama. Kode ini berfungsi sebagai tempat Daftar Isi atau TOC tampil dalam postingan.
    

```
<div class="mbtTOC"> 
<button onclick="mbtToggle()">Daftar Isi</button> 
<ol id="mbtTOC"></ol> 
</div>
```

-   Tambahkan kode pemanggil di akhir postingan supaya script TOC berjalan.
    

```
<script>mbtTOC();</script>
```

## Penutup

Semoga Plugin Table of Contents (TOC) atau Daftar Isi Otomatis ini bisa membantu Anda. Baca juga [Cara Membuat Multi Level Table of Contents Otomatis di Blogger](https://www.nurhidayat.web.id/2020/08/cara-membuat-multi-level-table-of.html)

TOC Plugin by **MyBloggerTricks** (MBT) is licensed under a [Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License](https://creativecommons.org/licenses/by-nc-sa/4.0/). From [Automatic Table of Contents With Javascript](https://www.mybloggertricks.com/2017/02/automatic-table-of-contents.html)