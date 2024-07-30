---
author: Andrew S Erwin
published: 2024-06-04
title: "A Beginner's Guide to Algorithms"
slug: a-beginners-guide-to-algorithms
featured: true
category: Tech
tags:
  - algorithms
  - computer science
description:
  A quick and shallow dive into what algorithms are and how they work.
image: algorithms.jpg
---

### Introduction

I am old enough to remember a time when #algorithm wasn't a bad word.
Today there are entire college courses and multi thousand dollar boot camps
targeting algorithms specifically. Yes, I know that they tend to throw in
data structures and some minor computer science! Algorithms are an essential
part of computer science.

Put simply, an algorithm is a set of instructions meant to produce or
reproduce some outcome. Some simple examples of algorithms that you might
not even know you do include sorting papers and following a recipe in
the kitchen. When you sort files or papers in your home office, you are
implementing an algorithm. That is, you are following a set of steps to
produce an outcome. This is a great example because we can see
that there are many different specifications that an algorithm can use! How will
you sort your files? By date? Alphabetically? Endless possibilities. And of course,
following a recipe you need certain ingredients and combine in certain ways at certain
times. And food recipes range from very simple, bordering on painfully obvious, to
flat out impossible without some measure of skill.

### Some Examples

One of the oldest known algorithms was developed by Euclid in around 300
B.C. It is a method for computing the greatest common divisor of two
integers. The core concept of an algorithm is break down complex task into its
simpler constituent parts. In plain English the algorithm goes something like this:

- Start with two integers, a and b
- If a equals b, you are done; a is the GCD
- If a is greater than b, subtract b from a and repeat the process
- If b is greater than a, subtract a from b and repeat the process
- Eventually, a will equal b, and that is the GCD

In Microsoft BASIC (my first programming language), it would look
something like this:

```plaintext
10 A = 10, B = 16
20 IF A = B THEN PRINT A: END
30 IF A > B THEN A = A - B: GOTO 20
40 IF B > A THEN B = B - A: GOTO 20
```

In C, the same algorithm is implemented more efficiently using a loop:

```c
#include <stdio.h>

int gcd(int a, int b) {
    int remainder;
    while (b != 0) {
        remainder = a % b;
        a = b;
        b = remainder;
    }
    return a;
}

int main() {
    int num1, num2;
    printf("Enter first number: ");
    scanf("%d", &num1);
    printf("Enter second number: ");
    scanf("%d", &num2);
    int result = gcd(num1, num2);
    printf("The GCD of %d and %d is %d\n", num1, num2, result);
    return 0;
}
```

In Python, the implementation is similarly straightforward:

```python
def gcd(a, b):
    while b != 0:
        remainder = a % b
        a = b
        b = remainder
    return a

# Example usage
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
result = gcd(num1, num2)
print(f"The GCD of {num1} and {num2} is {result}")
```

And if you know some of the tricks of your given language, you can simplify!
Here is a quick and dirty implementation of our algorithm in OCaml:

```ocaml
let rec gcd a b =
  if b = 0 then a else gcd b (a mod b)

let () =
  let num1, num2 = Scanf.scanf "%d %d" (fun x y -> x, y) in
  Printf.printf "The GCD of %d and %d is %d\n" num1 num2 (gcd num1 num2)
```

This uses recursion, which is what I want to get into next!

### Recursion

Recursion is a powerful technique used in many algorithms. The simplest way to
explain recursion is a function that runs itself.

A popular example of recursion is the Fibonacci sequence. Each
term in the sequence is the sum of the previous two terms. Here is
a simple implementation in JavaScript:

```javascript
function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage
const numTerms = parseInt(prompt("Enter the number of Fibonacci terms: "));
for (let i = 0; i < numTerms; i++) {
    console.log(`Fibonacci(${i}) = ${fibonacci(i)}`);
}
```
