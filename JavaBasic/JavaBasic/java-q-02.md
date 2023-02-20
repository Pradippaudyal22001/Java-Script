# Write a program

#### example: Find max number
```java
public class Main {
    public static void main(String[] args) {
        int a = randomNumberZeroToHundred();
        int b = randomNumberZeroToHundred();

        System.out.printf("a=%d, b=%d", a, b);

        // 「a は bより大きいですか」を比較する
        // a は bより大きいの場合
        if (a > b) {
            System.out.printf("The maximum number is %d", a);
        }
        // a は bより大きいではない場合 
        else {
            System.out.printf("The maximum number is %d", b);
        }
    }

    public static int randomNumberZeroToHundred(){
        return (int) (Math.random() * 101);
    }
}
```
----------
#### 1) Find maximum number
> Project Name : FindMaxOfThree
```java
public class Main {
    public static void main(String[] args) {
        int a = randomNumberZeroToHundred();
        int b = randomNumberZeroToHundred();
        int c = randomNumberZeroToHundred();

        System.out.printf("a=%d, b=%d, c=%d", a, b, c);

        // Write down your logic
    }

    public static int randomNumberZeroToHundred(){
        return (int) (Math.random() * 101);
    }
}
```
----------
#### 2) Find minimum number
> Project Name : FindMinOfThree
```java
public class Main {
    public static void main(String[] args) {
        int a = randomNumberZeroToHundred();
        int b = randomNumberZeroToHundred();
        int c = randomNumberZeroToHundred();

        System.out.printf("a=%d, b=%d, c=%d", a, b, c);

        // Write down your logic
    }

    public static int randomNumberZeroToHundred(){
        return (int) (Math.random() * 101);
    }
}
```
----------
#### example: Guess odd number or even number
> Project Name : CheckOddOrEven
```java
public class Main {
    public static void main(String[] args) {
        int a = randomNumberOneToTen();

        System.out.printf("a=%d", a);

        if(a % 2 == 0) {
            System.out.printf("%d is even number.", a);
        }else{
            System.out.printf("%d is odd number.", a);
        }
    }

    public static int randomNumberOneToTen(){
        return (int) (Math.random() * 10) + 1;
    }
}
```
----------
#### 3) Count odd number
> Project Name : CountOddNumber
```java
public class Main {
    public static void main(String[] args) {
        int a = randomNumberOneToTen();
        int b = randomNumberOneToTen();
        int c = randomNumberOneToTen();

        System.out.printf("a=%d, b=%d, c=%d", a, b, c);

        int count = 0;

        // Write a program that find the odd number
        // And incrementing one to [variable : count]

        // ① check, is [a] an even/odd
        // if odd, increase count to plus 1

        // ② check, is [b] an even/odd
        // if odd, increase count to plus 1

        // ③ check, is [c] an even/odd
        // if odd, increase count to plus 1

        // finally output the result[total count]
    }

    public static int randomNumberOneToTen(){
        return (int) (Math.random() * 10) + 1;
    }
}
```
----------
#### 4) Makes a comparison between two numbers (they are equal or greater than or less than.)
> Project Name : CompareTwoNums
```java
public class Main {
    public static void main(String[] args) {
        int numOne = randomNumberOneToTen();
        int numTwo = randomNumberOneToTen();

        System.out.printf("numOne=%d, numTwo=%d", numOne, numTwo);

        // make a comparison of two numbers [numOne, numOne]
        // print out equal, or greater than, or less than
    }

    public static int randomNumberOneToTen(){
        return (int) (Math.random() * 10) + 1;
    }
}
```
----------
#### 5) Write down below program.
> Project Name : WhoIsElder
```java
public class Main {
    public static void main(String[] args) {
        int boyAge = randomNumberZeroToHundred();
        int girlAge = randomNumberZeroToHundred();

        System.out.printf("boyAge=%d, girlAge=%d", boyAge, girlAge);

        // makes below conditions
        // 1) If boy age is greater than girl age
        //    Print msg [ お兄様 ]

        // 2) If girl age is greater than boy age
        //    Print msg [ お姉様 ]
    }

    public static int randomNumberZeroToHundred(){
        return (int) (Math.random() * 101);
    }
}
```
----------
#### 6) Write down below program.
> Project Name : TripleSevenPachinko
```java
public class Main {
    public static void main(String[] args) {
        int numOne = randomNumberZeroToNine();
        int numTwo = randomNumberZeroToNine();
        int numThree = randomNumberZeroToNine();

        System.out.printf("numOne=%d, numTwo=%d, numThree=%d", numOne,numTwo,numThree);

        // makes below condition
        // 1) If all numbers [numOne, numTwo, numThree] are equal and 7
        //    Print msg [Super Lucky]

        // 2) Else If all numbers are equal
        //    Print msg [Lucky]

        // 3) Else
        //    Print msg [Unlucky]
    }

    public static int randomNumberZeroToNine(){
        return (int) (Math.random() * 10);
    }
}
```
----------
#### 7) Write down below program.
> Project Name : ShowMonthName
```java
public class Main {
    public static void main(String[] args) {
        int month = randomNumberOneToTwelve();

        System.out.printf("month=%d", month);

        // makes conditions
        // [month] represents months of year
        // if month is 1, print msg [January]
        // if 2, print msg [February]
        // .....
        
        // HINT : Use if condition or switch condition
    }

    public static int randomNumberOneToTwelve(){
        return (int) (Math.random() * 12) + 1;
    }
}
```
----------
#### 8) Write down below program.
> Project Name : PrintOneChar
```java
public class Main {
    public static void main(String[] args) {
        String str = "The quick brown fox jumps over the lazy dog.";
        int pos = randomIndex();

        System.out.printf("pos=%d", pos);
        
        // Print out the character from [String:str] by using [int:pos]

        // Before printing out, thinks below conditions
        // 1) if [int:pos] exceeds the [String:str] last pos
        //    Print msg [invalid pos]
        // 2) if not
        //   Print the [character]
    }

    public static int randomIndex() {
        return (int) (Math.random() * 100);
    }

}
```
----------
#### 9) Write down below program.
> Project Name : CutSubString
```java
public class Main {
    public static void main(String[] args) {
        String str = "The quick brown fox jumps over the lazy dog.";
        int startPos = randomIndex(str.length());
        int endPos = randomIndex(str.length());

        System.out.printf("startPos=%d, endPos=%d", startPos, endPos);

        // Cut & Print out the character from [String:str] by using [int:startPos] & [int:endPos]

        // Before printing out, thinks below conditions
        // 1) if [int:startPos] is greater than [int:endPos]
        //    Print msg [end-position must be greater than start-position]

        // 2) if [int:startPos] or [int:endPos] exceeds the [String:str] last pos
        //   Print msg [Position exceeds the given string's position]

        // 3) if not
        //   Print the [substring]
    }

    public static int randomIndex(int len) {
        return (int) (Math.random() * len * 2);
    }

}
```