(require '[lumo.build.api :as b])

(b/build
 (b/inputs "src") ;; variadic
 {:output-dir "out/"
  :output-to "out/main.js"
  :main 'curry.core
  :target :nodejs})
