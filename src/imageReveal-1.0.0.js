(function ($) {
    $.widget("ui.imageReveal", {
        version: "@VERSION",
        options: {
            height: "auto",
            width: "auto",
            opacity: 0.5,
            duration: 400,
            title: "",
            content: ""
        },

        _parent: null,

        _overlay: {
            wrapper: null,
            title: null,
            content: null
        },

        _create: function () {
            this._setOptions();
            this._createElements();
            this._wireHover();
        },

        _destroy: function () {
            this._overlay.wrapper.remove();
            this._overlay = {
                wrapper: null,
                title: null,
                content: null
            }
            this.element.attr("title", this.options.title);
            this.element.unwrap();
            //Remove events from the element 
        },

        destroy: function () {
            this._destroy();
        },

        _setOptions: function () {
            var e = this.element;

            //Check if the title and data-content attributes have value, if they do, use them
            if (e.attr("title")) {
                this.options.title = e.attr("title");
                e.attr("title", "")
            }
            if (e.attr("data-content")) this.options.content = e.attr("data-content");

            //Check if the height and width property is set to auto, if it is read the source element and get values from it
            if (this.options.height == "auto") this.options.height = e.height();
            if (this.options.width == "auto") this.options.width = e.width();
        },

        _createElements: function () {
            this._createParent();
            this._createOverlay();
        },

        _createParent: function () {
            var e = this.element;

            e.wrap("<div></div>");

            this._parent = e.parent();
            this._parent.addClass("ui-imageReveal-widget");
            this._parent.css({
                "height": this.options.height,
                    "width": this.options.width,
                    "max-height": this.options.height,
                    "max-width": this.options.width
            });
        },

        _createOverlay: function () {
            var p = this._parent,
                o = this._overlay;

            o.title = $("<span>").addClass("ui-imageReveal-title").text(this.options.title);
            o.content = $("<span>").addClass("ui-imageReveal-content").html(this.options.content);
            o.wrapper = $("<div>").addClass("ui-imageReveal-overlay").append(this._overlay.title, this._overlay.content);

            p.append(o.wrapper);
        },

        _wireHover: function () {
            var e = this.element,
                w = this._overlay.wrapper,
                position = parseInt(this._overlay.wrapper.css("top"), 10),
                opacity = this.options.opacity,
                duration = this.options.duration;

            this._parent.hover(function () {
                e.stop().animate({
                    opacity: opacity
                }, duration);
                w.stop().animate({
                    top: "-100%"
                }, duration);
            },

            function () {
                e.stop().animate({
                    opacity: 1.0
                }, duration);
                w.stop().animate({
                    top: position
                }, duration);
            });
        }
    });
}(jQuery));