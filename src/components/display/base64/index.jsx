// import React from "react";

// export  function convertImage(props) {
//     const {image} = props;
//     var img = new Image();
//     img.crossOrigin = 'Anonymous';

//     img.onload = function () {
//     var canvas = document.createElement('canvas'),
//     ctx = canvas.getContext('2d');

//     canvas.height = img.naturalHeight;
//     canvas.width = img.naturalWidth;
//     ctx.drawImage(img, 0, 0);

//     var uri = canvas.toDataURL(image),
//     b64 = uri.replace(/^data:image.+;base64,/, '');
//     return b64;
// };
// }