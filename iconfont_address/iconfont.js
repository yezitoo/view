;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-zhengque" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M767.307733 397.553435 479.344253 685.517939c-13.359262 13.359262-33.546024 15.437597-48.983621 6.233981-2.671852-1.781576-5.640464-3.858888-8.015557-6.233981L256.691243 519.864108c-15.734356-16.031115-15.734356-41.264822 0-57.295937 15.734356-15.734356 41.264822-15.734356 56.999179 0l137.15373 137.450489 259.464403-259.464403c15.734356-15.734356 41.264822-15.734356 56.999179 0C783.042089 356.288612 783.042089 381.820102 767.307733 397.553435zM512 67.731614c-245.808382 0-445.304995 199.496613-445.304995 445.304995s199.496613 445.304995 445.304995 445.304995 445.304995-199.496613 445.304995-445.304995S757.808382 67.731614 512 67.731614z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuancircle46" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M229.76512 794.23488c155.61728 155.61728 408.84224 155.61728 564.45952 0s155.61728-408.84224 0-564.45952-408.84224-155.61728-564.45952 0S74.14784 638.60736 229.76512 794.23488zM260.73088 260.72064c138.55744-138.55744 364.00128-138.55744 502.55872 0 138.53696 138.5472 138.53696 364.00128 0 502.55872-138.55744 138.5472-364.02176 138.5472-502.55872 0C122.17344 624.72192 122.17344 399.26784 260.73088 260.72064z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)