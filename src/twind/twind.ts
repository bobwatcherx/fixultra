import { cssomSheet, setup } from "twind";
import { virtualSheet } from "twind/sheets";



export const sheet = typeof Deno !== "undefined" ? virtualSheet() : cssomSheet({
  target: (document.getElementById("__twind") as HTMLStyleElement).sheet ||
    undefined,
});


const theme = {};

setup({ sheet, theme });
