---
toc: true
layout: post
comments: true
description: These are my Practice Exam 3 Corrections.
categories: [APCSP]
title: Practice Exam 3 Corrections
---

![2021 Exam MCQ Score.png]({{site.baseurl}}/images/2021 Exam MCQ Score.png "https://github.com/bushku/APCSP_1")
![2021 Q25.png]({{site.baseurl}}/images/2021 Q25.png "https://github.com/bushku/APCSP_1")
Reason D is correct: The procedure initially sets result to 1 and j to 2. In the REPEAT UNTIL loop, result is first assigned the sum of result and j, or 1 + 2. The value of j is then increased to 3. In each subsequent iteration of the loop, result is increased by each successive value of j (3, 4, 5, etc.) until j exceeds n. Therefore, the procedure returns the sum of the integers from 1 to n.
![2021 Q33.png]({{site.baseurl}}/images/2021 Q33.png "https://github.com/bushku/APCSP_1")
Reason B is correct: Algorithm II runs in time proportional to n^2, which is considered reasonable time because n^2 is a polynomial. This is considered a heuristic approach because it finds an approximate solution in reasonable time when the technique that finds an exact solution (algorithm I) does not run in reasonable time.
![2021 Q44.png]({{site.baseurl}}/images/2021 Q44.png "https://github.com/bushku/APCSP_1")
Reason B is correct: The fixed number of bits used to represent real numbers limits the range of these values; this limitation can result in round-off errors. Round-off errors typically result in imprecise values or results.
![2021 Q50.png]({{site.baseurl}}/images/2021 Q50.png "https://github.com/bushku/APCSP_1")
Reason B is correct: Symmetric encryption uses a single key for both encryption and decryption of data. Since the key can be used to unlock the data, it should be kept secret.
![2021 Q53.png]({{site.baseurl}}/images/2021 Q53.png "https://github.com/bushku/APCSP_1")
Reason A is correct: Step 4 checks every element of the list, incrementing count each time target appears. Step 5 prints true if and only if count appears multiple times in the list.
![2021 Q67.png]({{site.baseurl}}/images/2021 Q67.png "https://github.com/bushku/APCSP_1")
Reason A is correct: For this spinner, there is a 1/4 chance of "blue". The remaining 3/4 of the time, "orange" and "purple" are equally likely. If the first call to RANDOM returns 1 (which occurs 1/4 of the time), the code segment prints "blue". Otherwise, if the second call to random returns 1 (which occurs 1/2 of the time that "blue" does not occur), the code segment prints "orange". The other 1/2 of the time that "blue" does not occur, the code segment prints "purple".