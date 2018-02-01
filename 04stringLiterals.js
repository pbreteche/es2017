'use strict';

let titre = 'coucou';

let contenuHtml1 = '<article>\n' +
'<h1>' + titre + '</h1>\n' +
'<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, laboriosam, labore enim necessitatibus dignissimos tempore maxime doloribus accusamus blanditiis fugit reiciendis dolores dolorem quas aut iusto quod earum accusantium nobis!</p>\n' +
'</article>';

console.log(contenuHtml1);

let contenuHtml2 = `<article>
<h1>${titre.toUpperCase()} ${1+2}</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, laboriosam, labore enim necessitatibus dignissimos tempore maxime doloribus accusamus blanditiis fugit reiciendis dolores dolorem quas aut iusto quod earum accusantium nobis!</p>
</article>`;

console.log(contenuHtml2);

const customInterpolation = function(templateFragments, ...arg1) {
    console.log(templateFragments, arg1);
    return templateFragments[0] + arg1.toUpperCase() + templateFragments[1];
}

let contenuHtml3 = customInterpolation`<h1>${titre}</h1>`;
let contenuHtml4 = customInterpolation`<h1>${titre}</h1><p>${paragraph}</p>`;

console.log(contenuHtml3);
