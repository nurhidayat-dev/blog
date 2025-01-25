---
title: Setup (konfigurasi) Neovim Paling Mudah
authors:
  - name: Taufik Nurhidayat
date: 2024-03-18T22:31:26.777Z
metadata:
  uuid: >-
    11ty/import::atom::http://localhost:3000/blog/setup-konfigurasi-neovim-paling-mudah
  type: atom
  url: http://localhost:3000/blog/setup-konfigurasi-neovim-paling-mudah
---
Neovim merupakan salah satu dari beberapa text editor diluar sana, khususnya yang sering digunakan untuk pemrograman / koding. Namun, perlu beberapa konfigurasi terlebih dahulu untuk menjadikan neovim sebagai code editor yang _powerfull_.

## Requirements

Sebelum kita melakukan konfigurasi pada neovim, ada beberapa _requirements_ yang diperlukan agar konfigurasi kita berjalan dengan lancar.

1.  [**Neovim**](https://github.com/neovim/neovim/blob/master/INSTALL.md)  
    Tentunya kita memerlukan neovim itu sendiri, kamu bisa menginstall-nya berdasarkan sistem operasi yang kamu gunakan. Pastikan kamu menginstall neovim versi terbaru, minimal 0.9.5.
    
2.  **Terminal dengan Rendering GPU**  
    Terminal dengan render gpu ini opsional namun disarankan karena bisa meingkatkan performa neovim, contohnya adalah terminal [Kitty](https://sw.kovidgoyal.net/kitty/) dan [Alacritty](https://alacritty.org/).
    
3.  [**Nerd Font**](https://www.nerdfonts.com/)  
    Untuk memaksimalkan tampilan neovim kita, pasang Nerd Fonts dan atur terminal kalian dengan font yang sudah patch nerd fonts tersebut.
    
4.  **Clang/GCC**  
    Clang/GCC adalah compiler untuk bahasa C, kalian direkomendasikan untuk memasangnya.
    
5.  [**Git**](https://git-scm.com/)  
    Kita memerlukan git untuk melakukan clone pada repository konfig yang tersedia.
    
6.  NPM  
    NPM ini sangat diperlukan saat kita akan memasang syntax highlighter dan lsp, sehingga sangat disarankan untuk memasangnya.
    

Selain syarat-syarat tersebut, saya sangat merekomendasikan kalian untuk memasang beberapa persyaratan lain seperti:

-   tree-sitter
    
-   python, pip, pynvim
    
-   xsel (clipboard tools untuk linux)
    

## Langkah-langkah Konfigurasi Neovim

### 1\. Backup File Konfigurasi Lama

Jika kamu telah melakukan konfigurasi pada neovim, sebaiknya bisa kamu lakukan _backup_ terlebih dahulu. Jika pada linux/mac, bisa menggunakan perintah berikut:

```
mv ~/.config/nvim{,.bak}
```

Untuk pengguna windows, maka gunakan perintah berikut:

```
Move-Item $env:LOCALAPPDATA\nvim $env:LOCALAPPDATA\nvim.bak
```

### 2\. Install LazyVim

Ya, untuk konfigurasi neovim yang mudah maka kita akan menggunakan yang telah tersedia. Dan pada tutorial kali ini, kita menggunakan [LazyVim](https://www.lazyvim.org/). Gunakan perintah berikut untuk melakukan cloning file konfigurasi lazyvim ke komputer kamu:

```
git clone https://github.com/LazyVim/starter ~/.config/nvim
```

atau jika pengguna windows:

```
git clone https://github.com/LazyVim/starter $env:LOCALAPPDATA\nvim
```

Hapus directory git pada folder konfigurasi neovim tadi, dengan perintah berikut:

```
# linux/macos
rm -rf ~/.config/nvim/.git

# windows
Remove-Item $env:LOCALAPPDATA\nvim\.git -Recurse -Force
```

### 3\. Jalankan Neovim

Sekarang, kita harus menjalankan neovim dengan perintah `nvim` pada terminal yang kalian gunakan. Tunggu proses installasi selesai, jika terjadi error pada proses tersebut kamu bisa keluar terlebih dahulu dari neovim dengan command `:qa` dan buka kembali neovim.

Selain itu, kamu juga bisa melakukan cek jika masih terjadi error dengan perintah `:LazyHealth`, yang tentunya dilakukan pada neovim.

### 4\. Konfigurasi LSP

Untuk menjadikan neovim _powerfull_, maka kita harus memasang LSP (_Language Server Protocol)_. Dengan begitu, text editor kita mampu mendiagnosis kesalahan, automatic completion, navigasi ke definisi dan hal-hal lainnya tergantung lsp itu sendiri.

Kamu juga perlu memperhatikan, lsp untuk bahasa apa yang akan kamu gunakan. Sebagai contoh, jika saya menggunakan bahasa pemrograman typescript dan rust, maka saya akan menginstall `typescript-language-server` dan `rust-analyzer`. Selain itu, terdapat dua cara untuk melakukan installasi lsp pada lazyvim, yaitu via _command_ dan konfigurasi file dari plugin **Mason**.

#### Install LSP Via Command

Cara ini relatif lebih mudah, akan tetapi ketika kamu menggunakan konfigurasi ini pada komputer lain, maka harus mengulangi _command_ ini. Untuk melakukannya, gunakan _command_ `:MasonInstall <lsp-name>`, berikut contohnya:

```
:MasonInstall typescript-language-server rust-analyzer
```

#### Install LSP Via Konfigurasi File

Meskipun menggunakan konfigurasi file lumayan ribet, tetapi memiliki keuntungan seperti ketika kita menggunakan konfigurasi di komputer lain, kita cukup menggunakan konfigurasi ini. Caranya adalah buka folder konfigurasi neovim di terminal dengan perintah:

```
cd ~/.config/nvim
```

Jika kamu pengguna **windows** bisa menggunakan perintahnya sendiri, seingat saya bisa menggunakan perintah berikut.

```
dir $env:LOCALAPPDATA\nvim
```

lalu buat file baru pada folder `./lua/plugins` dengan nama file `mason.lua` atau bisa langsung menggunakan neovim dengan command berikut:

```
nvim lua/plugins/mason.lua
```

Lalu paste kode berikut pada file tadi:

```
return {
  {
    "williamboman/mason.nvim",
    opts = {
      ensure_installed = {
        "stylua",
        "json-lsp",
        "shellcheck",
        "shfmt",
        "flake8",
        "rust-analyzer",
        "typescript-language-server",
        "tailwindcss-language-server",
        "prettier",
        "prettierd",
        "svelte-language-server",
      },
    },
  },
}
```

Kamu juga bisa mengubah konfigurasi tersebut, seperti menambahkan lsp lain atau menghapus lsp yang tidak diperlukan. Silahkan simpan file tersebut dengan command `:w`.

_Restart_ neovim dengan perintah `:qa`, supaya file konfigurasi tersebut beralan.

### 5\. Konfigurasi Syntax Highlighter

Untuk memberikan highlight yang baik pada kode yang ditulis, maka kita harus memasang plugin tree-sitter. Sama seperti Mason, plugin ini juga bisa kita gunakan lewat dua cara yaitu command dan config file.

#### Install Highlight Via Command

```
:TSInstall typescript tsx rust
```

#### Install Highlight Via File Konfigurasi

Buat file baru di folder `lua/plugins/treesitter.lua`, lalu bisa paste kan kode berikut.

```
return {
  "nvim-treesitter/nvim-treesitter",
  opts = {
    ensure_installed = {
      "bash",
      "html",
      "css",
      "javascript",
      "json",
      "lua",
      "markdown",
      "markdown_inline",
      "python",
      "query",
      "regex",
      "tsx",
      "typescript",
      "vim",
      "yaml",
      "svelte",
      "astro",
    },
  },
}
```

Kamu juga bisa mengganti atau menambahkan bahasa pemrograman apapun pada file konfigurasi tersebut. Jangan lupa untuk menyimpannya dan restart kembali neovim, supaya konfigurasi file ini berjalan.

## Akhir Kata

Meskipun sedikit ribet, namun ini adalah cara yang paling mudah yang saya ketahui. Selain itu, agar dapat memaksimalkan penggunaan konfigurasi lazyvim, disarankan untuk mengetahui shortcut-shortcut atau keymaps yang tersedia di halaman [dokumentasi lazyvim](https://www.lazyvim.org/keymaps) sendiri.

Kalian juga bisa menemukan konfigurasi neovim saya pada halaman github [https://github.com/fiik346/nvim-config](https://github.com/fiik346/nvim-config), tentunya bisa kalian clone dan gunakan secara bebas.