var Banner = {
  Show() {
    window.dispatchEvent(
      new CustomEvent("bannershow", { detail: { } }),
    );
  },
  Hide() {
    window.dispatchEvent(
      new CustomEvent("bannerhide", { detail: { } }),
    );
  } 
}
export { Banner }