const iOSLink = "https://apps.apple.com/tr/app/tevkifat-kdv-fatura-hesaplama/id6465623991?l=tr";
const AndroidLink = "https://play.google.com/store/apps/details?id=com.mrakar.tevkifat_bedeli";

function getOS() {
  // Cihazın işletim sistemini belirle
  const userAgent = window.navigator.userAgent;
  const platform = userAgent.match(/(iPhone|iPad|iPod)/i);

  return platform ? "iOS" : "Android";
}

function getLink() {
  // Kullanıcının işletim sistemini kontrol et
  const os = getOS();

  // Doğru linki döndür
  return os === "iOS" ? iOSLink : AndroidLink;
}
