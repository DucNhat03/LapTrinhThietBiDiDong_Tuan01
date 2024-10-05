import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

export default function App() {
  // 1. Print numbers from 1 to 10
  function printNumbers() {
    return Array.from({ length: 10 }, (_, i) => i + 1).join(", ");
  }

  // 2. Print the odd numbers less than 100
  function printOddNumbers() {
    let oddNumbers = [];
    for (let i = 1; i < 100; i += 2) {
      oddNumbers.push(i);
    }
    return oddNumbers.join(", ");
  }

  // 3. Print the multiplication table with 7
  function multiplicationTable7() {
    let rows = [];
    for (let i = 1; i <= 10; i++) {
      rows.push(
        <tr key={i}>
          <td>7</td>
          <td>x</td>
          <td>{i}</td>
          <td>=</td>
          <td>{7 * i}</td>
        </tr>
      );
    }
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  // 4. Print all the multiplication tables with numbers from 1 to 10
  function multiplicationTables() {
    let tables = [];
    for (let i = 1; i <= 10; i++) {
      let rows = [];
      for (let j = 1; j <= 10; j++) {
        rows.push(
          <tr key={`${i}-${j}`}>
            <td>{i}</td>
            <td>x</td>
            <td>{j}</td>
            <td>=</td>
            <td>{i * j}</td>
          </tr>
        );
      }
      tables.push(
        <div key={i}>
          <h3>Multiplication Table of {i}</h3>
          <table>
            <tbody>{rows}</tbody>
          </table>
        </div>
      );
    }
    return tables;
  }

  // 5. Calculate the sum of numbers from 1 to 10
  function sumNumbers() {
    const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
    const sum = numbers.reduce((a, b) => a + b, 0);
    const calculation = numbers.join(" + ") + " = " + sum;
    return calculation;
  }
  // 6. Calculate 10!
  function factorial10() {
    let factorial = 1;
    let calculation = "";
    for (let i = 1; i <= 10; i++) {
      factorial *= i;
      calculation += i === 1 ? `${i}` : ` x ${i}`;
    }
    calculation += ` = ${factorial}`;
    return calculation;
  }

  // 7. Calculate the sum of even numbers greater than 10 and less than 30
  function sumEvenNumbers() {
    let sum = 0;
    let calculation = "";
    for (let i = 12; i < 30; i += 2) {
      sum += i;
      calculation += i === 12 ? `${i}` : ` + ${i}`;
    }
    calculation += ` = ${sum}`;
    return calculation;
  }

  // 8. Convert from Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 9) / 5 + 32;
  }

  // 9. Convert from Fahrenheit to Celsius
  function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  // 10. Calculate the sum of numbers in an array of numbers
  function sumArray(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const calculation = numbers.join(" + ") + " = " + sum;
    return calculation;
  }

  // 11. Calculate the average of the numbers in an array
  function averageArray(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    const calculation = numbers.join(" + ") + " = " + sum;
    const average = sum / numbers.length;
    return `${calculation} / ${numbers.length} = ${average}`;
  }

  // 12. Filter positive numbers from an array
  function filterPositiveNumbers(numbers) {
    return numbers.filter((number) => number > 0);
  }

  // 13. Find the maximum number in an array
  function maxNumber(numbers) {
    return Math.max(...numbers);
  }

  // 14. Print the first 10 Fibonacci numbers without recursion
  function fibonacci10() {
    let fib = [0, 1];
    for (let i = 2; i < 10; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.join(", ");
  }

  // 15. Find the nth Fibonacci number using recursion
  function nthFibonacci(n) {
    if (n <= 1) return n;
    return nthFibonacci(n - 1) + nthFibonacci(n - 2);
  }

  // 16. Check if a number is prime
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  // 17. Sum of digits of a positive integer number
  function sumOfDigits(num) {
    const digits = num.toString().split("");
    const sum = digits.reduce((a, b) => a + parseInt(b), 0);
    const calculation = digits.join(" + ") + " = " + sum;
    return calculation;
  }

  // 18. Print the first 100 prime numbers
  function first100Primes() {
    let primes = [];
    let num = 2;
    while (primes.length < 100) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes.join(", ");
  }

  // 19. Return the first "p" prime numbers greater than "n"
  function primesGreaterThanN(p, n) {
    let primes = [];
    let num = n + 1;
    while (primes.length < p) {
      if (isPrime(num)) primes.push(num);
      num++;
    }
    return primes.join(", ");
  }

  // 20. Rotate an array to the left 1 position
  function rotateLeft(arr) {
    arr.push(arr.shift());
    return arr;
  }

  // 21. Rotate an array to the right 1 position
  function rotateRight(arr) {
    arr.unshift(arr.pop());
    return arr;
  }

  // 22. Reverse an array
  function reverseArray(arr) {
    return arr.reverse();
  }

  // 23. Reverse a string
  function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // 24. Merge two arrays and return a new array
  function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }

  // 25. Return an array of elements either in the first array or the second array but not both
  function arrayDifference(arr1, arr2) {
    return arr1
      .filter((x) => !arr2.includes(x))
      .concat(arr2.filter((x) => !arr1.includes(x)));
  }

  // 26. Return an array with elements that are in the first array but not in the second
  function arrayDifferenceFirstOnly(arr1, arr2) {
    return arr1.filter((x) => !arr2.includes(x));
  }

  // 27. Create a function that returns a new array with distinct elements
  function distinctElements(arr) {
    return [...new Set(arr)];
  }

  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }
  // 28. Calculate the sum of the first 100 prime numbers and return them in an array
  function sumFirst100Primes() {
    let primes = [];
    let num = 2;
    let sum = 0;
    while (primes.length < 100) {
      if (isPrime(num)) {
        primes.push(num);
        sum += num;
      }
      num++;
    }
    return { primes, sum };
  }

  // 29. Print the distance between the first 100 prime numbers
  function distanceBetweenPrimes() {
    const { primes } = sumFirst100Primes();
    let distances = [];
    for (let i = 1; i < primes.length; i++) {
      distances.push(primes[i] - primes[i - 1]);
    }
    return distances;
  }

  // 30. Add two positive numbers of indefinite size
  function addLargeNumbers(num1, num2) {
    let carry = 0;
    let result = "";
    let maxLength = Math.max(num1.length, num2.length);
    num1 = num1.padStart(maxLength, "0");
    num2 = num2.padStart(maxLength, "0");

    for (let i = maxLength - 1; i >= 0; i--) {
      let sum = parseInt(num1[i]) + parseInt(num2[i]) + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10) + result;
    }

    if (carry) result = carry + result;
    return result;
  }

  // 31. Return the number of words in a text
  function wordCount(text) {
    return text.trim().split(/\s+/).length;
  }

  // 32. Capitalize the first letter of each word in a text
  function capitalizeWords(text) {
    return text
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  // 33. Calculate the sum of numbers received in a comma-delimited string
  function sumFromDelimitedString(str) {
    return str.split(",").reduce((sum, num) => sum + parseFloat(num), 0);
  }

  // 34. Return an array with words inside a text
  function extractWords(text) {
    return text.match(/\b\w+\b/g);
  }

  // 35. Convert a CSV text to a “bi-dimensional” array
  function csvToArray(csv) {
    return csv.split("\n").map((row) => row.split(","));
  }

  // 36. Convert a string to an array of characters
  function stringToCharArray(str) {
    return str.split("");
  }

  // 37. Convert a string into an array containing the ASCII codes of each character
  function stringToAsciiArray(str) {
    return str.split("").map((char) => char.charCodeAt(0));
  }

  // 38. Convert an array containing ASCII codes into a string
  function asciiArrayToString(arr) {
    return arr.map((code) => String.fromCharCode(code)).join("");
  }

  // 39. Implement the Caesar cipher
  function caesarCipher(str, shift) {
    return str
      .split("")
      .map((char) => {
        let code = char.charCodeAt(0);
        if (code >= 65 && code <= 90) {
          return String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
          return String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else {
          return char;
        }
      })
      .join("");
  }

  // 40. Implement the bubble sort algorithm for an array of numbers
  function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }

  // 41. Calculate the distance between two points
  function distanceBetweenPoints(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  }

  // 42. Check if two circles are intersecting
  function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    const distance = distanceBetweenPoints(x1, y1, x2, y2);
    return distance <= r1 + r2;
  }

  // 43. Extract a column from a bi-dimensional array
  function extractColumn(arr, columnNumber) {
    return arr.map((row) => row[columnNumber]);
  }

  // 44. Convert a binary string to a number
  function binaryToNumber(binaryStr) {
    return parseInt(binaryStr, 2);
  }

  // 45. Calculate the sum of all numbers in a jagged array
  function sumJaggedArray(arr) {
    return arr.reduce(
      (sum, elem) =>
        Array.isArray(elem) ? sum + sumJaggedArray(elem) : sum + elem,
      0
    );
  }

  // 46. Find the maximum number in a jagged array
  function maxInJaggedArray(arr) {
    return arr.reduce(
      (max, elem) =>
        Array.isArray(elem)
          ? Math.max(max, maxInJaggedArray(elem))
          : Math.max(max, elem),
      -Infinity
    );
  }

  // 47. Deep copy a jagged array
  function deepCopyJaggedArray(arr) {
    return arr.map((elem) =>
      Array.isArray(elem) ? deepCopyJaggedArray(elem) : elem
    );
  }

  // 48. Return the longest word in a string
  function longestWord(str) {
    return str
      .split(/\s+/)
      .reduce(
        (longest, word) => (word.length > longest.length ? word : longest),
        ""
      );
  }

  // 49. Shuffle an array of strings
  function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // 50. Return an array of n random unique numbers from 1 to n
  function randomUniqueNumbers(n) {
    let numbers = Array.from({ length: n }, (_, i) => i + 1);
    return shuffleArray(numbers);
  }

  // 51. Find the frequency of letters inside a string
  function letterFrequency(str) {
    let freq = {};
    str.split("").forEach((char) => {
      if (/[a-zA-Z]/.test(char)) {
        char = char.toLowerCase();
        freq[char] = (freq[char] || 0) + 1;
      }
    });
    return Object.entries(freq).sort();
  }

  // 52. Calculate Fibonacci(500) with high precision
  function bigFibonacci(n) {
    let [a, b] = [BigInt(0), BigInt(1)];
    for (let i = 2; i <= n; i++) {
      [a, b] = [b, a + b];
    }
    return b.toString();
  }

  // 53. Calculate 70! with high precision
  function bigFactorial(n) {
    let result = BigInt(1);
    for (let i = 2; i <= n; i++) {
      result *= BigInt(i);
    }
    return result.toString();
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>
        BÀI TẬP TUẦN 01 <br></br>50 challenges
      </Text>
      <Text style={styles.title}>Nguyễn Đức Nhật_21059221</Text>

      <View style={styles.item}>
        <Text style={styles.bold}>1. Numbers from 1-10</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Output 1-10</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{printNumbers()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>2. Odd numbers less than 100</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Output odd number less than 100</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{printOddNumbers()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>3. Multiplication table 7</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Multiplication table 7</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{multiplicationTable7()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>4. Multiplication table 1-10</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Multiplication table 1-10</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{multiplicationTables()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>5. Sum of numbers from 1 - 10</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>From 1 - 10</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{sumNumbers()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>6. Factorial of 10</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>10!</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{factorial10()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>
          7. Sum of even numbers greater than 10 and less than 30
        </Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Sum even numbers from 10-30</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{sumEvenNumbers()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>8. Convert 100 Celsius to Fahrenheit</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Convert 100 Celsius to Fahrenheit</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{celsiusToFahrenheit(100)}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>9. Convert 212 Fahrenheit to Celsius</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Convert 212 Fahrenheit to Celsius</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{fahrenheitToCelsius(212)}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>10. Sum of numbers in array [1-10]</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Sum of numbers in array [1-10]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>11. Average of numbers in array [1-10]</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Average of numbers in array [1-10]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{averageArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>12. Positive number in array</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>
          {filterPositiveNumbers([-1, 2, -3, 4, -5, 6, -7, 8, -9, 10]).join(
            ", "
          )}
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>13. Maximum in array [1,2,3,4,5,6,7]</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Max in array [1,2,3,4,5,6,7]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{maxNumber([1, 2, 3, 4, 5, 6, 7])}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>14. First 10 Fibonacci numbers</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>First 10 Fibonacci</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{fibonacci10()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>15. 10th Fibonacci number (recursion)</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>10th Fibonacci</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{nthFibonacci(10)}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>16. Check is Prime</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Check 29 is prime ?</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{isPrime(29).toString()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>17. Sum of digits of 12345</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>12345</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{sumOfDigits(12345)}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>18. First 100 prime numbers</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>First 100 numbers</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{first100Primes()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>
          19. First 10 prime numbers greater than 100
        </Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>First 10 prime numbers greater than 100</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{primesGreaterThanN(10, 100)}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>20. Rotate [4,5] left</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Rotate [4,5] left</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{rotateLeft([4, 5]).join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>21. Rotate [4,5] right</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Rotate [4,5] right</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{rotateRight([4, 5]).join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>22. Reverse array [1, 2, 3, 4, 5]</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[1, 2, 3, 4, 5]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{reverseArray([1, 2, 3, 4, 5]).join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>23. Reverse string "Hello Nhat"</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Hello Nhat</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{reverseString("Hello Nhat")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>24. Merge [1, 2, 3] and [4, 5, 6]</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[1, 2, 3] and [4, 5, 6]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{mergeArrays([1, 2, 3], [4, 5, 6]).join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>
          25. Difference between [1, 2, 3, 4] and [3, 4, 5, 6]
        </Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[1, 2, 3, 4] and [3, 4, 5, 6]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{arrayDifference([1, 2, 3, 4], [3, 4, 5, 6]).join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>
          26. Difference from [1, 2, 3, 4] but not in [3, 4, 5, 6]
        </Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[1, 2, 3, 4] and [3, 4, 5, 6]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>
          {arrayDifferenceFirstOnly([1, 2, 3, 4], [3, 4, 5, 6]).join(", ")}
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>27. Distinct Elements:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[1, 2, 2, 3, 4, 4, 5]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{distinctElements([1, 2, 2, 3, 4, 4, 5]).join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>28. Sum of First 100 Primes:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>First 100 Primes</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{sumFirst100Primes().sum}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>29. Distance Between First 100 Primes:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>First 100 Primes</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{distanceBetweenPrimes().join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>30. Add Large Numbers:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"123456789" + "987654321"</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{addLargeNumbers("123456789", "987654321")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>31. Word Count:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"Hello World! This is a test."</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{wordCount("Hello World! This is a test.")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>32. Capitalize Words:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"hello world! this is a test."</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{capitalizeWords("hello world! this is a test.")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>33. Sum from Comma-Delimited String:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"1,2,3,4,5"</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{sumFromDelimitedString("1,2,3,4,5")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>34. Words in Text:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"Hello World! This is a test."</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{extractWords("Hello World! This is a test.").join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>35. CSV to Array:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"a,b,c\n1,2,3"</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{JSON.stringify(csvToArray("a,b,c\n1,2,3"))}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>36. String to Char Array:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"hello"</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{stringToCharArray("hello").join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>37. String to ASCII Array:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"abc"</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{stringToAsciiArray("abc").join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>38. ASCII Array to String:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[97, 98, 99]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{asciiArrayToString([97, 98, 99])}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>39. Caesar Cipher (shift 3):</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"hello", Shift: 3</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{caesarCipher("hello", 3)}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>40. Bubble Sort:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[5, 3, 8, 4, 2]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{bubbleSort([5, 3, 8, 4, 2]).join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>
          41. Distance Between Points (0,0) and (3,4):
        </Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Points: (0,0), (3,4)</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{distanceBetweenPoints(0, 0, 3, 4)}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>42. Are Circles Intersecting:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>
          Circle 1: Center (0,0), Radius 5; Circle 2: Center (4,0), Radius 5
        </Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{areCirclesIntersecting(0, 0, 5, 4, 0, 5).toString()}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>43. Extract Column:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], Column: 1</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>
          {extractColumn(
            [
              [1, 2, 3],
              [4, 5, 6],
              [7, 8, 9],
            ],
            1
          ).join(", ")}
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>44. Binary to Number:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"1010"</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{binaryToNumber("1010")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>45. Sum of Jagged Array:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[1, [2, 3], [[4]], 5]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{sumJaggedArray([1, [2, 3], [[4]], 5])}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>46. Max in Jagged Array:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[1, [2, 3], [[4]], 5]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{maxInJaggedArray([1, [2, 3], [[4]], 5])}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>47. Deep Copy Jagged Array:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>[1, [2, 3], [[4]], 5]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>
          {JSON.stringify(deepCopyJaggedArray([1, [2, 3], [[4]], 5]))}
        </Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>48. Longest Word:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"Find the longest word in this sentence."</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{longestWord("Find the longest word in this sentence.")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>49. Shuffle Array:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>["a", "b", "c", "d"]</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{shuffleArray(["a", "b", "c", "d"]).join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>50. Random Unique Numbers:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>Range: 1 to 5</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{randomUniqueNumbers(5).join(", ")}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>51. Letter Frequency:</Text>
        <Text style={styles.inputOutput}>Input:</Text>
        <Text>"Hello World!"</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{JSON.stringify(letterFrequency("Hello World!"))}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>52. Fibonacci(500):</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{bigFibonacci(500)}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.bold}>53. 70! (Factorial):</Text>
        <Text style={styles.inputOutput}>Output:</Text>
        <Text>{bigFactorial(70)}</Text>
      </View>
    </ScrollView>
  );
}

// Định nghĩa các kiểu CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
    textAlign: "center",
    marginBottom: 20,
  },
  item: {
    marginBottom: 10,
    borderColor: "#333",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#FFF5EE",
    padding: 10,
  },
  bold: {
    fontWeight: "bold",
  },
  inputOutput: {
    fontWeight: "bold",
    marginTop: 5,
  },
});
