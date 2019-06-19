// Compiled by ClojureScript 1.10.516 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__1741){
var map__1742 = p__1741;
var map__1742__$1 = (((((!((map__1742 == null))))?(((((map__1742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1742):map__1742);
var m = map__1742__$1;
var n = cljs.core.get.call(null,map__1742__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__1742__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1744_1776 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1745_1777 = null;
var count__1746_1778 = (0);
var i__1747_1779 = (0);
while(true){
if((i__1747_1779 < count__1746_1778)){
var f_1780 = cljs.core._nth.call(null,chunk__1745_1777,i__1747_1779);
cljs.core.println.call(null,"  ",f_1780);


var G__1781 = seq__1744_1776;
var G__1782 = chunk__1745_1777;
var G__1783 = count__1746_1778;
var G__1784 = (i__1747_1779 + (1));
seq__1744_1776 = G__1781;
chunk__1745_1777 = G__1782;
count__1746_1778 = G__1783;
i__1747_1779 = G__1784;
continue;
} else {
var temp__5457__auto___1785 = cljs.core.seq.call(null,seq__1744_1776);
if(temp__5457__auto___1785){
var seq__1744_1786__$1 = temp__5457__auto___1785;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1744_1786__$1)){
var c__4550__auto___1787 = cljs.core.chunk_first.call(null,seq__1744_1786__$1);
var G__1788 = cljs.core.chunk_rest.call(null,seq__1744_1786__$1);
var G__1789 = c__4550__auto___1787;
var G__1790 = cljs.core.count.call(null,c__4550__auto___1787);
var G__1791 = (0);
seq__1744_1776 = G__1788;
chunk__1745_1777 = G__1789;
count__1746_1778 = G__1790;
i__1747_1779 = G__1791;
continue;
} else {
var f_1792 = cljs.core.first.call(null,seq__1744_1786__$1);
cljs.core.println.call(null,"  ",f_1792);


var G__1793 = cljs.core.next.call(null,seq__1744_1786__$1);
var G__1794 = null;
var G__1795 = (0);
var G__1796 = (0);
seq__1744_1776 = G__1793;
chunk__1745_1777 = G__1794;
count__1746_1778 = G__1795;
i__1747_1779 = G__1796;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_1797 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_1797);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_1797)))?cljs.core.second.call(null,arglists_1797):arglists_1797));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__1748_1798 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__1749_1799 = null;
var count__1750_1800 = (0);
var i__1751_1801 = (0);
while(true){
if((i__1751_1801 < count__1750_1800)){
var vec__1762_1802 = cljs.core._nth.call(null,chunk__1749_1799,i__1751_1801);
var name_1803 = cljs.core.nth.call(null,vec__1762_1802,(0),null);
var map__1765_1804 = cljs.core.nth.call(null,vec__1762_1802,(1),null);
var map__1765_1805__$1 = (((((!((map__1765_1804 == null))))?(((((map__1765_1804.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1765_1804.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1765_1804):map__1765_1804);
var doc_1806 = cljs.core.get.call(null,map__1765_1805__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1807 = cljs.core.get.call(null,map__1765_1805__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1803);

cljs.core.println.call(null," ",arglists_1807);

if(cljs.core.truth_(doc_1806)){
cljs.core.println.call(null," ",doc_1806);
} else {
}


var G__1808 = seq__1748_1798;
var G__1809 = chunk__1749_1799;
var G__1810 = count__1750_1800;
var G__1811 = (i__1751_1801 + (1));
seq__1748_1798 = G__1808;
chunk__1749_1799 = G__1809;
count__1750_1800 = G__1810;
i__1751_1801 = G__1811;
continue;
} else {
var temp__5457__auto___1812 = cljs.core.seq.call(null,seq__1748_1798);
if(temp__5457__auto___1812){
var seq__1748_1813__$1 = temp__5457__auto___1812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1748_1813__$1)){
var c__4550__auto___1814 = cljs.core.chunk_first.call(null,seq__1748_1813__$1);
var G__1815 = cljs.core.chunk_rest.call(null,seq__1748_1813__$1);
var G__1816 = c__4550__auto___1814;
var G__1817 = cljs.core.count.call(null,c__4550__auto___1814);
var G__1818 = (0);
seq__1748_1798 = G__1815;
chunk__1749_1799 = G__1816;
count__1750_1800 = G__1817;
i__1751_1801 = G__1818;
continue;
} else {
var vec__1767_1819 = cljs.core.first.call(null,seq__1748_1813__$1);
var name_1820 = cljs.core.nth.call(null,vec__1767_1819,(0),null);
var map__1770_1821 = cljs.core.nth.call(null,vec__1767_1819,(1),null);
var map__1770_1822__$1 = (((((!((map__1770_1821 == null))))?(((((map__1770_1821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1770_1821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1770_1821):map__1770_1821);
var doc_1823 = cljs.core.get.call(null,map__1770_1822__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_1824 = cljs.core.get.call(null,map__1770_1822__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_1820);

cljs.core.println.call(null," ",arglists_1824);

if(cljs.core.truth_(doc_1823)){
cljs.core.println.call(null," ",doc_1823);
} else {
}


var G__1825 = cljs.core.next.call(null,seq__1748_1813__$1);
var G__1826 = null;
var G__1827 = (0);
var G__1828 = (0);
seq__1748_1798 = G__1825;
chunk__1749_1799 = G__1826;
count__1750_1800 = G__1827;
i__1751_1801 = G__1828;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__1772 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__1773 = null;
var count__1774 = (0);
var i__1775 = (0);
while(true){
if((i__1775 < count__1774)){
var role = cljs.core._nth.call(null,chunk__1773,i__1775);
var temp__5457__auto___1829__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___1829__$1)){
var spec_1830 = temp__5457__auto___1829__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1830));
} else {
}


var G__1831 = seq__1772;
var G__1832 = chunk__1773;
var G__1833 = count__1774;
var G__1834 = (i__1775 + (1));
seq__1772 = G__1831;
chunk__1773 = G__1832;
count__1774 = G__1833;
i__1775 = G__1834;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__1772);
if(temp__5457__auto____$1){
var seq__1772__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__1772__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__1772__$1);
var G__1835 = cljs.core.chunk_rest.call(null,seq__1772__$1);
var G__1836 = c__4550__auto__;
var G__1837 = cljs.core.count.call(null,c__4550__auto__);
var G__1838 = (0);
seq__1772 = G__1835;
chunk__1773 = G__1836;
count__1774 = G__1837;
i__1775 = G__1838;
continue;
} else {
var role = cljs.core.first.call(null,seq__1772__$1);
var temp__5457__auto___1839__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___1839__$2)){
var spec_1840 = temp__5457__auto___1839__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_1840));
} else {
}


var G__1841 = cljs.core.next.call(null,seq__1772__$1);
var G__1842 = null;
var G__1843 = (0);
var G__1844 = (0);
seq__1772 = G__1841;
chunk__1773 = G__1842;
count__1774 = G__1843;
i__1775 = G__1844;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__1845 = cljs.core.conj.call(null,via,t);
var G__1846 = cljs.core.ex_cause.call(null,t);
via = G__1845;
t = G__1846;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__1849 = datafied_throwable;
var map__1849__$1 = (((((!((map__1849 == null))))?(((((map__1849.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1849.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1849):map__1849);
var via = cljs.core.get.call(null,map__1849__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__1849__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__1849__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__1850 = cljs.core.last.call(null,via);
var map__1850__$1 = (((((!((map__1850 == null))))?(((((map__1850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1850.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1850):map__1850);
var type = cljs.core.get.call(null,map__1850__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__1850__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__1850__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__1851 = data;
var map__1851__$1 = (((((!((map__1851 == null))))?(((((map__1851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1851):map__1851);
var problems = cljs.core.get.call(null,map__1851__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__1851__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__1851__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__1852 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__1852__$1 = (((((!((map__1852 == null))))?(((((map__1852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1852):map__1852);
var top_data = map__1852__$1;
var source = cljs.core.get.call(null,map__1852__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__1857 = phase;
var G__1857__$1 = (((G__1857 instanceof cljs.core.Keyword))?G__1857.fqn:null);
switch (G__1857__$1) {
case "read-source":
var map__1858 = data;
var map__1858__$1 = (((((!((map__1858 == null))))?(((((map__1858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1858):map__1858);
var line = cljs.core.get.call(null,map__1858__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1858__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__1860 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__1860__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1860,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1860);
var G__1860__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1860__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1860__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1860__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1860__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__1861 = top_data;
var G__1861__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__1861,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__1861);
var G__1861__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__1861__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__1861__$1);
var G__1861__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1861__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1861__$2);
var G__1861__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1861__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1861__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1861__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1861__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__1862 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1862,(0),null);
var method = cljs.core.nth.call(null,vec__1862,(1),null);
var file = cljs.core.nth.call(null,vec__1862,(2),null);
var line = cljs.core.nth.call(null,vec__1862,(3),null);
var G__1865 = top_data;
var G__1865__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__1865,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__1865);
var G__1865__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__1865__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__1865__$1);
var G__1865__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__1865__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__1865__$2);
var G__1865__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__1865__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__1865__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__1865__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__1865__$4;
}

break;
case "execution":
var vec__1866 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__1866,(0),null);
var method = cljs.core.nth.call(null,vec__1866,(1),null);
var file = cljs.core.nth.call(null,vec__1866,(2),null);
var line = cljs.core.nth.call(null,vec__1866,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__1866,source__$1,method,file,line,G__1857,G__1857__$1,map__1849,map__1849__$1,via,trace,phase,map__1850,map__1850__$1,type,message,data,map__1851,map__1851__$1,problems,fn,caller,map__1852,map__1852__$1,top_data,source){
return (function (p1__1848_SHARP_){
var or__4131__auto__ = (p1__1848_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__1848_SHARP_);
}
});})(vec__1866,source__$1,method,file,line,G__1857,G__1857__$1,map__1849,map__1849__$1,via,trace,phase,map__1850,map__1850__$1,type,message,data,map__1851,map__1851__$1,problems,fn,caller,map__1852,map__1852__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__1869 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__1869__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__1869,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__1869);
var G__1869__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__1869__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__1869__$1);
var G__1869__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__1869__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__1869__$2);
var G__1869__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__1869__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__1869__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__1869__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__1869__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1857__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__1873){
var map__1874 = p__1873;
var map__1874__$1 = (((((!((map__1874 == null))))?(((((map__1874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__1874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__1874):map__1874);
var triage_data = map__1874__$1;
var phase = cljs.core.get.call(null,map__1874__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__1874__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__1874__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__1874__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__1874__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__1874__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__1874__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__1874__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__1876 = phase;
var G__1876__$1 = (((G__1876 instanceof cljs.core.Keyword))?G__1876.fqn:null);
switch (G__1876__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1877_1886 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1878_1887 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1879_1888 = true;
var _STAR_print_fn_STAR__temp_val__1880_1889 = ((function (_STAR_print_newline_STAR__orig_val__1877_1886,_STAR_print_fn_STAR__orig_val__1878_1887,_STAR_print_newline_STAR__temp_val__1879_1888,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1877_1886,_STAR_print_fn_STAR__orig_val__1878_1887,_STAR_print_newline_STAR__temp_val__1879_1888,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1879_1888;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1880_1889;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__1877_1886,_STAR_print_fn_STAR__orig_val__1878_1887,_STAR_print_newline_STAR__temp_val__1879_1888,_STAR_print_fn_STAR__temp_val__1880_1889,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__1877_1886,_STAR_print_fn_STAR__orig_val__1878_1887,_STAR_print_newline_STAR__temp_val__1879_1888,_STAR_print_fn_STAR__temp_val__1880_1889,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__1871_SHARP_){
return cljs.core.dissoc.call(null,p1__1871_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__1877_1886,_STAR_print_fn_STAR__orig_val__1878_1887,_STAR_print_newline_STAR__temp_val__1879_1888,_STAR_print_fn_STAR__temp_val__1880_1889,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__1877_1886,_STAR_print_fn_STAR__orig_val__1878_1887,_STAR_print_newline_STAR__temp_val__1879_1888,_STAR_print_fn_STAR__temp_val__1880_1889,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1878_1887;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1877_1886;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__1881_1890 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__1882_1891 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__1883_1892 = true;
var _STAR_print_fn_STAR__temp_val__1884_1893 = ((function (_STAR_print_newline_STAR__orig_val__1881_1890,_STAR_print_fn_STAR__orig_val__1882_1891,_STAR_print_newline_STAR__temp_val__1883_1892,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__1881_1890,_STAR_print_fn_STAR__orig_val__1882_1891,_STAR_print_newline_STAR__temp_val__1883_1892,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__1883_1892;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__1884_1893;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__1881_1890,_STAR_print_fn_STAR__orig_val__1882_1891,_STAR_print_newline_STAR__temp_val__1883_1892,_STAR_print_fn_STAR__temp_val__1884_1893,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__1881_1890,_STAR_print_fn_STAR__orig_val__1882_1891,_STAR_print_newline_STAR__temp_val__1883_1892,_STAR_print_fn_STAR__temp_val__1884_1893,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__1872_SHARP_){
return cljs.core.dissoc.call(null,p1__1872_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__1881_1890,_STAR_print_fn_STAR__orig_val__1882_1891,_STAR_print_newline_STAR__temp_val__1883_1892,_STAR_print_fn_STAR__temp_val__1884_1893,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__1881_1890,_STAR_print_fn_STAR__orig_val__1882_1891,_STAR_print_newline_STAR__temp_val__1883_1892,_STAR_print_fn_STAR__temp_val__1884_1893,sb__4661__auto__,G__1876,G__1876__$1,loc,class_name,simple_class,cause_type,format,map__1874,map__1874__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__1882_1891;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__1881_1890;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__1876__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
