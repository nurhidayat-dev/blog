---
title: Cara Membuat Halaman Error 404 Keren di Blogger
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T04:36:22.845Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-membuat-halaman-error-404-keren-di-blogger
  type: atom
  url: http://localhost:3000/blog/cara-membuat-halaman-error-404-keren-di-blogger
---
Kode halaman error ini saya dapatkan dari [igniel.com](http://igniel.com) lalu saya padukan dengan background awan, yang saya dapat entah darimana wkwk.

Untuk membuat halaman error 404 keren ini, kamu bisa membuka tab tema pada blogger dan edit html lalu tempel kode dibawah sebelum kode\</head>

```
<b:if cond='data:view.isError'><style>
/*Error Page
===============================*/
.cloud{width:350px;height:120px;background:#fff;background:linear-gradient(top,#fff 100%);background:-webkit-linear-gradient(top,#fff 100%);background:-moz-linear-gradient(top,#fff 100%);background:-ms-linear-gradient(top,#fff 100%);background:-o-linear-gradient(top,#fff 100%);border-radius:100px;-webkit-border-radius:100px;-moz-border-radius:100px;position:absolute;margin:120px auto 20px;z-index:-1;transition:ease 1s}
.cloud:after,.cloud:before{content:'';position:absolute;background:#fff;z-index:-1}
.cloud:after{width:100px;height:100px;top:-50px;left:50px;border-radius:100px;-webkit-border-radius:100px;-moz-border-radius:100px}
.cloud:before{width:180px;height:180px;top:-90px;right:50px;border-radius:200px;-webkit-border-radius:200px;-moz-border-radius:200px}
.x1{top:-50px;left:100px;-webkit-transform:scale(.3);-moz-transform:scale(.3);transform:scale(.3);opacity:.9;-webkit-animation:moveclouds 15s linear infinite;-moz-animation:moveclouds 15s linear infinite;-o-animation:moveclouds 15s linear infinite}
.x1_5{top:-80px;left:250px;-webkit-transform:scale(.3);-moz-transform:scale(.3);transform:scale(.3);-webkit-animation:moveclouds 17s linear infinite;-moz-animation:moveclouds 17s linear infinite;-o-animation:moveclouds 17s linear infinite}
.x2{left:250px;top:30px;-webkit-transform:scale(.6);-moz-transform:scale(.6);transform:scale(.6);opacity:.6;-webkit-animation:moveclouds 25s linear infinite;-moz-animation:moveclouds 25s linear infinite;-o-animation:moveclouds 25s linear infinite}
.x3{left:250px;bottom:-70px;-webkit-transform:scale(.6);-moz-transform:scale(.6);transform:scale(.6);opacity:.8;-webkit-animation:moveclouds 25s linear infinite;-moz-animation:moveclouds 25s linear infinite;-o-animation:moveclouds 25s linear infinite}
.x4{left:470px;botttom:20px;-webkit-transform:scale(.75);-moz-transform:scale(.75);transform:scale(.75);opacity:.75;-webkit-animation:moveclouds 18s linear infinite;-moz-animation:moveclouds 18s linear infinite;-o-animation:moveclouds 18s linear infinite}
.x5{left:200px;top:300px;-webkit-transform:scale(.5);-moz-transform:scale(.5);transform:scale(.5);opacity:.8;-webkit-animation:moveclouds 20s linear infinite;-moz-animation:moveclouds 20s linear infinite;-o-animation:moveclouds 20s linear infinite}
@-webkit-keyframes moveclouds{0%{margin-left:1000px}100%{margin-left:-1000px}}
@-moz-keyframes moveclouds{0%{margin-left:1000px}100%{margin-left:-1000px}}
@-o-keyframes moveclouds{0%{margin-left:1000px}100%{margin-left:-1000px}}

  @import url('https://fonts.googleapis.com/css?family=Ruda:400,700');
  #header, #outer-wrapper, #post-wrapper, #sidebar-wrapper, #content-wrapper, #footer-wrapper, #wrapper, .ignielToTop {display:none}
  body,html {overflow:hidden; margin:0; padding:0; width:100%; min-height:100vh}
  body {background:#fff; color:#1d2129}
  #igniel404 {background:#eceeee; text-align:center; margin:auto; font-weight:700; font-size:45px; font-family:'Ruda',sans-serif; position:fixed; width:100%; height:100%; line-height:1.25em; z-index:9999;}
  #igniel404 #error-text {position:relative; font-size:40px; color:#666; top:50%; right:50%; transform:translate(50%,-50%);}
  #igniel404 #error-text a {color:#888; text-decoration:none}
  #igniel404 #error-text p {margin:0!important; letter-spacing:.5px;}
  #igniel404 #error-text span {
    color: rgba(0,0,0,.9);
    font-size: 100px;
}
  #igniel404 #error-text a.back {
    background: #212529;
    color: #fff;
    padding: 10px 20px;
    font-size: 20px;
    -webkit-transform: scale(1);
    -moz-transform: scale(1);
    transform: scale(1);
    transition: all 0.5s ease-out;
}
#igniel404 #error-text a.back:hover {
    background: #424242;
    color: #fff;
}
  #igniel404 #error-text a.back:active {-webkit-transform:scale(0.9);-moz-transform:scale(0.9);transform:scale(0.9);background:#333;color:#fff;border:double #eceeee;}
  #igniel404 #error-text #copyright {font-size:16px}
  #igniel404 #error-text #copyright a {
    color: #000000;
}

  @media only screen and (max-width:640px){
    #igniel404 #error-text {font-size:20px;}
    #igniel404 #error-text span {font-size:60px;}
    #igniel404 #error-text a.back {padding:5px 10px;font-size:15px;}
  }
</style></b:if>
```

Dan tempel kode dibawah setelah kode \<body>  

```
<b:if cond='data:view.isError'>
  <div id='igniel404'>
  <div id='clouds'>
            <div class='cloud x1'/>
            <div class='cloud x1_5'/>
            <div class='cloud x2'/>
            <div class='cloud x3'/>
            <div class='cloud x4'/>
            <div class='cloud x5'/>
  </div>
    <div id='error-text'>
      <span>404</span>
      <p>HALAMAN TIDAK DITEMUKAN!</p>
      <p><a class='back' href='/' expr:title='data:blog.title'>Kembali Ke Halaman Awal</a></p>
      <div id='copyright'>
        <a href='/' expr:title='data:blog.title'><data:blog.title/></a> © 2017 - <script>document.write(new Date().getFullYear())</script>. All Rights Reserved
        </div>
    </div>
  </div>
</b:if>
```

  
Lalu simpan tema, untuk demo bisa kamu lihat di[https://](https://fik-exam.blogspot.com/p/error.html)[fik-exam.blogspot.com/p/error.html  
](http://fik-exam.blogspot.com/p/error.html￼)

![Cara Membuat Halaman Error 404 Keren di Blogger](assets/ezgif.com-optimize-gGPXZ9SRIvNe.gif)