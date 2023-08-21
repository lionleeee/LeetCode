<h2><a href="https://leetcode.com/problems/remove-element/">27. Remove Element</a></h2><h3>Easy</h3><hr><div><p><font _mstmutation="1">Given an integer array  and an integer , remove all occurrences of  in  <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank" _mstmutation="1"><strong>in-place</strong></a>. The order of the elements may be changed. Then return <em _mstmutation="1">the number of elements in </em><em _mstmutation="1"> which are not equal to </em>.</font><code>nums</code><code>val</code><code>val</code><code>nums</code><code>nums</code><code>val</code></p>

<p><font _mstmutation="1">Consider the number of elements in  which are not equal to  be , to get accepted, you need to do the following things:</font><code>nums</code><code>val</code><code>k</code></p>

<ul>
	<li><font _mstmutation="1">Change the array  such that the first  elements of  contain the elements which are not equal to . The remaining elements of  are not important as well as the size of .</font><code>nums</code><code>k</code><code>nums</code><code>val</code><code>nums</code><code>nums</code></li>
	<li><font _mstmutation="1">Return .</font><code>k</code></li>
</ul>

<p><strong>Custom Judge:</strong></p>

<p>The judge will test your solution with the following code:</p>

<pre>int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i &lt; actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
</pre>

<p>If all assertions pass, then your solution will be <strong>accepted</strong>.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>

<pre><strong>Input:</strong> nums = [3,2,2,3], val = 3
<strong>Output:</strong> 2, nums = [2,2,_,_]
<strong>Explanation:</strong> Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre><strong>Input:</strong> nums = [0,1,2,2,3,0,4,2], val = 2
<strong>Output:</strong> 5, nums = [0,1,4,0,3,_,_,_]
<strong>Explanation:</strong> Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>0 &lt;= nums.length &lt;= 100</code></li>
	<li><code>0 &lt;= nums[i] &lt;= 50</code></li>
	<li><code>0 &lt;= val &lt;= 100</code></li>
</ul>
</div>