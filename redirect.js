const date = new Date();
const yyyy = date.getFullYear();
const mm = (date.getMonth() + 1).toString().padStart(2, '0');
const dd = date.getDate();

const formattedDate = `${yyyy}/${mm}の一人ツイッター`;

const url = `https://scrapbox.io/ork/${formattedDate}`;
window.location.href = url;
