/*
 * filename.utils.js
 * @author Eric-lightning
 * UNIXライクなファイルパス定義を扱う
 */
/* basename の出力
 *  @param fullpath    dirname含むpath
 *  @param include_ext basenameに拡張子を含むか
 * */
function basename(fullpath,include_ext) {
  const res = new String(fullpath).substring(str.lastIndexOf('/') + 1);
  if(!include_ext && res.lastIndexOf(".") != -1) res = res.substring(0, res.lastIndexOf("."));
  return res;
}
/* 拡張子の抽出
 * @param filename ファイル名
 */
function getExt(filename){
  var pos = filename.lastIndexOf('.');
  if (pos === -1) return '';
  return filename.slice(pos + 1);
}
