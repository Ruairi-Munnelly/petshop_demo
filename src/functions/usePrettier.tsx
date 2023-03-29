export default function JsonPrettier(json:string) {
  if (!json) {return;}
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return (json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number text-orange-600';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key text-black-600';
      } else {
        cls = 'string text-green-600';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean text-blue-600';
    } else if (/null/.test(match)) {
      cls = 'null text-pink-600';
    }
    return `<span class="` + cls + `">` + match + `</span>`;
  }));
}