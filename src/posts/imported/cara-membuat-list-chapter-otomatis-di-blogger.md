---
title: Cara Membuat List Chapter Otomatis di Blogger
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:17:51.231Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-membuat-list-chapter-otomatis-di-blogger
  type: atom
  url: http://localhost:3000/blog/cara-membuat-list-chapter-otomatis-di-blogger
---
Membuat chapter list di Blogger memang mudah namun agak lama jika diketik secara manual, maka chapter list otomatis yang saya ambil dari template MegumiNovel yang dibuat Codepelajar mungkin bisa jadi solusi.

Script ini otomatis menampilkan daftar link menuju postingan dengan label tertentu. Misalkan labelnya adalah Hero maka semua postingan link beserta judul dengan label Hero akan tampil dalam bentuk list. Untuk membuatnya Anda harus masuk ke edit tema dalam mode html, dan jangan lupa backup dulu templatenya bila suatu hal yang tidak diinginkan terjadi maka anda tinggal memulihkanya.

Mari ke tutorial dan saya asumsikan anda sudah masuk edit template mode html, sekarang cari kode

```
<b:includable id='post' var='post'>
```

Sekarang tambahkan kode berikut tepat di atasnya

```
<b:includable id='select_chapter'><b:loop values='data:post.labels' var='label'><b:if cond='data:label.name != &quot;Novel&quot; and data:label.name != &quot;Anime&quot; and data:label.name != &quot;Manga&quot;'><script>var postID = <data:post.id/>;//<![CDATA[if(autlist==true){function autolist(e){for(var t=0;t<e.feed.entry.length;t++){for(var r=0;r<e.feed.entry[t].link.length;r++)if("alternate"==e.feed.entry[t].link[r].rel){var n=e.feed.entry[t].link[r].href;break}var f=e.feed.entry[t].title.$t;e.feed.entry[t].id.$t.substr(51,19)!=postID&&document.write("<li><a href="+n+">"+f+"</a></li>")}}}//]]></script><div class='auto-listchap'><ul><script expr:src='&quot;/feeds/posts/default/-/&quot; + data:label.name + &quot;?orderby=published&amp;max-results=99999&amp;alt=json-in-script&amp;callback=autolist&quot;' type='text/javascript'/></ul></div></b:if></b:loop></b:includable>
```

  
Untuk "Novel, Anime dan Manga" adalah label pengecualian yang tidak akan ikut tereksekusi sehingga script tidak menambahkan postingan dengan label tersebut. Jika ingin menambahkan pengecualian anda tambah dengan kode  `and data:label.name != &quot;Label Name&quot;`. Selanjutnya tinggal Anda tambahkan kode berikut di bawah kode `<data:post.body/>`  

```
<b:if cond='data:view.isPost'><b:include name='select_chapter'/></b:if>
```

Sekarang anda simpan dan buka postingan yang ingin ditambahkan chapter list otomatis, dan masukan kode berikut di paling bawah postingn. 

```
<script>var autlist = true</script>
```

  
Silahkan buat style sendiri supaya chapter list otomatis terlihat bagus, jika mau style yang pernah saya pake silahkan tambahkan kode berikut di atas kode  `]]></b:skin>` atau kode `</style>` dan tentunya harus masuk lagi ke mode html.

  

```
.auto-listchap {
max-height: 244px;
overflow: auto;
}
.auto-listchap ul {
padding: 0.1rem;
margin: 0;
}
.auto-listchap li {
background-color: #eee;
padding: 0.3rem;
margin: 0.3rem;
}
```

  
Sekarang lihat postingan, jika script chapter list otomatis pada blogger ini gagal silahkan bertanya dikolom komentar mungkin saya bisa bantu. Dan kita patut berterimakasih kepada Codepelajar yang sudah membuat script ini.