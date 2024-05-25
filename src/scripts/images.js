export default function ImageUtil(url, altText, numberOfImages) {
    let images = []
    for(var i = 1; i <= numberOfImages; i++) {
        images.push({
            src: url + "-" + i + ".jpg", 
            alt: altText + " " + numberOfImages 
        })
    }
    return images
}