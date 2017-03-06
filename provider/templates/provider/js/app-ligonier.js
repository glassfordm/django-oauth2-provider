(function(){
	/*********************************************************************
	 * Tabs
	 ***********************************************************************/
	function onTabClick(event){
		// This will prevent the default action of the anchor
    	event.preventDefault();

		var actives = document.querySelectorAll('.active');

		// deactivate existing active tab and panel
		for (var i=0; i < actives.length; i++){
		  actives[i].className = actives[i].className.replace('active', '');
		}

		// activate new tab and panel
		event.target.parentElement.className += ' active';
		document.getElementById(event.target.href.split('#')[1]).className += ' active';
	} //onTabClick

	var el = document.getElementById('login-tab');
	if(el != null) { //only run this listener on pages that have tabs
		el.addEventListener('click', onTabClick, false);
	}
	
	/*********************************************************************
	 * Automatically create <label> tags for each text/password input item
	 ***********************************************************************/

	var inputs = document.querySelectorAll('.auth-form input[type=text]');

	// Loop through each input and create a label for each
	for (var i=0; i < inputs.length; i++){
		var getPlaceholder = inputs[i].getAttribute('placeholder');
		var placeholderValue = '<label class="input-label">'+getPlaceholder+'</label>';

		//insert label element
		inputs[i].insertAdjacentHTML('beforebegin', placeholderValue);

		//show or hide labels
		inputs[i].onkeydown = function(event) { //this function runs when a user is typing
			var precedingLabel = this.previousSibling; //gets the dynamically created label from above
			if(this.value.length != 0 ) { //if input is not empty
				if (precedingLabel.classList.contains("filled")) {
					//do nothing
				} else {
					precedingLabel.classList.add("filled"); //add class to label element
				}
			}
			else {
				precedingLabel.classList.remove("filled"); //hide label if field is emptied by user
			}
		} //function
	} //endfor
	
})();