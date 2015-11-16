/***************************************************************
 * Filename : fontSizeController.js
 * Desc : Jquery Plugin to Increase/Decrease Font Size
 ***************************************************************/
+function ($) {
    'use strict';

    // FONT SIZE CONTROLLER PUBLIC CLASS DEFINITION
    // ============================================

    var FontResizeController = function (el, opt) {
        this.$el = $(el);
        this.options = $.extend({}, FontResizeController.DEFAULTS, opt);
        this.initEvents();
    }

    FontResizeController.DEFAULTS = {
        step: 1,
        tarClass: "text",
        minSize: 4,
        maxSize: 30,
        fontResize: "increase",
        fontUnit: "px"
    }

    FontResizeController.prototype.initEvents = function () {
        var fc = this;
        this.$el.on("click", function (e) {
            fc.resize();
        });
    }
    
    FontResizeController.prototype.resize = function (state) {
        var fc = this;
        var isIncrease = fc.options.fontResize === "increase" ? true : false;
        isIncrease = fc.options.fontResize === "reset" ? null:isIncrease;
        var unit,val,newS,iniSize;
        fc.$tarEl = $("." + fc.options.tarClass);

        $.each(fc.$tarEl, function (e, v) {
            if (isIncrease==null) {
                iniSize = $(v).data("iniSize");
                if (iniSize) {
                    $(v).css('font-size', iniSize);
                }                
            }else{
                var s =fc.getSize(v); 
                if (s) {
                    unit =s.unit;                
                    val = parseFloat(s.value);               
                    newS = 0;
                    
                    if (isIncrease) {
                        newS = val + fc.options.step;
                        if (newS <= fc.options.maxSize) {
                            if (!($(v).data("lockIniSize"))) {
                                $(v).data("ini-size",s.initial);
                                $(v).data("lock-ini-size",true)
                            }                            
                            $(v).css('font-size', newS + unit);                           
                        }
                    } else {
                        newS = val - fc.options.step;
                        if (newS >= fc.options.minSize) {
                            if (!($(v).data("lockIniSize"))) {
                                $(v).data("ini-size",s.initial);
                                $(v).data("lock-ini-size",true)
                            }
                            $(v).css('font-size', newS + unit);                            
                        }
                    }
                }
            }
        })
    }
    
    FontResizeController.prototype.getSize = function(el){
        var s = ($(el).css('font-size')).match(/(\d*\.?\d*)(.*)/);
        if (s.length==3) {
            return {initial : s[0],value : s[1],unit : s[2]}
        }else{
            return null;
        }
    }
    
    // FONT SIZE CONTROLLER PLUGIN DEFINITION
    // ==============================
    function Plugin(option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('fontController')
            var options = typeof option == 'object' && option
            if ($this.data("fontResize")) {
                options.fontSize = $this.data("fontResize");
            }
            if (!data) $this.data('fontController', (data = new FontResizeController(this, options)))
        })
    }

    var old = $.fn.fontSizeController

    $.fn.fontResizeController = Plugin
    $.fn.fontResizeController.Constructor = FontResizeController


    // FONT SIZE CONTROLLER NO CONFLICT
    // ==================

    $.fn.fontResizeController.noConflict = function () {
        $.fn.fontResizeController = old
        return this
    }

}(jQuery);