	/**
	*	SealSubs loader
	*	version number: 2.0
	*/
	(function(){	
		var loadScript = function (a, b, fail) {
			if (typeof fail === 'undefined') {
				fail = function() {};
			}
			
			var c = document.createElement("script");
			c.type = "text/javascript";
			c.setAttribute("defer", "defer");
			if (c.readyState) {
				c.onreadystatechange = function () {
					("loaded" == c.readyState || "complete" == c.readyState) && (c.onreadystatechange = null, b())
				}
			} else {
				c.onload = function () {
					b();
				}
				c.onerror= function() {
					fail();
				}
			}
			c.src = a;
			document.getElementsByTagName("head")[0].appendChild(c);
		};
		
		appendScriptUrl('mall-ko.myshopify.com');
		
		// get script url and append timestamp of last change
		function appendScriptUrl(shop) {

			var timeStamp 			= Math.floor(Date.now() / (1000*1*1));
			var timestampUrl 		= 'https://app.sealsubscriptions.com/shopify/public/status/shop/'+shop+'.js?'+timeStamp;
			var backupTimestampUrl 	= 'https://cdn-app.sealsubscriptions.com/shopify/public/status/shop/'+shop+'.js?'+timeStamp;
			
			loadScript(timestampUrl, function() {
				// Append app script
				if (typeof sealsubscriptions_settings_updated == 'undefined') {
					sealsubscriptions_settings_updated = 'default-by-script';
				}

				var scriptUrl = "https://cdn-app.sealsubscriptions.com/shopify/public/js/sealsubscriptions-main.js?shop="+shop+"&"+sealsubscriptions_settings_updated;
				
				loadScript(scriptUrl, function(){});
			}, function() {
				// Failure
				loadScript(backupTimestampUrl, function() {
					// Append app script
					if (typeof sealsubscriptions_settings_updated == 'undefined') {
						sealsubscriptions_settings_updated = 'default-by-script';
					}

					var scriptUrl = "https://cdn-app.sealsubscriptions.com/shopify/public/js/sealsubscriptions-main.js?shop="+shop+"&"+sealsubscriptions_settings_updated;
					
					loadScript(scriptUrl, function(){});
				}, function() {});
			});
		}
	})();
