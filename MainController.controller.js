(function(myApp) {
  myApp.autoSuggestModule.controller('MainController', function (contacts) {
    var _self = this;
    _self.dataset = [];

    _self.onSearch = function(searchKey) {
      _self.apiData = contacts.getData(searchKey)
      _self.dataset = _self.apiData.dataSet;
    }
  });
})(myApp || {})