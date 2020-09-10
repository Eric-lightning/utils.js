/* csv2table
 * @author Eric-lightning
 * @param raw csv_raw_text splited ',' and '\n'
 * @param header useheader with '<th>'tag.
 * usage:
 *  const csv_text = "NAME,nickName\nKite,kite003\n";
 *  const generated_html = csv2table(csv_text,true);
 */

function csv2table(raw,header){
  //////////////////////////////////////////
  let data   = [];
  const lines  = raw.split('\n');
  for(let y = 0; y < lines.length; y++){
    if(lines[y]=='') continue;
    console.log('detect line>'+lines[y]);
    data[y] = lines[y].split(',');
  }
  ///////////////////////////////A
  let html = '<table>';
  let tprefix = '<td>';
  let tsuffix = '</td>';
  if(header){
    tprefix = '<th>';
    tsuffix = '</th>';
  }
  for(let y = 0; y < data.length; y++){
    html += '<tr>';
    for(let x = 0; x < data[y].length; x++){
      html += tprefix;
      if(data[y][x] != undefined) html += data[y][x];
      html += tsuffix;
    }
    html += '</tr>';
    if(!header) continue;
    tprefix = '<td>';
    tsuffix = '</td>';
    header  = false;
  }
  html += '</table>';
  console.log(html);
  return html;
}
