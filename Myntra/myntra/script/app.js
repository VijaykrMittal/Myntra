(function(global){
    var app = global.app = global.app || {};
    
    var OndeviceReady = function()
    {
      app.home.viewModel.byDefaultOrientation();
    };
    document.addEventListener("deviceready",OndeviceReady,false);
    
    apps = new kendo.mobile.Application(document.body,{skin:'flat',initial:'views/home.html'});
}(window));