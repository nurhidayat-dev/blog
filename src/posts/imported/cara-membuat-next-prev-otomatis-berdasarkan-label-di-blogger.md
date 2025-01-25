---
title: Cara Membuat Next Prev Otomatis Berdasarkan Label di Blogger
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:16:59.825Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-membuat-next-prev-otomatis-berdasarkan-label-di-blogger
  type: atom
  url: >-
    http://localhost:3000/blog/cara-membuat-next-prev-otomatis-berdasarkan-label-di-blogger
---
Tombol Next dan Previous sangat bermanfaat bila blog tersebut adalah blog yang digunakan untuk Novel. Tetapi bagaimana bila Anda harus membuatnya secara manual? Rasanya sangat melelahkan harus mengedit lagi postingan sebelumnya, jadi disinilah postingan ini saya buat supaya otomatis anda tidak harus membuat kembali postingan dan link Next Previous sudah ada pada postingan.

## Fungsi

Fungsinya adalah membuat tombol Berikutnya dan Sebelumnya muncul di setiap postingan yang Anda buat, jika tombol Berikutnya Sebelumnya biasanya secara berurutan sesuai waktu postingan maka tombol inipun sama, namun yang berbeda adalah tombol tersebut hanya mengarahkan ke postingan yang sesuai dengan label.

## Cara Membuat

Pastikan anda sudah menerapkan Font Awesome dan JQuery pada template anda, jika belum copy kode dibawah dan tempelkan sebelum kode atau diatas kode`</head>`  

```
<link crossorigin="anonymous" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" rel="stylesheet"></link>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js/">
```

  
Tempelkan kode berikut di atas kode `</style>`agar tampilan tombol berikutnya tidak berantakan.  

```
.pager-js {
    text-align: right;
    margin: 20px 0;
}
  .pager-js div{display:inline-block}
  .pager-js&gt;div a {
    text-transform: uppercase;
    font-weight: 700;
    font-size: 18px;
    padding: 11px 15px;
    background-color: #090e10;
    color: white;
    border-radius: 30px;
}
  .pager-js&gt;div a:hover {
    box-shadow: 2px 3px 9px 0 rgba(0,0,0,0.2);
}
  .pager-js .pager-js-nolink{text-decoration:line-through;cursor:not-allowed}
  .pager-js-nolink{display:none;}
  #blog-pager, #blog-pager-older-link, #blog-pager-newer-link, .home-link {
      display:none;
  }
```

Setelah itu anda cari `<b:includable id='post' var='post'>`sekarang tambahkan kode berikut di atasnya.  

```
<b:includable id='pager_chapter' var='type'>
    <b:if expr:cond='data:post.labels any (l =&gt; l.name != data:type.name)'><script type='text/javascript'>var selectchap = false;</script></b:if>
    <b:if expr:cond='data:post.labels any (l =&gt; l.name == data:type.name)'><script type='text/javascript'>var selectchap = true;</script></b:if>
    <b:loop index='i' values='data:post.labels' var='label'>
    <b:if cond='data:i == 0'>
        <div class='pager-js' id='pager-js'>
         <div class='_prev' id='prevjs'><a class='pager-js-nolink'><i class='far fa-caret-square-left'/></a></div>
         <div class='_index' id='indexjs'><a class='pager-js-nolink'><i class='far fa-list-alt'/></a></div>
         <div class='_next' id='nextjs'><a class='pager-js-nolink'><i class='far fa-caret-square-right'/></a></div>
        </div>
  <script type='text/javascript'>
  var postPrev = &quot;<i class='fas fa-arrow-alt-circle-left'/>&quot;;
  var postNext = &quot;<i class='fas fa-arrow-alt-circle-right'/>&quot;;
  var postIndex = &quot;<i class='fas fa-list-ul'/>&quot;;
  var postID = <data:post.id/>;
  /*<![CDATA[*/
  if(selectchap==false){var yktocs=function(data){var i=0;for(;i<data.feed.entry.length;i++){var j=0;for(;j<data.feed.entry[i].link.length;j++){if("alternate"==data.feed.entry[i].link[j].rel){var entityUrl=data.feed.entry[i].link[j].href;break}}document.getElementById("indexjs").innerHTML="<a href='"+entityUrl+"' title='Index Novel'>"+postIndex+"</a>"}};var ykpager=function(data){var node={postlist:[]};var i=0;for(;i<data.feed.entry.length;i++){var j=0;for(;j<data.feed.entry[i].link.length;j++){if("alternate"==data.feed.entry[i].link[j].rel){var murl=data.feed.entry[i].link[j].href;break}}var videoId=data.feed.entry[i].id.$t;var CAPTURE_ID=videoId.substr(51,19);node.postlist.push({url:murl,id:CAPTURE_ID})}var v=node.postlist.findIndex((timeline_mode)=>{return timeline_mode.id==postID});var id=v+1;var cbs=node.postlist[id];if(null!=cbs){var g=Object.values(cbs)[0];var lnkDiv=document.getElementById("prevjs");lnkDiv.innerHTML="<a href='"+g+"' title='Chapter Sebelumnya'>"+postPrev+"</a>"}var q=v-1;var val=node.postlist[q];if(null!=val){var k=Object.values(val)[0];lnkDiv=document.getElementById("nextjs");lnkDiv.innerHTML="<a href='"+k+"' title='Chapter Selanjutnya'>"+postNext+"</a>"}}}else{document.write("<style>.pager-js{display:none;}</style>")};
  /*]]>*/</script>
  <script defer='defer' expr:src='&quot;/feeds/posts/summary/-/&quot; + data:label.name + &quot;?alt=json-in-script&amp;callback=ykpager&amp;max-results=999999&quot;' type='text/javascript'/>
  <script defer='defer' expr:src='&quot;/feeds/posts/summary/-/&quot; + data:type.name + &quot;/&quot; + data:label.name + &quot;?orderby=published&amp;alt=json-in-script&amp;callback=yktocs&amp;max-results=1&quot;' type='text/javascript'/>
  </b:if>
  </b:loop>
  </b:includable>
```

  
Selanjutnya anda cari kode `<data:post.body/>`dan pastekan kode berikut dibawahnya. Untuk kata Novel sendiri adalah label, jadi ketika postingan berlabel Novel maka tombol Next dan Previous tidak muncul.

```
<b:include data='{name : &quot;Novel&quot;}' name='pager_chapter'/>
```

  
Tombol Next dan Sebelumnya tersebut tidak bekerja apabila terdapat dua label, dan urutan postingan sesuai waktu postingan. Tombol Next Sebelumnya bukan buatan saya, saya hanya mengcopy dari template MegumiNovel. Silahkan kembangkan sendiri. Semoga postingan [Membuat Tombol Sebelumnya dan Berikutnya Berdasarkan Label Secara Otomatis di Blogger](https://www.nurhidayat.web.id/2019/11/tombol-nextprev-otomatis-blogger.html) bermanfaat bagi Anda yang membaca, jika terdapat kesalahan silahkan komentar di bawah mungkin saya bisa bantu. Untuk melihat demo silahkan kunjungi [fik-exam.blogspot.com](http://fik-exam.blogspot.com)  
  
**Tag:** _cara membuat tombol next prev otomatis berdasarkan label pada blogger, tombol next prev berdasar label otomatis pada blogger_