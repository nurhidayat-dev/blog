---
title: Pengaturan Template Blogger Templar
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:19:26.659Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/pengaturan-template-blogger-templar
  type: atom
  url: http://localhost:3000/blog/pengaturan-template-blogger-templar
---
Templar Themes adalah template blogger buatan saya sendiri yang dipakai di blog ini, setidaknya saat artikel ini dibuat template tersebut masih dipakai.

## Cara Menerapkan Template

Backup dulu template yang ada, untuk jaga-jaga.  Copy semua kode yang didapatkan dalam template xml lalu buka blogger > tema > edit html, jika tampilan blogger versi terbaru terdapat tiga titik silahan klik dan edit html. Pilih semua kode dengan CTRL+A, lalu paste dengan CTRL+V

## Pengaturan Dasar

### **Brand atau Logo**

Untuk logo bisa menggunakan format apapun, saya sarankan ukuran tidak lebih dari 64px untuk format seperti png dan jpg. Lebih bagus menggunakan SVG, tapi karena svg tidak bisa diupload langsung dari tata letak maka bisa sobat upload fotonya di Github dan raw url, lalu pasang logo dari url.

### **Header/Judul Halaman Index**

Judul atau header dengan tag h1 di halaman Index bisa menyesuaikan tergantung keadaan, jika dalam pencarian maka query dari pencarian akan ditampilkan sebagai query pencarian begitupun dengan halaman label. Judul tersebut hanya akan tampil di halaman Index yang berarti akan tersembunyi di halaman item seperti postingan dan halaman statis. Header Judul sama dengan settingan brand atau logo, artinya jika salah satu di edit maka keduanya akan memiliki value yang sama. 

  sudah tidak tersedia di versi 1.1

### **Widget**

Untuk Widget hanya beberapa yang sudah saya kustomisasi dengan bootstrap, yang lainya akan menyusul. Untuk daftar yang sudah saya kustomisasi adalah:

 - HTML

 - Profile

 - Follow by Email

 - Popular Post

 - Contact Form

Bisa ditambahkan langsung dari tata letak dibagian sidebar, disana terdapat dua bagian yaitu bagian sidebar top dan sidebar sticky. Untuk bagian sidebar sticky adalah bagian yang melayang ketika discroll.

### **Navigasi Navbar**

Untuk yang satu ini harus di edit melalui mode HTML dengan cara buka blogger > tema > edit html, jika tampilan blogger versi terbaru terdapat tiga titik silahan klik dan edit html. Cari kode berikut dengan CTRL+F

```
<!--Header Navigation-->
```

Dibawah code tersebut terdapat kode seperti berikut: 

```
<li class='nav-item'>  <a class='nav-link' href='/search/label/Business' id='Business'>Business</a></li><li class='nav-item'>  <a class='nav-link' href='/search/label/Blog' id='Blog'>Blog</a></li><li class='nav-item'>  <a class='nav-link' href='/search/label/Info' id='Info'>Info</a></li>
```

  
Silahkan edit kode tersebut, jika untuk halaman label maka tambahkan atribut id pada link dengan value yang sama dengan nama label contoh.  

```
<li class='nav-item'>  <a class='nav-link' href='/search/label/Business' id='Business'>Business</a></li>
```

Fungsi dari id tersebut adalah menambahkan class active ketika dihalaman label, jika tidak diisi juga tidak masalah. Untuk link yang menuju halaman statis bisa diubah id nya sesuai keinginan asalkan jangan sama idnya, dan pada halaman tujuan dari link tersebut tambahkan kode berikut

```
<script>document.getElementById("IdCustom").classList.add('active');</script>
```

Ganti IdCustom dengan id yang ada pada link navbar.

Untuk dropdown bisa dengan kode berikut

```
<li class='nav-item dropdown'>  <a aria-expanded='false' class='nav-link dropdown-toggle' data-toggle='dropdown' href='#' id='navbarDropdown' role='button'>    Features  </a>  <ul aria-labelledby='navbarDropdown' class='dropdown-menu animate slideIn'>    <li>      <a class='dropdown-item' href='/error404' id='CSS'>Error404</a>    </li>    <li>      <a class='dropdown-item' href='#' id='HTML'>Other Link</a>    </li>    <li>      <a class='dropdown-item' href='#' id='HTML'>Other Again</a>    </li>    <li>      <hr class='dropdown-divider' />    </li>    <li>      <a class='dropdown-item' href='#'>Something else here</a>    </li>    <li></li>  </ul></li>
```

Atau bisa mengikuti dokumentasi bootstrap 5 di [v5.getbootstrap.com](http://v5.getbootstrap.com)

### **Link Navigasi Footer**

Untuk navigasi footer bisa di edit via tata letak dan terletak paling bawah, disitu terdapat link list silahkan edit darisana.

### **Contact Form**

Jangan menyembunyikan widger contact form yang ada pada tata letak, karena itu adalah fungsi dari halaman contact form. Untuk membuat halaman contact form silahkan buat halaman baru (bukan postingan) dan pastekan kode berikut dalam mode html.

```
<style>
  .contact-form-button,.contact-form-button-submit {
    color: #fff!important;
    background-color: #0d6efd!important;
    border-color: #0d6efd;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #4a4a4a;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    background-color: transparent;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;
}
    
</style>

<div class="contact-form-widget page-contact-form">
<form name="contact-form">
<div class="mb-3">
  <label for="ContactForm1_contact-form-name" class="form-label">Name</label>
  <input class="contact-form-name form-control" id="ContactForm1_contact-form-name" name="name" type="text" value="" />
</div>
<div class="mb-3">
  <label for="ContactForm1_contact-form-email" class="form-label">Email address: <small class="text-danger">!important</small></label>
  <input class="contact-form-email form-control" id="ContactForm1_contact-form-email" name="email" placeholder="name@example.com" type="email" value="" />
</div>
<div class="mb-3">
  <label for="ContactForm1_contact-form-email-message" class="form-label">Message: <small class="text-danger">!important</small></label>
  <textarea class="contact-form-email-message form-control" id="ContactForm1_contact-form-email-message" name="email-message" rows="3"></textarea>
</div>
  <div class="mb-3">
  <input class="contact-form-button contact-form-button-submit" id="ContactForm1_contact-form-submit" type="button" value="Submit" />
  </div>
<div class="contact-form-error-message" id="ContactForm1_contact-form-error-message">
</div>
<div class="contact-form-success-message" id="ContactForm1_contact-form-success-message">
</div>
</form>
</div>
```

Hanya tersedia di versi 1.1

## Pengaturan Lanjutan

### **Postingan**

Untuk postingan dan ingin meghapus thumbnail dari bagian text postingan maka pastikan terdapat kode `<div class="separator"` yang membungkus gambar thumbnail, namun jika tidak ingin gambar thumbnail terhapus dari postingan maka tambahkan `<div class="separator"></div>` di bagian paling atas postingan. Jangan lupa tambahkan kode berikut pada tag img pertama yang akan dijadikan thumbnail untuk mencegah gambar agar tidak terender sebelum dihapus oleh javascript.

```
srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
```

### **Adsense**

Untuk adsense terdapat dua di halaman utama jika postingan yang tampil lebih dari 9 maka adsense yang akan tampil ada 3, pada halaman postingan harus di setting terlebih dahulu dari html caranya cari kode text "Adsense test" dan pasang kode adsense yang sudah dirubah dengan [html parser](https://www.nurhidayat.web.id/p/html-parser.html). Dan harus dipanggil dengan kode berikut saat membuat postingan

```
<p><!-- ads --></p>
```

  
  

Note: fitur ditengah postingan sudah dihapus, dan diganti dengan adsense dibawah postingan tepat setelah related article untuk v 1.1

### Table of Contents

Untuk table of contents sudah aktif secara default, jika tidak ingin menerapkan table of contents pada postingan cukup menggunakan script berikut di akhir postingan.

```
<script>var toc = false</script>
```

  
Table Of Contents tersebut mengambil dari tag heading h2,h3 dan h4 selain itu akan diabaikan. Untuk id dari masing-masing heading bisa dirubah, saya rekomendasikan untuk merubahnya supaya google mengcrawl dan terdeteksi id custom tersebut.  

### Images

Karena sudah mendukung lazysizes tinggal ubah gambar dengan script berikut.

```
<img src="image3.jpg" srcset="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
	data-srcset="image3.jpg 600w,
		image1.jpg 220w,
	    image2.jpg 300w,
	    image4.jpg 900w"
	data-sizes="auto"
	class="lazyload" />
```

Lebih lengkap di halaman berikut [https://github.com/aFarkas/lazysizes](https://github.com/aFarkas/lazysizes)

### **Embeds Youtube**

Untuk menampilkan video youtube secara responsive bisa menggunakan kode berikut

```
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
```

Lihat untuk lebih lengkap di [https://v5.getbootstrap.com/docs/5.0/helpers/embed/](https://v5.getbootstrap.com/docs/5.0/helpers/embed/)

### **Fitur dari Bootstrap**

Fitur ini sudah ada bawaan bootstrap dan tidak saya hapus, berikut fiturnya.

-   Button
    
-   Badge
    
-   Collapse
    
-   Dropdown
    
-   Utilities
    
-   Helpers
    

Selain dari list di atas mungkin tidak berjalan, bisa baca dokumentasi fullnya di [https://v5.getbootstrap.com/docs/5.0/getting-started/introduction/](https://v5.getbootstrap.com/docs/5.0/getting-started/introduction/)

## Akhir Kata

Fitur lainya akan menyusul, silahkan request fitur dan mungkin nanti bisa ditambahkan.