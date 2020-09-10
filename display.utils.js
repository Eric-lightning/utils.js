/* display.utils.js
 * @author Eric-lightning
 * zIndexとdisplayタグをベースに表示制御をする
 * @param element_id IDでGETする
 */
function display_element(element_id) {
  const element = document.getElementById(element_id);
  element.style.display = 'block';
  element.style.zindex  = 1024;
}
function hidden_element(element_id) {
  const element = document.getElementById(element_id);
  element.style.display = 'none';
  element.style.zindex  = 0;
}
/*
 * Wrapper
 * ターゲットリストの中で指定したIDのみ表示
 */
function display_only_element(target,pagelist_ids){
  display_element(target);
  for(current_element_num in pagelist_ids){
    if(pagelist_ids[current_element_num] == target) continue
    else hidden_element(pagelist_ids[current_element_num]);
  }
}
