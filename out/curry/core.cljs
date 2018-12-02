(ns curry.core)

(defn curry [f]
  (fn [b]
    (fn [a]
      ((partial (partial f a) b)))))

(set! (.-curry js/exports) curry)
