var common = {
  RandomDate(start: number, end: number, startHour: number, endHour: number) {
    var date = new Date(+start + Math.random() * (end - start));
    var hour = (startHour + Math.random() * (endHour - startHour)) | 0;
    date.setHours(hour);
    return date;
  },
  secondFormatter(sec: number) {
    const date = new Date("0000-01-01");
    date.setSeconds(sec); // specify value for SECONDS here
    return date.toISOString().slice(11, 19).substring(3);
  },
  numFormatter(num: number, digits: number) {
    const si = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
      { value: 1e6, symbol: "M" },
      { value: 1e9, symbol: "G" },
      { value: 1e12, symbol: "T" },
      { value: 1e15, symbol: "P" },
      { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
  },
  getDataAsync<T>(url: string): Promise<T> {
    console.log("getDataAsync", url);
    return new Promise<T>((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "json";

      //xhr.setRequestHeader("user-agent", "Mozilla/4.0 MDN Example");
      xhr.setRequestHeader("content-type", "application/json");

      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status >= 200 && xhr.status < 300) {
            resolve(xhr.response as T);
          } else {
            console.log("xhr.statusText", xhr.statusText);
            reject(new Error(xhr.statusText));
          }
        }
      };

      xhr.onerror = (err) => {
        console.log("xhr.onerror", err);
        reject(new Error("Network error"));
      };

      xhr.send();
    });
  },
  getRandomImage(): String {
    const images = [
      "https://images.dog.ceo/breeds/waterdog-spanish/20190208_063211.jpg",
      "https://images.dog.ceo/breeds/terrier-sealyham/n02095889_1544.jpg",
      "https://images.dog.ceo/breeds/cotondetulear/100_2013.jpg",
      "https://images.dog.ceo/breeds/pinscher-miniature/n02107312_1207.jpg",
      "https://images.dog.ceo/breeds/pointer-german/n02100236_3504.jpg",
      "https://images.dog.ceo/breeds/kuvasz/n02104029_2323.jpg",
      // 更多图片URL
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  },
  dateFormatter(date: Date, fmt: string): string {
    if (typeof fmt !== "undefined") {
      var arrFmt = ["en", "zh-tw"];
      if (arrFmt.includes(fmt) == false) {
        fmt = "en";
      }
    }
    function pad(num: number): string {
      return (num < 10 ? "0" : "") + num;
    }
    var y = date.getFullYear();
    var rm = date.getMonth() + 1;
    var m = pad(rm);
    var rd = date.getDate();
    var d = pad(rd);
    var rh = date.getHours();
    var hh = pad(rh);
    var rm = date.getMinutes();
    var mm = pad(rm);

    if (fmt == "zh-tw") {
      y = y - 1911;
      hh = (rh > 12 ? "上午 " : "下午 ") + hh;
      return `民國${y}年${m}月${d}日 ${hh}點${mm}分`;
    }

    return `${y}-${m}-${d} ${hh}:${mm}`;
  },
};
export { common };
