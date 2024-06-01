import type { RouterLinkProps } from "vue-router";

var MouseImageEvent = {
  setImageIsPointer(element: HTMLElement) {
    element.addEventListener("mouseover", (event: Event) => {
      window.dispatchEvent(
        new CustomEvent("cursorChange", { detail: { type: "pointer" } }),
      );
    });
    element.addEventListener("mouseout", (event: Event) => {
      window.dispatchEvent(
        new CustomEvent("cursorChange", { detail: { type: "default" } }),
      );
    });
  },
  bindRouterLink(el: object | null) {
    if (el) {
      var refdata = { ...el } as RouterLinkProps;
      const rs = document.querySelectorAll(`a[href="${refdata.to}"]`);
      if (rs.length > 0) {
        MouseImageEvent.setImageIsPointer(rs[0] as HTMLElement);
      }
    }
  },
  bindCustomElement(el: object | null) {
    if (el) {
      var refdata = el as HTMLElement;
      const rs = document.getElementById(refdata.id);
      if (rs) {
        MouseImageEvent.setImageIsPointer(rs as HTMLElement);
      }
    }
  },
  bindElementById(id: string) {
    const el = document.getElementById(id) as HTMLElement;
    console.log("bindElementById", el);
    MouseImageEvent.setImageIsPointer(el);
  },
};
export { MouseImageEvent };
