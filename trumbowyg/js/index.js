$( document ).ready(
  $('.editor').trumbowyg({
    svgPath: '/html_avanzado/trumbowyg/icons/icons.svg'
    lang: 'es', // Idioma (es.min.js incluido)
    btns: [
            ['bold', 'italic', 'underline', 'strikethrough'],
            ['superscript', 'subscript'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
            ['link', 'insertImage'],
            ['horizontalRule', 'removeformat'],
            ['viewHTML'],
            ['fullscreen']
          ],
  });
);
