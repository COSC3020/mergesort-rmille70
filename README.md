[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)
# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

In order to analyse the worst-case time complexity 'mergesort' we can break up the complexity into distinct sections:

1) Outer For Loop (Division)-- Dividing up the array into two subarrays until the subarrays are all size one requires $\log(n)$ iterations, meaning a complexity of $\Theta(\log(n)).$

2) Inner For Loop (Merging)-- The worst case complexity for the 'merge' function would be an array where no element within the array is in its final position. This is becasue shifting one element into its correct position has a complexity of $\Theta(n),$ so doing that across all $n$ total elements would mean a complexity of $\Theta(n*n)$ or $\Theta(n^2).$

So we are taking the array and dividing it into $\log(n)$ subarrays, then merging those subarrays with a merge function with a worst-case complexity of $\Theta(n^2)$ Thus the total worst case asymtotic complexity of 'mergesort()' is $\Theta(n^2 * \log(n)).$