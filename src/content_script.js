// Code copied from the glorious "cloud-to-butt" extension: https://github.com/panicsteve/cloud-to-butt
// and a contribution someone made

walk(document.body);

if (window.MutationObserver) {
	var observer = new MutationObserver(function (mutations) {
		Array.prototype.forEach.call(mutations, function (m) {
			if (m.type === 'childList') {
				walk(m.target);
			} else if (m.target.nodeType === 3) {
				handleText(m.target);
			}
		});
	});

	observer.observe(document.body, {
		childList: true,
		attributes: false,
		characterData: true,
		subtree: true
	});
}

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;
	
	var tagName = node.tagName ? node.tagName.toLowerCase() : "";
	if (tagName == 'input' || tagName == 'textarea') {
		return;
	}
	if (node.classList && node.classList.contains('ace_editor')) {
		return;
	}

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var oldValue = textNode.nodeValue;
	v = oldValue;

	v = v.replace(/\bShift Left\b/g, "Shit Left");
	v = v.replace(/\bshift Left\b/g, "shit Left");
	v = v.replace(/\bShift left\b/g, "Shit left");
	v = v.replace(/\bshift left\b/g, "shit left");

	v = v.replace(/\bShifting Left\b/g, "Shitting Left");
	v = v.replace(/\bshifting Left\b/g, "shitting Left");
	v = v.replace(/\bShifting left\b/g, "Shitting left");
	v = v.replace(/\bshifting left\b/g, "shitting left");

	v = v.replace(/\bLift and Shift\b/g, "Lift and Shit");
	v = v.replace(/\blift and Shift\b/g, "lift and Shit");
	v = v.replace(/\bLift and shift\b/g, "Lift and shit");
	v = v.replace(/\blift and shift\b/g, "lift and shit");

	v = v.replace(/\bLifting and Shifting\b/g, "Lifting and Shifting");
	v = v.replace(/\blifting and Shifting\b/g, "lifting and Shifting");
	v = v.replace(/\bLifting and shifting\b/g, "Lifting and shifting");
	v = v.replace(/\blifting and shifting\b/g, "lifting and shifting");
	
	// avoid infinite series of DOM changes
	if (v !== oldValue) {
		textNode.nodeValue = v;
	}
}

