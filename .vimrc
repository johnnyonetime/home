 set t_Co=256
 set encoding=utf-8
 set nocompatible               " be iMproved
 filetype off                   " required!

 syntax on

 " VIM Powerline
 set rtp+=~/.vim/bundle/powerline/powerline/bindings/vim/

 " Always show statusline
 set laststatus=2

 set rtp+=~/.vim/bundle/vundle/
 call vundle#rc()

 " let Vundle manage Vundle
 " required! 
 Bundle 'gmarik/vundle'

 " My Bundles here:
 "
 " original repos on github
 Bundle 'tpope/vim-fugitive'
 Bundle 'Lokaltog/vim-easymotion'
 Bundle 'rstacruz/sparkup', {'rtp': 'vim/'}
 Bundle 'scrooloose/vim-easymotion'
 Bundle 'tpope/vim-rails'
 Bundle 'scrooloose/nerdtree'
 Bundle 'kien/ctrlp.vim'
 Bundle 'scrooloose/syntastic'
 Bundle 'Lokaltog/powerline'
 Bundle 'Lokaltog/powerline-fonts'
 " vim-scripts repos
 Bundle 'L9'
 Bundle 'FuzzyFinder'
 Bundle 'snipMate'
 " non github repos
 Bundle 'git://git.wincent.com/command-t.git'
 " git repos on your local machine (ie. when working on your own plugin)
 " Bundle 'file:///Users/gmarik/path/to/plugin'
 " ...

 filetype plugin indent on     " required!
 "
 " Brief help
 " :BundleList          - list configured bundles
 " :BundleInstall(!)    - install(update) bundles
 " :BundleSearch(!) foo - search(or refresh cache first) for foo
 " :BundleClean(!)      - confirm(or auto-approve) removal of unused bundles
 "
 " see :h vundle for more details or wiki for FAQ
 " NOTE: comments after Bundle command are not allowed..

 " Map NERDTree to F1
 map <F1> :NERDTreeToggle<CR>
 " How can I close vim if the only window left open is a NERDTree?
 autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTreeType") && b:NERDTreeType == "primary") | q | endif
