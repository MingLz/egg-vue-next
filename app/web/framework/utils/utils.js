export function removeHTML(input) {
  return input;
}

export function formatDate(input) {
  return input;
}

export function getUrlParameter(url) {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}