// Compiled by ClojureScript 1.10.238 {:target :nodejs}
goog.provide('curry.core');
goog.require('cljs.core');
curry.core.curry = (function curry$core$curry(f){
return (function (b){
return (function (a){
return cljs.core.partial.call(null,cljs.core.partial.call(null,f,a),b).call(null);
});
});
});
exports.curry = curry.core.curry;

//# sourceURL=out//curry/core.js
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3V0Ly9jdXJyeS9jb3JlLmpzIiwic291cmNlcyI6WyJjb3JlLmNsanMiXSwibGluZUNvdW50IjoxMywibWFwcGluZ3MiOiJBQUFBOztBQUVBLG1CQUFBLG5CQUFNQSw4Q0FBT0M7QUFBYixBQUNFLGtCQUFLQztBQUFMLEFBQ0Usa0JBQUtDO0FBQUwsQUFDRSxPQUFDLEFBQUNDLDRCQUFRLEFBQUNBLDRCQUFRSCxFQUFFRSxHQUFHRDs7OztBQUU5QixBQUFNLEFBQVNHLGdCQUFZTCIsIm5hbWVzIjpbImN1cnJ5LmNvcmUvY3VycnkiLCJmIiwiYiIsImEiLCJjbGpzLmNvcmUvcGFydGlhbCIsImpzL2V4cG9ydHMiXSwic291cmNlc0NvbnRlbnQiOlsiKG5zIGN1cnJ5LmNvcmUpXG5cbihkZWZuIGN1cnJ5IFtmXVxuICAoZm4gW2JdXG4gICAgKGZuIFthXVxuICAgICAgKChwYXJ0aWFsIChwYXJ0aWFsIGYgYSkgYikpKSkpXG5cbihzZXQhICguLWN1cnJ5IGpzL2V4cG9ydHMpIGN1cnJ5KVxuIl19