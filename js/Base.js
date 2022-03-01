AFRAME.registerComponent("base",{
    schema:{
        radius:{type:"number, default:150"},
        height:{type:"number",default:3}
    },

    init: function() {
        //DO something when component first attached
        this.el.setAtrributive("geomentry",{
            primitive:"cylinder",
            radius:this.data.radius,
            height:this.data.height
        });
        this.el.setAttribute("material", {color:"blue"});
    }
});