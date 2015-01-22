(function(global){
    var homeModel,
        app = global.app = global.app || {};
    
    homeModel = kendo.data.ObservableObject.extend({
        
        drawer_Items:null,
        
        
        init:function()
        {
            var that=this;
            
            kendo.data.ObservableObject.fn.init.apply(that,[]);
            var drawerdataSource = new kendo.data.DataSource({
                transport:{
                    read:{
                        url:'myntra/data/drawer-data.json',
                        dataType:'json'
                    }
                },
                group:{
                    field:'title'
                }
            });
            
            that.set("drawer_Items",drawerdataSource);
        },
        show:function()
        { 
            $(".list_block li").unbind('.myPlugin');
            
            //for active the drawer tab list
            $(".list_block li").on("click.myPlugin",function(e){
                
                if(e.toElement.textContent === "Men" || e.toElement.textContent === "Women" || e.toElement.textContent === "Kids" || e.toElement.textContent === "Home Fashion" || e.toElement.textContent === "Brand")
                {
                    alert(e.toElement.textContent);
                }
                else if(e.toElement.textContent === "Track Order")
                {
                    alert(e.toElement.textContent);
                }
                else if(e.toElement.textContent === "Account Detail")
                {
                    alert(e.toElement.textContent);
                }
                else if(e.toElement.textContent === "Logout")
                {
                    alert(e.toElement.textContent);
                }
                else if(e.toElement.textContent === "By facebook")
                {
                    alert(e.toElement.textContent);
                }
                else if(e.toElement.textContent === "Feedback")
                {
                    alert(e.toElement.textContent);
                }
                else
                {
                    apps.navigate("#homepage");
                }
                
                $(".list_block li").removeClass("activeClass");
                $(this).addClass("activeClass");
            });
            
            
            
            //after change the resolution
            $(window).resize(function(){
                if(window.innerHeight>window.innerWidth)
                {
                    console.log("portrait by resize");
                    $('#home-drawer').css("width","250px");
                }
                else
                {
                    console.log("landscape by resize");
                    $('#home-drawer').css("width","320px");
                }
                
                //for hide the drawer when we change the device orientation
                $("#home-drawer").data("kendoMobileDrawer").hide();

                //for set the listview scrolling on top
                $('.km-scroll-container').css("-webkit-transform", "translate3d(0px, 0px, 0px)");
            }); 
        },
        
        byDefaultOrientation:function()
        {
            //on load the app then set the orientation css
            if(window.innerHeight>window.innerWidth)
            {
                console.log("portrait by default");
                $('#home-drawer').css("width","250px");
            }
            else
            {
                console.log("landscape by default");
                $('#home-drawer').css("width","320px");
            }
        },
    });
    app.home = {
        viewModel:new homeModel()
    };
}(window));