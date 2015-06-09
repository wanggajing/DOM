

	function showPic(whichpic){
		if(!document.getElementById("placeholder")) return false;
		var source=whichpic.getAttribute("href");
		var placeholder=document.getElementById("placeholder");
		if(placeholder.nodeName!="IMG") return false;
		placeholder.setAttribute("src", source);
		if(document.getElementById("description")){
			if(whichpic.getAttribute("title")){
				var text=whichpic.getAttribute("title");
			} else{
				var text="";
			}
			
			var description=document.getElementById("description");
//			alert(description.nodeValue); // nodeValue return the value of that node, return null here,because it is a element node
//			alert(description.childNodes[0].nodeValue); // text node is a child of <p> element node
//			alert(description.firstChild.nodeValue);
//			alert(description.lastChild.nodeValue);
			if(description.firstChild.nodeType==3)
				description.firstChild.nodeValue=text;
		}
		return true;
	}
	
	function countBodyChildren(){
		var body_element=document.getElementsByTagName("body")[0];
		alert(body_element.childNodes.length);// element.childNodes return a array of children of that element
		alert(body_element.nodeType);/* return 1 for element node
											   2 for attribute node
											   3 for text node */
	}
	/*
	function preparePlaceholder(){
		if(!document.createElement) return false;
		if(!document.createTextNode) return false;
		if(!document.getElementById) return false;
		if(!document.getElementById("imagegallery")) return false;
		var placeholder=document.createElement("img");
		placeholder.setAttribute("class", "placeholder");
		placeholder.setAttribute("id", "placeholder");
		placeholder.setAttribute("src", "../images/placeholder.jpg");
		placeholder.setAttribute("alt", "my image gallery");
		var description=document.createElement("p");
		description.setAttribute("id", "description");
		var txt=document.createTextNode("choose an image");
		description.appendChild(txt);
//		document.getElementsByTagName("body")[0].appendChild(placeholder);
//		document.getElementsByTagName("body")[0].appendChild(description);
		var gallery=document.getElementById("imagegallery");
//		gallery.parentNode.insertBefore(placeholder, gallery);
//		gallery.parentNode.insertBefore(description, gallery);
		insertAfter(placeholder,gallery);
		insertAfter(description,placeholder);
	}
    */
	
	function prepareLinks(){		
		if(!document.getElementsByTagName) return false;
		if(!document.getElementById) return false;
		if(!document.getElementById("imagegallery")) return false;
		var gallery=document.getElementById("imagegallery");
		var links=gallery.getElementsByTagName("a");
		for(var i=0;i<links.length;i++){
			links[i].onclick=function(){
				return showPic(this)? false:true;
			}
		}
	}
	/* what if there are more than one function need to be onload,
	   first solution is use:
							window.onload=function(){
								firstFunction();
								secondFunction();
							} 
	another solution is to introduce addLoadEvent function as below						
	*/

	function addLoadEvent(func){
		var oldOnload=window.onload;
		if(typeof window.onload!='function'){
			window.onload=func;
		}else{
			window.onload=function(){
				oldOnload();
				func();
			}
		}
	}
	/* call addLoadEvent(firstFunction)
	 * 		addLoadEvent(secondFunction)
	 */
	
	/**
	 * insetAfter method, insert an element after another element
	 */
/*
	function insertAfter(newElement,targetElement){
		var parent=targetElement.parentNode;
		if(parent.lastChild==targetElement){
			parent.appendChild(newElement);
		}
		else{
			parent.insertBefore(newElement,targetElement.nextSibling);
		}
	}
    */
	
	addLoadEvent(preparePlaceholder);
	addLoadEvent(prepareLinks);
