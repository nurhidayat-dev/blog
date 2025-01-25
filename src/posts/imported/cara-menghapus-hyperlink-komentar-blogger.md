---
title: Cara Menghapus Hyperlink Komentar Blogger
authors:
  - name: Taufik Nurhidayat
date: 2024-01-06T03:20:18.187Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/cara-menghapus-hyperlink-komentar-blogger
  type: atom
  url: http://localhost:3000/blog/cara-menghapus-hyperlink-komentar-blogger
---
Halo sobat blogger, kali ini kita akan membahas mengenai hyperlink yang sering muncul dikomentar blogger. Hyperlink tersebut biasanya adalah link spam yang sengaja dikirim supaya orang mengklik link tersebut. Masih tidak apa-apa jika linknya berupa hal bermanfaat tapi jika linknya malah bukan sesuatu yang baik maka kita perlu mencegah hal tersebut dengan menghapus hyperlink dalam komentar blogger kita.

Biasanya untuk mengubah link sobat memerlukan javascript library JQuery namun bagaimana cara untuk menghapus hyperlink dalam komentar blogger tersebut tanpa JQuery?

Kamu harus masuk ke akun blogger dan mengedit tema dalam mode html, yang bisa diakses dari Tema > tiga titik > Edit HTML. Sekarang kamu pasang kode dibawah tepat diatas kode `</body>`.

```
<b:if cond='data:view.isSingleItem'>
<script type='text/javascript'>
document.querySelectorAll(".comment-content a").forEach(function(el){el.removeAttribute("href");el.setAttribute("class","text-danger");el.innerHTML = "Disabled"});
</script>
</b:if>
```

Untuk bagian text-danger adalah class dari text tersebut dan Disabled adalah text yang menggantikan link tersebut, ganti class tersebut dengan class yang kamu inginkan lalu simpan template dan lihat hasilnya.

Hyperlink yang terdapat dalam komentar akan terhapus dan diganti dengan kata Disabled.

Kode javascript untuk menghapus hyperlink di komentar blogger ini adalah kode sederhana dan tidak memerlukan JQuery, sangat disarankan jika anda tidak memerlukan library JQuery, sobat tahu sendiri jika menggunakan library JQuery membuat loading blog agak berat.