# 为什么浏览器匹配css是从右到左的？

https://stackoverflow.com/questions/5797014/why-do-browsers-match-css-selectors-from-right-to-left

简言之就是 浏览器css匹配核心算法的规则是以 right-to-left 方式匹配节点的。
这样做是为了使规则能够快、准、狠地与render树上的节点匹配，通俗地将就是 就近原则。

试想一下，如果采用 left-to-right 的方式读取css规则，那么大多数规则读到最后（最右）才会发现是不匹配的，这样会做费时耗能，最后有很多都是无用的；而如果采取 right-to-left 的方式，那么只要发现最右边选择器不匹配，就可以直接舍弃了，避免了许多无效匹配。

显而易见，right-to-left 比 left-to-right 的无效匹配次数更少，从而匹配快、性能更优，所以目前主流的浏览器基本采取right-to-left的方式读取css规则。