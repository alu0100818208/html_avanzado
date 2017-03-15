$( document ).ready(
  $('.editor').trumbowyg({
    svgPath: '/alu0100818208/trumbowyg/icons/icons.svg'
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
