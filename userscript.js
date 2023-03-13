const imgTags = document.getElementsByTagName('img');
const dateNow = new Date();
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

for (let i = 0, len = imgTags.length; i < len; i++) {
  const url = imgTags[i].getAttribute('src');
  const regex = /(\d{10})(?=\w*\.jpg)/;
  const match = url.match(regex);
  var epoch = match ? match[1] : null;
    
  if (epoch) {
    const date = new Date(epoch*1000);
    const parent = imgTags[i].parentNode;
    const div = document.createElement('div');
    const imgWidth = imgTags[i].clientWidth;
    const imgHeight = imgTags[i].clientHeight;
    const imgSize = Math.min(imgWidth, imgHeight); // Get the smallest dimension of the image

    const fontSize = Math.round(imgSize / 10); // Calculate font size based on image size (adjust the division factor as needed)
const maxFontSize = 12; // Set a maximum font size (adjust as needed)
const minFontSize = 8; // Set a minimum font size (adjust as needed)
const differenceInDays = Math.round((date-dateNow) / _MS_PER_DAY);

    div.textContent =  Math.abs(differenceInDays)+ " 日前";
      console.log(div.textContent);
    div.style.position = 'absolute';
    div.style.top = 0;
    div.style.right = 0;
    div.style.backgroundColor = '#000';
    div.style.color = '#fff';
    div.style.padding = '4px';
     div.style.fontSize = `${Math.max(Math.min(fontSize, maxFontSize), minFontSize)}px`; // Set the font element, limited to the maximum value
    parent.style.position = 'relative';
    parent.appendChild(div);
  }
}
