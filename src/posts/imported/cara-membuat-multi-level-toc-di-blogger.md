---
title: Cara Membuat Multi Level TOC di Blogger
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T04:05:05.475Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-membuat-multi-level-toc-di-blogger
  type: atom
  url: http://localhost:3000/blog/cara-membuat-multi-level-toc-di-blogger
---
**Table of Contents** yang bisa disingkat dengan kata TOC atau dalam bahasa Indonesia disebut Daftar Isi sering dijumpai di blog. Untuk Wordpress terdapat plugin TOC yang bisa membuat multi level table of contents secara otomatis tanpa perlu ribet tapi untuk blogger plugin seperti table of contents tidak tersedia alias harus membuatnya dengan cara manual. Alasan tersebutlah yang membuat saya ingin membagikan cara membuat table of contents secara otomatis di blogger.

## Keuntungan TOC

Dengan menambahkan Multi Level Table of Contents pada Blogger akan membuat pembaca lebih mudah untuk mengakses kontent anda. Kenapa? Ketika Table of Contents ada di blog anda maka pengunjung tinggal mengklik link yang ada pada Table of Contents tersebut jika ingin membaca point yang pembaca inginkan, jadi pembaca tidak perlu menavigasi ke atas dan ke bawah secara manual karena sudah ada point-point yang bisa mereka akses di table of contents.

Dengan menambahkan table of contents juga bisa menambah score seo karena googlebot akan mengcrawl link yang menuju point dari pembahasan blog.

## Kenapa TOC

Hal ini tergantung dari sobat yang mau memasang, apakah itu karena ingin mempercantik blog dengan widget multi level table of contents atau ingin mempermudah navigasi agar pengunjung nyaman. Tidak ada salahnya anda mencoba menerapkan widget ini.

## Cara Kerja

Kode atau script ini akan mengambil semua heading tag dari h2 sampai h4 dan akan diambil setiap text dari tag tersebut, jika tag heading yang diambil memiliki id contohnya

```
<h2 id="lorem">Lorem Ipsum</h2>
```

  
maka id tersebut akan ikut diambil dan dijadikan sebagai jump link menuju heading tag tersebut. Namun jika tidak ada atribut id dalam heading yang diambil maka akan membuat id dengan id section\_1 lalu section\_2 dan seterusnya.

## Cara Memasang

Sebelum langkah dibawah dilakukan pastikan untuk membackup terlebih dahulu template yang kamu gunakan, dan untuk menerapkan widget ini sobat harus membuka blogger dan kemudian masuk mode html, lihat video dibawah bagaimana caranya edit template dalam mode html.

<video src="assets/edit_tema_yolnjg-p4N1PCBPhLqW.mp4" controls="true"></video>

Sekarang sobat bisa cari kode `</body>` yang berada dipaling bawah bisa menggunakan shortcut **CTRL**+**End** dan copy lalu paste kode berikut diatasnya.

```
<b:if cond='data:view.isPost'>
<script>
// Table of Contents. Licensed in GPL
//<![CDATA[      
if(1==toc){function $get(e){return document.querySelector(e)}function $all(e){return Array.prototype.slice.call(document.querySelectorAll(e))}function buildTOC_ul(e){var t=[document.createElement("ol"),null,null];t[0].style;var n=0,l=0;return e||(e="h2, h3, h4"),$all(e).forEach(function(e){e.id||(e.id="section_"+ ++l);for(var i="H2"==e.tagName?0:"H3"==e.tagName?1:2;n<i;n++)t[n].appendChild(t[n+1]=document.createElement("ul"));n=i;var r=document.createElement("li");r.innerHTML="<a href='#"+e.id+"'></a>",r.firstChild.innerHTML=e.innerHTML,t[n].appendChild(r)}),t[0]}function addTOC(e,t,n){void 0===t&&(t=e.firstChild);var l="",i=e.className;i&&(l="."+(-1==i.indexOf(" ")?i:i.substr(0,i.indexOf(" ")))+" ");var r=l+"h2, "+l+"h3, "+l+"h4",d=document.createElement("div");d.className=n||"sidebox my-3",d.appendChild(document.createTextNode("Contents")),d.appendChild(buildTOC_ul(r)),e.insertBefore(d,t)}var _post_=$get(".post-body");addTOC(_post_,_post_.firstChild.nextSibling.nextSibling)}
//]]>
</script>
</b:if>
```

Untuk memanggil toc sobat bisa menambahkan kode berikut disetiap postingan.

```
<script>var toc=true;</script>
```

Tetapi jika ingin setiap postingan terdapat widget multi level table of contents tanpa memanggilnya maka bisa melakukan langkah berikut.

Cari kode `</head>` dan pastekan kode berikut tepat diatasnya.

```
<b:if cond='data:view.isPost'><script>var
  toc=true;</script></b:if>
```

Perhatikan jika sobat ingin mengecualikan table of contents pada postingan maka sobat harus menerapkan kode berikut pada setiap akhir postingan yang tidak ingin sobat tampilkan widget table of contents tersebut.

```
<script>var toc=false;</script>
```

### **Style Floating**

Jika ingin multi level table of contents ditampilkan disamping text maka tambahkan kode berikut diatas kode `</head>`

```
<style>
.sidebox {
  border: 1px dotted rgb(127, 127, 127);
  padding: 4px 3px 4px 6px; /* top right bottom left */
  min-width: 100px ! important;
  float: right ! important;
  font-size: 90%;
  margin-top: 1px;
  margin-bottom: 1px;
  margin-left: 6px;
  visibility: visible;
  max-width: 50%;
  width: 35%;
}
.sidebox ul { padding:0em 0em 0em 1.3em; margin:0em; }//TRBL
</style>
```

## Akhir Kata

Script multi level table of contents tersebut berasumber dari [http://loyc.net/2014/javascript-toc.html](http://loyc.net/2014/javascript-toc.html). Ada juga versi sederhana yang bisa kamu lihat [Cara Membuat Daftar Isi / Table Of Contents Artikel Otomatis Di Blogger](https://www.nurhidayat.web.id/2020/07/daftar-isi-toc-otomatis-blogger.html)