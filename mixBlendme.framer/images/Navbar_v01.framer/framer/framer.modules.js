require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ViewController":[function(require,module,exports){
var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

module.exports = (function(superClass) {
  extend(exports, superClass);

  function exports(options) {
    var autoInitial, backButtons, btn, i, len, transitions;
    if (options == null) {
      options = {};
    }
    if (options.width == null) {
      options.width = Screen.width;
    }
    if (options.height == null) {
      options.height = Screen.height;
    }
    if (options.clip == null) {
      options.clip = true;
    }
    if (options.initialViewName == null) {
      options.initialViewName = 'initialView';
    }
    if (options.backButtonName == null) {
      options.backButtonName = 'backButton';
    }
    if (options.animationOptions == null) {
      options.animationOptions = {
        curve: "cubic-bezier(0.19, 1, 0.22, 1)",
        time: .7
      };
    }
    if (options.backgroundColor == null) {
      options.backgroundColor = "black";
    }
    if (options.scroll == null) {
      options.scroll = false;
    }
    if (options.autoLink == null) {
      options.autoLink = true;
    }
    exports.__super__.constructor.call(this, options);
    this.history = [];
    this.onChange("subLayers", (function(_this) {
      return function(changeList) {
        var c, children, i, len, scrollComponent, view;
        view = changeList.added[0];
        if (view != null) {
          view.clip = true;
          view.on(Events.Click, function() {});
          if (_this.scroll) {
            children = view.children;
            scrollComponent = new ScrollComponent({
              name: "scrollComponent",
              width: _this.width,
              height: _this.height,
              parent: view
            });
            scrollComponent.content.backgroundColor = "";
            if (view.width <= _this.width) {
              scrollComponent.scrollHorizontal = false;
            }
            if (view.height <= _this.height) {
              scrollComponent.scrollVertical = false;
            }
            for (i = 0, len = children.length; i < len; i++) {
              c = children[i];
              c.parent = scrollComponent.content;
            }
            view.scrollComponent = scrollComponent;
            return view.size = {
              width: _this.width,
              height: _this.height
            };
          }
        }
      };
    })(this));
    transitions = {
      switchInstant: {
        newView: {
          to: {
            x: 0,
            y: 0
          }
        }
      },
      fadeIn: {
        newView: {
          from: {
            opacity: 0
          },
          to: {
            opacity: 1
          }
        }
      },
      zoomIn: {
        newView: {
          from: {
            scale: 0.8,
            opacity: 0
          },
          to: {
            scale: 1,
            opacity: 1
          }
        }
      },
      zoomOut: {
        oldView: {
          to: {
            scale: 0.8,
            opacity: 0
          }
        },
        newView: {
          to: {}
        }
      },
      slideInUp: {
        newView: {
          from: {
            y: this.height
          },
          to: {
            y: 0
          }
        }
      },
      slideInRight: {
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      slideInDown: {
        newView: {
          from: {
            maxY: 0
          },
          to: {
            y: 0
          }
        }
      },
      moveInRight: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      moveInLeft: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          from: {
            maxX: 0
          },
          to: {
            x: 0
          }
        }
      },
      slideInLeft: {
        newView: {
          from: {
            maxX: 0
          },
          to: {
            maxX: this.width
          }
        }
      },
      pushInRight: {
        oldView: {
          to: {
            x: -(this.width / 5),
            brightness: 70
          }
        },
        newView: {
          from: {
            x: this.width
          },
          to: {
            x: 0
          }
        }
      },
      pushInLeft: {
        oldView: {
          to: {
            x: this.width / 5,
            brightness: 70
          }
        },
        newView: {
          from: {
            x: -this.width
          },
          to: {
            x: 0
          }
        }
      },
      pushOutRight: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          from: {
            x: -(this.width / 5),
            brightness: 70
          },
          to: {
            x: 0,
            brightness: 100
          }
        }
      },
      pushOutLeft: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          from: {
            x: this.width / 5,
            brightness: 70
          },
          to: {
            x: 0,
            brightness: 100
          }
        }
      },
      slideOutUp: {
        oldView: {
          to: {
            maxY: 0
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutRight: {
        oldView: {
          to: {
            x: this.width
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutDown: {
        oldView: {
          to: {
            y: this.height
          }
        },
        newView: {
          to: {}
        }
      },
      slideOutLeft: {
        oldView: {
          to: {
            maxX: 0
          }
        },
        newView: {
          to: {}
        }
      }
    };
    transitions.slideIn = transitions.slideInRight;
    transitions.slideOut = transitions.slideOutRight;
    transitions.pushIn = transitions.pushInRight;
    transitions.pushOut = transitions.pushOutRight;
    Events.ViewWillSwitch = "viewWillSwitch";
    Events.ViewDidSwitch = "viewDidSwitch";
    Layer.prototype.onViewWillSwitch = function(cb) {
      return this.on(Events.ViewWillSwitch, cb);
    };
    Layer.prototype.onViewDidSwitch = function(cb) {
      return this.on(Events.ViewDidSwitch, cb);
    };
    _.each(transitions, (function(_this) {
      return function(animProps, name) {
        var btn, i, layers, len, viewController;
        if (options.autoLink) {
          layers = Framer.CurrentContext.getLayers();
          for (i = 0, len = layers.length; i < len; i++) {
            btn = layers[i];
            if (_.includes(btn.name, name)) {
              viewController = _this;
              btn.onClick(function() {
                var anim, linkName;
                anim = this.name.split('_')[0];
                linkName = this.name.replace(anim + '_', '');
                linkName = linkName.replace(/\d+/g, '');
                return viewController[anim](_.find(layers, function(l) {
                  return l.name === linkName;
                }));
              });
            }
          }
        }
        return _this[name] = function(newView, animationOptions) {
          var animObj, hook, incoming, outgoing, ref, ref1, ref2, ref3, ref4, ref5, ref6;
          if (animationOptions == null) {
            animationOptions = _this.animationOptions;
          }
          if (newView === _this.currentView) {
            return;
          }
          newView.parent = _this;
          newView.sendToBack();
          newView.point = {
            x: 0,
            y: 0
          };
          newView.opacity = 1;
          newView.scale = 1;
          newView.brightness = 100;
          if ((ref = _this.currentView) != null) {
            ref.point = {
              x: 0,
              y: 0
            };
          }
          if ((ref1 = _this.currentView) != null) {
            ref1.props = (ref2 = animProps.oldView) != null ? ref2.from : void 0;
          }
          animObj = _.extend({
            properties: (ref3 = animProps.oldView) != null ? ref3.to : void 0
          }, animationOptions);
          _.defaults(animObj, {
            properties: {}
          });
          outgoing = (ref4 = _this.currentView) != null ? ref4.animate(animObj) : void 0;
          newView.props = (ref5 = animProps.newView) != null ? ref5.from : void 0;
          incoming = newView.animate(_.extend({
            properties: (ref6 = animProps.newView) != null ? ref6.to : void 0
          }, animationOptions));
          if (_.includes(name, 'Out')) {
            newView.placeBehind(_this.currentView);
            outgoing.on(Events.AnimationEnd, function() {
              return _this.currentView.bringToFront();
            });
          } else {
            newView.placeBefore(_this.currentView);
          }
          _this.emit(Events.ViewWillSwitch, _this.currentView, newView);
          _this.saveCurrentViewToHistory(name, outgoing, incoming);
          _this.currentView = newView;
          _this.emit("change:previousView", _this.previousView);
          _this.emit("change:currentView", _this.currentView);
          if (incoming.isAnimating) {
            hook = incoming;
          } else {
            hook = outgoing;
          }
          return hook.on(Events.AnimationEnd, function() {
            return _this.emit(Events.ViewDidSwitch, _this.previousView, _this.currentView);
          });
        };
      };
    })(this));
    if (options.initialViewName != null) {
      autoInitial = _.find(Framer.CurrentContext.getLayers(), function(l) {
        return l.name === options.initialViewName;
      });
      if (autoInitial != null) {
        this.switchInstant(autoInitial);
      }
    }
    if (options.initialView != null) {
      this.switchInstant(options.initialView);
    }
    if (options.backButtonName != null) {
      backButtons = _.filter(Framer.CurrentContext.getLayers(), function(l) {
        return _.includes(l.name, options.backButtonName);
      });
      for (i = 0, len = backButtons.length; i < len; i++) {
        btn = backButtons[i];
        btn.onClick((function(_this) {
          return function() {
            return _this.back();
          };
        })(this));
      }
    }
  }

  exports.define("previousView", {
    get: function() {
      return this.history[0].view;
    }
  });

  exports.prototype.saveCurrentViewToHistory = function(name, outgoingAnimation, incomingAnimation) {
    return this.history.unshift({
      view: this.currentView,
      animationName: name,
      incomingAnimation: incomingAnimation,
      outgoingAnimation: outgoingAnimation
    });
  };

  exports.prototype.back = function() {
    var backIn, moveOut, previous;
    previous = this.history[0];
    if (previous.view != null) {
      if (_.includes(previous.animationName, 'Out')) {
        previous.view.bringToFront();
      }
      backIn = previous.outgoingAnimation.reverse();
      moveOut = previous.incomingAnimation.reverse();
      backIn.start();
      moveOut.start();
      this.currentView = previous.view;
      this.history.shift();
      return moveOut.on(Events.AnimationEnd, (function(_this) {
        return function() {
          return _this.currentView.bringToFront();
        };
      })(this));
    }
  };

  return exports;

})(Layer);


},{}],"myModule":[function(require,module,exports){
exports.myVar = "myVariable";

exports.myFunction = function() {
  return print("myFunction is running");
};

exports.myArray = [1, 2, 3];


},{}]},{},[])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvZGVubnlraW0vcG9ydGZvbGlvamVreWxsL2lzaXRncmV5LmdpdGh1Yi5pby9taXhCbGVuZG1lLmZyYW1lci9pbWFnZXMvTmF2YmFyX3YwMS5mcmFtZXIvbW9kdWxlcy9WaWV3Q29udHJvbGxlci5jb2ZmZWUiLCIvVXNlcnMvZGVubnlraW0vcG9ydGZvbGlvamVreWxsL2lzaXRncmV5LmdpdGh1Yi5pby9taXhCbGVuZG1lLmZyYW1lci9pbWFnZXMvTmF2YmFyX3YwMS5mcmFtZXIvbW9kdWxlcy9teU1vZHVsZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFBOzs7QUFBTSxNQUFNLENBQUM7OztFQUVDLGlCQUFDLE9BQUQ7QUFDWixRQUFBOztNQURhLFVBQVE7OztNQUNyQixPQUFPLENBQUMsUUFBUyxNQUFNLENBQUM7OztNQUN4QixPQUFPLENBQUMsU0FBVSxNQUFNLENBQUM7OztNQUN6QixPQUFPLENBQUMsT0FBUTs7O01BQ2hCLE9BQU8sQ0FBQyxrQkFBbUI7OztNQUMzQixPQUFPLENBQUMsaUJBQWtCOzs7TUFDMUIsT0FBTyxDQUFDLG1CQUFvQjtRQUFFLEtBQUEsRUFBTyxnQ0FBVDtRQUEyQyxJQUFBLEVBQU0sRUFBakQ7Ozs7TUFDNUIsT0FBTyxDQUFDLGtCQUFtQjs7O01BQzNCLE9BQU8sQ0FBQyxTQUFVOzs7TUFDbEIsT0FBTyxDQUFDLFdBQVk7O0lBRXBCLHlDQUFNLE9BQU47SUFDQSxJQUFDLENBQUEsT0FBRCxHQUFXO0lBRVgsSUFBQyxDQUFBLFFBQUQsQ0FBVSxXQUFWLEVBQXVCLENBQUEsU0FBQSxLQUFBO2FBQUEsU0FBQyxVQUFEO0FBQ3RCLFlBQUE7UUFBQSxJQUFBLEdBQU8sVUFBVSxDQUFDLEtBQU0sQ0FBQSxDQUFBO1FBQ3hCLElBQUcsWUFBSDtVQUVDLElBQUksQ0FBQyxJ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QUNwQixJQUFHLHFCQUFIO01BRUMsSUFBRyxDQUFDLENBQUMsUUFBRixDQUFXLFFBQVEsQ0FBQyxhQUFwQixFQUFtQyxLQUFuQyxDQUFIO1FBQ0MsUUFBUSxDQUFDLElBQUksQ0FBQyxZQUFkLENBQUEsRUFERDs7TUFHQSxNQUFBLEdBQVMsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE9BQTNCLENBQUE7TUFDVCxPQUFBLEdBQVUsUUFBUSxDQUFDLGlCQUFpQixDQUFDLE9BQTNCLENBQUE7TUFFVixNQUFNLENBQUMsS0FBUCxDQUFBO01BQ0EsT0FBTyxDQUFDLEtBQVIsQ0FBQTtNQUVBLElBQUMsQ0FBQSxXQUFELEdBQWUsUUFBUSxDQUFDO01BQ3hCLElBQUMsQ0FBQSxPQUFPLENBQUMsS0FBVCxDQUFBO2FBQ0EsT0FBTyxDQUFDLEVBQVIsQ0FBVyxNQUFNLENBQUMsWUFBbEIsRUFBZ0MsQ0FBQSxTQUFBLEtBQUE7ZUFBQSxTQUFBO2lCQUFHLEtBQUMsQ0FBQSxXQUFXLENBQUMsWUFBYixDQUFBO1FBQUg7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQWhDLEVBYkQ7O0VBRks7Ozs7R0FyT3NCOzs7O0FDSTdCLE9BQU8sQ0FBQyxLQUFSLEdBQWdCOztBQUVoQixPQUFPLENBQUMsVUFBUixHQUFxQixTQUFBO1NBQ3BCLEtBQUEsQ0FBTSx1QkFBTjtBQURvQjs7QUFHckIsT0FBTyxDQUFDLE9BQVIsR0FBa0IsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgbW9kdWxlLmV4cG9ydHMgZXh0ZW5kcyBMYXllclxuXHRcdFxuXHRjb25zdHJ1Y3RvcjogKG9wdGlvbnM9e30pIC0+XG5cdFx0b3B0aW9ucy53aWR0aCA/PSBTY3JlZW4ud2lkdGhcblx0XHRvcHRpb25zLmhlaWdodCA/PSBTY3JlZW4uaGVpZ2h0XG5cdFx0b3B0aW9ucy5jbGlwID89IHRydWVcblx0XHRvcHRpb25zLmluaXRpYWxWaWV3TmFtZSA/PSAnaW5pdGlhbFZpZXcnXG5cdFx0b3B0aW9ucy5iYWNrQnV0dG9uTmFtZSA/PSAnYmFja0J1dHRvbidcblx0XHRvcHRpb25zLmFuaW1hdGlvbk9wdGlvbnMgPz0geyBjdXJ2ZTogXCJjdWJpYy1iZXppZXIoMC4xOSwgMSwgMC4yMiwgMSlcIiwgdGltZTogLjcgfVxuXHRcdG9wdGlvbnMuYmFja2dyb3VuZENvbG9yID89IFwiYmxhY2tcIlxuXHRcdG9wdGlvbnMuc2Nyb2xsID89IGZhbHNlXG5cdFx0b3B0aW9ucy5hdXRvTGluayA/PSB0cnVlXG5cblx0XHRzdXBlciBvcHRpb25zXG5cdFx0QGhpc3RvcnkgPSBbXVxuXG5cdFx0QG9uQ2hhbmdlIFwic3ViTGF5ZXJzXCIsIChjaGFuZ2VMaXN0KSA9PlxuXHRcdFx0dmlldyA9IGNoYW5nZUxpc3QuYWRkZWRbMF1cblx0XHRcdGlmIHZpZXc/XG5cdFx0XHRcdCMgZGVmYXVsdCBiZWhhdmlvcnMgZm9yIHZpZXdzXG5cdFx0XHRcdHZpZXcuY2xpcCA9IHRydWVcblx0XHRcdFx0dmlldy5vbiBFdmVudHMuQ2xpY2ssIC0+IHJldHVybiAjIHByZXZlbnQgY2xpY2stdGhyb3VnaC9idWJibGluZ1xuXHRcdFx0XHQjIGFkZCBzY3JvbGxjb21wb25lbnRcblx0XHRcdFx0aWYgQHNjcm9sbFxuXHRcdFx0XHRcdGNoaWxkcmVuID0gdmlldy5jaGlsZHJlblxuXHRcdFx0XHRcdHNjcm9sbENvbXBvbmVudCA9IG5ldyBTY3JvbGxDb21wb25lbnRcblx0XHRcdFx0XHRcdG5hbWU6IFwic2Nyb2xsQ29tcG9uZW50XCJcblx0XHRcdFx0XHRcdHdpZHRoOiBAd2lkdGhcblx0XHRcdFx0XHRcdGhlaWdodDogQGhlaWdodFxuXHRcdFx0XHRcdFx0cGFyZW50OiB2aWV3XG5cdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LmNvbnRlbnQuYmFja2dyb3VuZENvbG9yID0gXCJcIlxuXHRcdFx0XHRcdGlmIHZpZXcud2lkdGggPD0gQHdpZHRoXG5cdFx0XHRcdFx0XHRzY3JvbGxDb21wb25lbnQuc2Nyb2xsSG9yaXpvbnRhbCA9IGZhbHNlXG5cdFx0XHRcdFx0aWYgdmlldy5oZWlnaHQgPD0gQGhlaWdodFxuXHRcdFx0XHRcdFx0c2Nyb2xsQ29tcG9uZW50LnNjcm9sbFZlcnRpY2FsID0gZmFsc2Vcblx0XHRcdFx0XHRmb3IgYyBpbiBjaGlsZHJlblxuXHRcdFx0XHRcdFx0Yy5wYXJlbnQgPSBzY3JvbGxDb21wb25lbnQuY29udGVudFxuXHRcdFx0XHRcdHZpZXcuc2Nyb2xsQ29tcG9uZW50ID0gc2Nyb2xsQ29tcG9uZW50ICMgbWFrZSBpdCBhY2Nlc3NpYmxlIGFzIGEgcHJvcGVydHlcblx0XHRcdFx0XHQjIHJlc2V0IHNpemUgc2luY2UgY29udGVudCBtb3ZlZCB0byBzY3JvbGxDb21wb25lbnQuIHByZXZlbnRzIHNjcm9sbCBidWcgd2hlbiBkcmFnZ2luZyBvdXRzaWRlLlxuXHRcdFx0XHRcdHZpZXcuc2l6ZSA9IHt3aWR0aDogQHdpZHRoLCBoZWlnaHQ6IEBoZWlnaHR9XG5cblx0XHR0cmFuc2l0aW9ucyA9XG5cdFx0XHRzd2l0Y2hJbnN0YW50OlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogMCwgeTogMH1cblx0XHRcdGZhZGVJbjpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7b3BhY2l0eTogMH1cblx0XHRcdFx0XHR0bzoge29wYWNpdHk6IDF9XG5cdFx0XHR6b29tSW46XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3NjYWxlOiAwLjgsIG9wYWNpdHk6IDB9XG5cdFx0XHRcdFx0dG86IHtzY2FsZTogMSwgb3BhY2l0eTogMX1cblx0XHRcdHpvb21PdXQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHtzY2FsZTogMC44LCBvcGFjaXR5OiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVJblVwOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt5OiBAaGVpZ2h0fVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdHNsaWRlSW5SaWdodDpcblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHNsaWRlSW5Eb3duOlxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHttYXhZOiAwfVxuXHRcdFx0XHRcdHRvOiB7eTogMH1cblx0XHRcdG1vdmVJblJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7bWF4WDogMH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdG1vdmVJbkxlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGh9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFg6IDB9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0c2xpZGVJbkxlZnQ6XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge21heFg6IDB9XG5cdFx0XHRcdFx0dG86IHttYXhYOiBAd2lkdGh9XG5cdFx0XHRwdXNoSW5SaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IC0oQHdpZHRoLzUpLCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHRmcm9tOiB7eDogQHdpZHRofVxuXHRcdFx0XHRcdHRvOiB7eDogMH1cblx0XHRcdHB1c2hJbkxlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHt4OiBAd2lkdGgvNSwgYnJpZ2h0bmVzczogNzB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IC1Ad2lkdGh9XG5cdFx0XHRcdFx0dG86IHt4OiAwfVxuXHRcdFx0cHVzaE91dFJpZ2h0OlxuXHRcdFx0XHRvbGRWaWV3OlxuXHRcdFx0XHRcdHRvOiB7eDogQHdpZHRofVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdGZyb206IHt4OiAtKEB3aWR0aC81KSwgYnJpZ2h0bmVzczogNzB9XG5cdFx0XHRcdFx0dG86IHt4OiAwLCBicmlnaHRuZXNzOiAxMDB9XG5cdFx0XHRwdXNoT3V0TGVmdDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge21heFg6IDB9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0ZnJvbToge3g6IEB3aWR0aC81LCBicmlnaHRuZXNzOiA3MH1cblx0XHRcdFx0XHR0bzoge3g6IDAsIGJyaWdodG5lc3M6IDEwMH1cblx0XHRcdHNsaWRlT3V0VXA6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHttYXhZOiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXHRcdFx0c2xpZGVPdXRSaWdodDpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3g6IEB3aWR0aH1cblx0XHRcdFx0bmV3Vmlldzpcblx0XHRcdFx0XHR0bzoge31cblx0XHRcdHNsaWRlT3V0RG93bjpcblx0XHRcdFx0b2xkVmlldzpcblx0XHRcdFx0XHR0bzoge3k6IEBoZWlnaHR9XG5cdFx0XHRcdG5ld1ZpZXc6XG5cdFx0XHRcdFx0dG86IHt9XG5cdFx0XHRzbGlkZU91dExlZnQ6XG5cdFx0XHRcdG9sZFZpZXc6XG5cdFx0XHRcdFx0dG86IHttYXhYOiAwfVxuXHRcdFx0XHRuZXdWaWV3OlxuXHRcdFx0XHRcdHRvOiB7fVxuXG5cdFx0IyBzaG9ydGN1dHNcblx0XHR0cmFuc2l0aW9ucy5zbGlkZUluID0gdHJhbnNpdGlvbnMuc2xpZGVJblJpZ2h0XG5cdFx0dHJhbnNpdGlvbnMuc2xpZGVPdXQgPSB0cmFuc2l0aW9ucy5zbGlkZU91dFJpZ2h0XG5cdFx0dHJhbnNpdGlvbnMucHVzaEluID0gdHJhbnNpdGlvbnMucHVzaEluUmlnaHRcblx0XHR0cmFuc2l0aW9ucy5wdXNoT3V0ID0gdHJhbnNpdGlvbnMucHVzaE91dFJpZ2h0XG5cblx0XHQjIGV2ZW50c1xuXHRcdEV2ZW50cy5WaWV3V2lsbFN3aXRjaCA9IFwidmlld1dpbGxTd2l0Y2hcIlxuXHRcdEV2ZW50cy5WaWV3RGlkU3dpdGNoID0gXCJ2aWV3RGlkU3dpdGNoXCJcblx0XHRMYXllcjo6b25WaWV3V2lsbFN3aXRjaCA9IChjYikgLT4gQG9uKEV2ZW50cy5WaWV3V2lsbFN3aXRjaCwgY2IpXG5cdFx0TGF5ZXI6Om9uVmlld0RpZFN3aXRjaCA9IChjYikgLT4gQG9uKEV2ZW50cy5WaWV3RGlkU3dpdGNoLCBjYilcdFx0XG5cblx0XHRfLmVhY2ggdHJhbnNpdGlvbnMsIChhbmltUHJvcHMsIG5hbWUpID0+XG5cblx0XHRcdGlmIG9wdGlvbnMuYXV0b0xpbmtcblx0XHRcdFx0bGF5ZXJzID0gRnJhbWVyLkN1cnJlbnRDb250ZXh0LmdldExheWVycygpXG5cdFx0XHRcdGZvciBidG4gaW4gbGF5ZXJzXG5cdFx0XHRcdFx0aWYgXy5pbmNsdWRlcyBidG4ubmFtZSwgbmFtZVxuXHRcdFx0XHRcdFx0dmlld0NvbnRyb2xsZXIgPSBAXG5cdFx0XHRcdFx0XHRidG4ub25DbGljayAtPlxuXHRcdFx0XHRcdFx0XHRhbmltID0gQG5hbWUuc3BsaXQoJ18nKVswXVxuXHRcdFx0XHRcdFx0XHRsaW5rTmFtZSA9IEBuYW1lLnJlcGxhY2UoYW5pbSsnXycsJycpXG5cdFx0XHRcdFx0XHRcdGxpbmtOYW1lID0gbGlua05hbWUucmVwbGFjZSgvXFxkKy9nLCAnJykgIyByZW1vdmUgbnVtYmVyc1xuXHRcdFx0XHRcdFx0XHR2aWV3Q29udHJvbGxlclthbmltXSBfLmZpbmQobGF5ZXJzLCAobCkgLT4gbC5uYW1lIGlzIGxpbmtOYW1lKVxuXG5cdFx0XHRAW25hbWVdID0gKG5ld1ZpZXcsIGFuaW1hdGlvbk9wdGlvbnMgPSBAYW5pbWF0aW9uT3B0aW9ucykgPT5cblxuXHRcdFx0XHRyZXR1cm4gaWYgbmV3VmlldyBpcyBAY3VycmVudFZpZXdcblxuXG5cblx0XHRcdFx0IyBtYWtlIHN1cmUgdGhlIG5ldyBsYXllciBpcyBpbnNpZGUgdGhlIHZpZXdjb250cm9sbGVyXG5cdFx0XHRcdG5ld1ZpZXcucGFyZW50ID0gQFxuXHRcdFx0XHRuZXdWaWV3LnNlbmRUb0JhY2soKVxuXG5cdFx0XHRcdCMgcmVzZXQgcHJvcHMgaW4gY2FzZSB0aGV5IHdlcmUgY2hhbmdlZCBieSBhIHByZXYgYW5pbWF0aW9uXG5cdFx0XHRcdG5ld1ZpZXcucG9pbnQgPSB7eDowLCB5OiAwfVxuXHRcdFx0XHRuZXdWaWV3Lm9wYWNpdHkgPSAxXG5cdFx0XHRcdG5ld1ZpZXcuc2NhbGUgPSAxXG5cdFx0XHRcdG5ld1ZpZXcuYnJpZ2h0bmVzcyA9IDEwMFxuXHRcdFx0XHRcblx0XHRcdFx0IyBvbGRWaWV3XG5cdFx0XHRcdEBjdXJyZW50Vmlldz8ucG9pbnQgPSB7eDogMCwgeTogMH0gIyBmaXhlcyBvZmZzZXQgaXNzdWUgd2hlbiBtb3ZpbmcgdG9vIGZhc3QgYmV0d2VlbiBzY3JlZW5zXG5cdFx0XHRcdEBjdXJyZW50Vmlldz8ucHJvcHMgPSBhbmltUHJvcHMub2xkVmlldz8uZnJvbVxuXHRcdFx0XHRhbmltT2JqID0gXy5leHRlbmQge3Byb3BlcnRpZXM6IGFuaW1Qcm9wcy5vbGRWaWV3Py50b30sIGFuaW1hdGlvbk9wdGlvbnNcblx0XHRcdFx0Xy5kZWZhdWx0cyhhbmltT2JqLCB7IHByb3BlcnRpZXM6IHt9IH0pXG5cdFx0XHRcdG91dGdvaW5nID0gQGN1cnJlbnRWaWV3Py5hbmltYXRlIGFuaW1PYmpcblxuXHRcdFx0XHQjIG5ld1ZpZXdcblx0XHRcdFx0bmV3Vmlldy5wcm9wcyA9IGFuaW1Qcm9wcy5uZXdWaWV3Py5mcm9tXG5cdFx0XHRcdGluY29taW5nID0gbmV3Vmlldy5hbmltYXRlIF8uZXh0ZW5kIHtwcm9wZXJ0aWVzOiBhbmltUHJvcHMubmV3Vmlldz8udG99LCBhbmltYXRpb25PcHRpb25zXG5cdFx0XHRcdFxuXHRcdFx0XHQjIGxheWVyIG9yZGVyXG5cdFx0XHRcdGlmIF8uaW5jbHVkZXMgbmFtZSwgJ091dCdcblx0XHRcdFx0XHRuZXdWaWV3LnBsYWNlQmVoaW5kKEBjdXJyZW50Vmlldylcblx0XHRcdFx0XHRvdXRnb2luZy5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PiBAY3VycmVudFZpZXcuYnJpbmdUb0Zyb250KClcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5ld1ZpZXcucGxhY2VCZWZvcmUoQGN1cnJlbnRWaWV3KVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRAZW1pdChFdmVudHMuVmlld1dpbGxTd2l0Y2gsIEBjdXJyZW50VmlldywgbmV3Vmlldylcblx0XHRcdFx0XG5cdFx0XHRcdCMgY2hhbmdlIEN1cnJlbnRWaWV3IGJlZm9yZSBhbmltYXRpb24gaGFzIGZpbmlzaGVkIHNvIG9uZSBjb3VsZCBnbyBiYWNrIGluIGhpc3Rvcnlcblx0XHRcdFx0IyB3aXRob3V0IGhhdmluZyB0byB3YWl0IGZvciB0aGUgdHJhbnNpdGlvbiB0byBmaW5pc2hcblx0XHRcdFx0QHNhdmVDdXJyZW50Vmlld1RvSGlzdG9yeSBuYW1lLCBvdXRnb2luZywgaW5jb21pbmdcblx0XHRcdFx0QGN1cnJlbnRWaWV3ID0gbmV3Vmlld1xuXHRcdFx0XHRAZW1pdChcImNoYW5nZTpwcmV2aW91c1ZpZXdcIiwgQHByZXZpb3VzVmlldylcblx0XHRcdFx0QGVtaXQoXCJjaGFuZ2U6Y3VycmVudFZpZXdcIiwgQGN1cnJlbnRWaWV3KVxuXHRcdFx0XHRcblx0XHRcdFx0aWYgaW5jb21pbmcuaXNBbmltYXRpbmdcblx0XHRcdFx0XHRob29rID0gaW5jb21pbmcgXG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRob29rID0gb3V0Z29pbmdcblx0XHRcdFx0aG9vay5vbiBFdmVudHMuQW5pbWF0aW9uRW5kLCA9PlxuXHRcdFx0XHRcdEBlbWl0KEV2ZW50cy5WaWV3RGlkU3dpdGNoLCBAcHJldmlvdXNWaWV3LCBAY3VycmVudFZpZXcpXG5cdFx0XHRcdFxuXG5cdFx0aWYgb3B0aW9ucy5pbml0aWFsVmlld05hbWU/XG5cdFx0XHRhdXRvSW5pdGlhbCA9IF8uZmluZCBGcmFtZXIuQ3VycmVudENvbnRleHQuZ2V0TGF5ZXJzKCksIChsKSAtPiBsLm5hbWUgaXMgb3B0aW9ucy5pbml0aWFsVmlld05hbWVcblx0XHRcdGlmIGF1dG9Jbml0aWFsPyB0aGVuIEBzd2l0Y2hJbnN0YW50IGF1dG9Jbml0aWFsXG5cblx0XHRpZiBvcHRpb25zLmluaXRpYWxWaWV3P1xuXHRcdFx0QHN3aXRjaEluc3RhbnQgb3B0aW9ucy5pbml0aWFsVmlld1xuXG5cdFx0aWYgb3B0aW9ucy5iYWNrQnV0dG9uTmFtZT9cblx0XHRcdGJhY2tCdXR0b25zID0gXy5maWx0ZXIgRnJhbWVyLkN1cnJlbnRDb250ZXh0LmdldExheWVycygpLCAobCkgLT4gXy5pbmNsdWRlcyBsLm5hbWUsIG9wdGlvbnMuYmFja0J1dHRvbk5hbWVcblx0XHRcdGZvciBidG4gaW4gYmFja0J1dHRvbnNcblx0XHRcdFx0YnRuLm9uQ2xpY2sgPT4gQGJhY2soKVxuXG5cdEBkZWZpbmUgXCJwcmV2aW91c1ZpZXdcIixcblx0XHRcdGdldDogLT4gQGhpc3RvcnlbMF0udmlld1xuXG5cdHNhdmVDdXJyZW50Vmlld1RvSGlzdG9yeTogKG5hbWUsb3V0Z29pbmdBbmltYXRpb24saW5jb21pbmdBbmltYXRpb24pIC0+XG5cdFx0QGhpc3RvcnkudW5zaGlmdFxuXHRcdFx0dmlldzogQGN1cnJlbnRWaWV3XG5cdFx0XHRhbmltYXRpb25OYW1lOiBuYW1lXG5cdFx0XHRpbmNvbWluZ0FuaW1hdGlvbjogaW5jb21pbmdBbmltYXRpb25cblx0XHRcdG91dGdvaW5nQW5pbWF0aW9uOiBvdXRnb2luZ0FuaW1hdGlvblxuXG5cdGJhY2s6IC0+XG5cdFx0cHJldmlvdXMgPSBAaGlzdG9yeVswXVxuXHRcdGlmIHByZXZpb3VzLnZpZXc/XG5cblx0XHRcdGlmIF8uaW5jbHVkZXMgcHJldmlvdXMuYW5pbWF0aW9uTmFtZSwgJ091dCdcblx0XHRcdFx0cHJldmlvdXMudmlldy5icmluZ1RvRnJvbnQoKVxuXG5cdFx0XHRiYWNrSW4gPSBwcmV2aW91cy5vdXRnb2luZ0FuaW1hdGlvbi5yZXZlcnNlKClcblx0XHRcdG1vdmVPdXQgPSBwcmV2aW91cy5pbmNvbWluZ0FuaW1hdGlvbi5yZXZlcnNlKClcblxuXHRcdFx0YmFja0luLnN0YXJ0KClcblx0XHRcdG1vdmVPdXQuc3RhcnQoKVxuXG5cdFx0XHRAY3VycmVudFZpZXcgPSBwcmV2aW91cy52aWV3XG5cdFx0XHRAaGlzdG9yeS5zaGlmdCgpXG5cdFx0XHRtb3ZlT3V0Lm9uIEV2ZW50cy5BbmltYXRpb25FbmQsID0+IEBjdXJyZW50Vmlldy5icmluZ1RvRnJvbnQoKVxuIiwiIyBBZGQgdGhlIGZvbGxvd2luZyBsaW5lIHRvIHlvdXIgcHJvamVjdCBpbiBGcmFtZXIgU3R1ZGlvLiBcbiMgbXlNb2R1bGUgPSByZXF1aXJlIFwibXlNb2R1bGVcIlxuIyBSZWZlcmVuY2UgdGhlIGNvbnRlbnRzIGJ5IG5hbWUsIGxpa2UgbXlNb2R1bGUubXlGdW5jdGlvbigpIG9yIG15TW9kdWxlLm15VmFyXG5cbmV4cG9ydHMubXlWYXIgPSBcIm15VmFyaWFibGVcIlxuXG5leHBvcnRzLm15RnVuY3Rpb24gPSAtPlxuXHRwcmludCBcIm15RnVuY3Rpb24gaXMgcnVubmluZ1wiXG5cbmV4cG9ydHMubXlBcnJheSA9IFsxLCAyLCAzXSJdfQ==
