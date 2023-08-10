<h2><a href="https://leetcode.com/problems/roman-to-integer/">13. Roman to Integer</a></h2><h3>Easy</h3><hr><div><p><font _mstmutation="1">Roman numerals are represented by seven different symbols:&nbsp;, , , , ,  and .</font><code>I</code><code>V</code><code>X</code><code>L</code><code>C</code><code>D</code><code>M</code></p>

<pre><strong>Symbol</strong>       <strong>Value</strong>
I             1
V             5
X             10
L             50
C             100
D             500
M             1000</pre>

<p><font _mstmutation="1">For example,&nbsp; is written as &nbsp;in Roman numeral, just two ones added together.  is written as&nbsp;, which is simply . The number  is written as , which is .</font><code>2</code><code>II</code><code>12</code><code>XII</code><code>X + II</code><code>27</code><code>XXVII</code><code>XX + V + II</code></p>

<p><font _mstmutation="1">Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not . Instead, the number four is written as . Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as . There are six instances where subtraction is used:</font><code>IIII</code><code>IV</code><code>IX</code></p>

<ul>
	<li><code>I</code><font _mstmutation="1"> can be placed before  (5) and  (10) to make 4 and 9.&nbsp;</font><code>V</code><code>X</code></li>
	<li><code>X</code><font _mstmutation="1"> can be placed before  (50) and  (100) to make 40 and 90.&nbsp;</font><code>L</code><code>C</code></li>
	<li><code>C</code><font _mstmutation="1"> can be placed before  (500) and  (1000) to make 400 and 900.</font><code>D</code><code>M</code></li>
</ul>

<p>Given a roman numeral, convert it to an integer.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> s = "III"
<strong>Output:</strong> 3
<strong>Explanation:</strong> III = 3.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> s = "LVIII"
<strong>Output:</strong> 58
<strong>Explanation:</strong> L = 50, V= 5, III = 3.
</pre>

<p><strong class="example">Example 3:</strong></p>

<pre><strong>Input:</strong> s = "MCMXCIV"
<strong>Output:</strong> 1994
<strong>Explanation:</strong> M = 1000, CM = 900, XC = 90 and IV = 4.
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 15</code></li>
	<li><code>s</code><font _mstmutation="1"> contains only&nbsp;the characters .</font><code>('I', 'V', 'X', 'L', 'C', 'D', 'M')</code></li>
	<li><font _mstmutation="1">It is <strong _mstmutation="1">guaranteed</strong>&nbsp;that  is a valid roman numeral in the range .</font><code>s</code><code>[1, 3999]</code></li>
</ul>
</div>