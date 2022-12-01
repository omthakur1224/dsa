You like uneven distribution. You have k friends and n chocolates.

You have to distribute these n chocolates among your k friends in such a way that:

Each of your friend gets atleast 1 chocolate

No two friends get the same number of chocolates

Determine if it is possible to do so.


Input
Input Format
Each test contains multiple test cases.

The first line contains a single integer t — the number of test cases.

Description of the test cases follows.

The first and the only line of each testcase contains two integers n and k.

Constraints
1 ≤ t ≤ 10^5

1 ≤ k ≤ 10^4

1 ≤ n ≤ 10^9


Output
Output Format
For each test case, output YES if you can divide the chocolates in the required manner, else NO


Sample Input 1 

4
3 4
30 3
2 2
1 1
Sample Output 1

NO
YES
NO
YES
Hint

Test case 1
It is not possible to divide the 3 chocolates among 4 friends such that each friend gets ≥ 1 chocolatess.

Test case 2
One way to divide the 30 chocolates among 3 friends is the following: [5,9,16].

Test case 3
It is not possible to divide the 2 chocolates among 2 friends such that no two friends get the same number of chocolates.

Test case 4
We can give 1 chocolate to the only friend