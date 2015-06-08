/**
 * 
 */
function popUp(winURL){
	window.open(winURL, "popup", "width=320, height=480");//window.open method open a new window form the current page
}

window.onload = prepareLinks;//this make sure document.getElementsByTagName("a") get all the elements, because this
//method will only be called when the whole page finish loading. 
function prepareLinks(){
	if(!document.getElementsByTagName) return false; // check if current browser support getElementsByTagName method
	var links=document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		if(links[i].getAttribute("class")=="popup"){
			links[i].onclick=function() {
				popUp(this.getAttribute("href"));
				return false;
			}
		}
	}
}