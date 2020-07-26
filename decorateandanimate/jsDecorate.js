window.onload = pageload;
		var decorateButton;
        var myCheckBox;
		var textArea;
		var pigLatinButton;
		var malkovitchButton;

		function pageload() {
			// find elements
            decorateButton = document.getElementById('decorateButton');
            myCheckBox = document.getElementById('myCheckBox');
            textArea = document.getElementById('textArea');
            pigLatinButton = document.getElementById('pigLatinButton');
            malkovitchButton = document.getElementById('malkovitchButton');

			// set events handelrs
			decorateButton.onclick = decorateButtonClicked;
			myCheckBox.onchange = checkBoxChanged;
			pigLatinButton.onclick = pigLatinButtonClicked;
            malkovitchButton.onclick = malkovitchButtonClicked;

        }

		function decorateButtonClicked() {
            document.body.style.backgroundImage = "url('123.jpg')";

			setInterval(decoraText, 500);
			//decoraText();
		}

		function decoraText() {
            textArea.className = 'biggerText';
            //alert('Hello, Disney World :)');	
            var style = window.getComputedStyle(textArea, null).getPropertyValue('font-size');
            var fontSize = parseFloat(style);
            textArea.style.fontSize = (fontSize + 2) + 'pt';            
		}
		function checkBoxChanged() {            
            if (myCheckBox.checked == true) {                
				textArea.className = 'decorated';
				
			}
            else  {                
                textArea.className = 'normalText';
            }
		}

		function pigLatinButtonClicked() {
            var arr = textArea.value.split(' ');
            var arr1 = textArea.value.split(' ');

			arr = arr.filter((a) => isVowel(a.charAt(0)));
			arr = arr.map((a) => a.substring(1) + a.charAt(0) + 'ay ');

			arr1 = arr1.filter((a) => !isVowel(a.charAt(0)));
			arr1 = arr1.map((a) => a + 'ay ');

			arr = arr.join(' ');
			arr1 = arr1.join(' ');
			var finalArr = arr.concat(arr1);
            textArea.value = finalArr;
		}

        function malkovitchButtonClicked() {
            var arr = textArea.value.split(' ');
            textArea.value = arr.filter((a) => a.length >= 5).map((a, i, array) => {
				return "Malkovitch"
			}).join(' ');
        }

        /* takes one char and returns true or false whether this char is vowel*/
        function isVowel(c) {
            return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
        }