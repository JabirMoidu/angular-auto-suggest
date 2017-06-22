(function(myApp) {
	myApp.autoSuggestModule
		.service('contacts', function($filter) {
		  this.allData = [
  {"name" : "Ann Liebmann" , "phone" : "+27-61-453-5444", "email":"ann.abc@", "policy_no" : "0013983887"},
   {"name" : "Jabir" , "phone" : "+27-61-453-5444", "email":"jabir.xyz@", "policy_no" : "0013983887"},
    {"name" : "John" , "phone" : "+27-61-453-5444", "email":"john.efg@", "policy_no" : "0013983887"},
     {"name" : "Peter" , "phone" : "+27-61-453-5444", "email":"peter.hij@", "policy_no" : "0013983887"}
  ]
			    
    			this.getData = function(searchKey) {
    			  var dataSet = [];
    			  if(searchKey && searchKey.length > 0)
    			    dataSet = $filter('filter')(this.allData, searchKey)
    			  
    			  return {dataSet};
    			}
		})
})(myApp || {});